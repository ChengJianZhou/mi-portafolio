#!/bin/bash

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
RESET='\033[0m'

# Separador visual
line() { echo -e "${BLUE}─────────────────────────────────────────${RESET}"; }

echo ""
line
echo -e "  ${BOLD}🚀 Deploy — Marcos Zhou Portfolio${RESET}"
line
echo ""

# Paso 1: Git pull
echo -e "${YELLOW}[1/3]${RESET} ${BOLD}Descargando cambios...${RESET}"
git pull origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Error en git pull. Abortando.${RESET}"
    exit 1
fi
echo -e "${GREEN}✓ Código actualizado${RESET}"
echo ""

# Paso 2: Build y reinicio del contenedor
echo -e "${YELLOW}[2/3]${RESET} ${BOLD}Construyendo imagen y reiniciando contenedor...${RESET}"
docker compose up -d --build

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Error en docker compose. Abortando.${RESET}"
    exit 1
fi
echo -e "${GREEN}✓ Contenedor actualizado${RESET}"
echo ""

# Paso 3: Recargar Nginx
echo -e "${YELLOW}[3/3]${RESET} ${BOLD}Recargando Nginx...${RESET}"
docker exec nginx nginx -s reload

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Error al recargar Nginx.${RESET}"
    exit 1
fi
echo -e "${GREEN}✓ Nginx recargado${RESET}"
echo ""

line
echo -e "  ${GREEN}${BOLD}✓ Deploy completado — marcoszhou.es${RESET}"
line
echo ""
