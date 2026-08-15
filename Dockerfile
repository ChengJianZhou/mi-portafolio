# Etapa 1 "build": usa la imagen oficial de Node 24 (alpine = versión ligera de Linux)
FROM node:24-alpine AS build

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copia solo package.json primero — si no cambian deps, Docker reutiliza esta capa (caché)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Genera la carpeta dist/ con el build de producción
RUN npm run build

# ─────────────────────────────────────────────
# Etapa 2: imagen final — Node solo para servir archivos, sin código fuente ni node_modules
FROM node:24-alpine

# Instala "serve", un servidor de archivos estáticos minimalista
RUN npm install -g serve

# Copia SOLO la carpeta dist/ de la etapa anterior (el resto no existe aquí)
COPY --from=build /app/dist /app/dist

WORKDIR /app

# Cuando arranque el contenedor, sirve dist/ en el puerto 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
