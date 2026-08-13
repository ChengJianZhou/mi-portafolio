// Contenido aislado de este proyecto. Estas traducciones son independientes
// de context/lang/*.js — viven solo aquí.
//
// Esquema de content[lang]:
//   title        → título del proyecto
//   summary      → 1-2 frases, usado en la tarjeta del listado (/projects)
//   description  → array de párrafos, cuerpo principal de la subpágina de detalle
//   features     → lista de puntos técnicos destacados (chips/lista en el detalle)
//   frontendNote → nota aparte aclarando el rol secundario del frontend

import cover from '../../assets/projects/Restaurant/Restaurant.png'

export const restaurantManagementSystem = {
  slug: 'restaurant-management-system',
  stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'WebSocket (STOMP)', 'JWT', 'React'],
  cover: {
    type: 'image', // 'image' | 'gif' | 'video'
    src: cover,
  },
  links: {
    github: 'https://github.com/ChengJianZhou/Restaurant-Backend',
    demo: '',
  },

  content: {
    es: {
      title: 'Sistema de Gestión de Restaurante',
      summary:
        'API backend en Spring Boot para gestionar mesas, pedidos y cocina en tiempo real, con roles, JWT y notificaciones por WebSocket.',
      description: [
        'Este proyecto es una API REST completa para digitalizar el flujo de trabajo de un restaurante: desde que el camarero abre una mesa hasta que se cobra la cuenta. El objetivo no era construir "otro CRUD más", sino modelar de verdad el ciclo de vida de un pedido en un restaurante real, con sus estados intermedios, sus roles de personal y sus reglas de negocio (qué puede hacer cada rol, en qué momento, y qué pasa si algo se cancela a mitad de camino).',
        'El núcleo del sistema son los pedidos (Pedido) y sus líneas (LineaPedido). Cada línea representa un plato dentro de una ronda, y recorre un ciclo de estados propio — PENDIENTE → ACEPTADO → EN_PREPARACION → LISTO → ENTREGADO, con la posibilidad de CANCELADO en cualquier punto activo. Cada transición guarda su timestamp, lo que permite calcular tiempos reales de espera y de preparación por plato — información que en un restaurante real sirve para detectar cuellos de botella en cocina. Si cocina solo puede preparar parte de una cantidad pedida, el sistema divide automáticamente la línea en dos, conservando la trazabilidad hacia la línea original.',
        'La comunicación en tiempo real se construyó con WebSocket sobre STOMP: cuando el camarero manda un pedido, cocina lo recibe al instante en su pantalla sin refrescar; cuando cocina marca un plato como listo, el camarero conectado recibe una notificación personal dirigida solo a él. La autenticación de esos canales WebSocket reutiliza el mismo JWT que protege la API REST, validado en el handshake antes de aceptar la conexión — no hay un sistema de sesión aparte para tiempo real.',
        'El control de acceso está basado en roles (CAMARERO, COCINERO, BARTENDER, MANAGER, PROPIETARIO), aplicados a nivel de servicio en cada operación: por ejemplo, solo un COCINERO puede aceptar o marcar como listo una línea, solo un CAMARERO puede abrir un pedido o confirmar su entrega, y solo el PROPIETARIO puede crear o eliminar mesas. Además de la autorización, el sistema mantiene un log de auditoría (LogActividad) que registra qué usuario hizo qué acción y cuándo, consultable con filtros por usuario, tipo de acción y rango de fechas — útil para poder reconstruir qué ocurrió en el turno si hay una disputa sobre un cobro o una cancelación.',
        'El despliegue está pensado para producción real, no solo para una demo: Dockerfile multi-stage (compila con Maven, ejecuta con una JRE ligera), Docker Compose separado para desarrollo (solo levanta PostgreSQL, el backend corre con Maven en local) y para producción (backend + PostgreSQL juntos, con un volumen persistente para las imágenes de los platos subidas por el propietario). La documentación de la API está generada con Swagger/OpenAPI directamente desde las anotaciones de los controladores.',
      ],
      features: [
        'Ciclo de vida completo de pedidos y líneas con timestamps por transición de estado',
        'División automática de líneas cuando cocina acepta solo una cantidad parcial',
        'Notificaciones en tiempo real por WebSocket (STOMP) a cocina y a camareros individuales',
        'Autenticación JWT reutilizada también para autorizar el handshake WebSocket',
        'Control de acceso por rol (CAMARERO, COCINERO, BARTENDER, MANAGER, PROPIETARIO) a nivel de servicio',
        'Log de auditoría consultable con filtros por usuario, acción y rango de fechas',
        'Subida de fotos de platos con validación de tipo y tamaño de archivo',
        'Documentación interactiva de la API con Swagger/OpenAPI',
        'Despliegue Dockerizado con configuración separada para desarrollo y producción',
      ],
      frontendNote:
        'El frontend de este proyecto (React) se construyó como herramienta para poder probar visualmente el backend durante el desarrollo — pantallas de cocina, gestión de mesas, panel de camarero — pero no fue el foco del proyecto ni está pulido a nivel de producción. El trabajo real y la parte que quiero mostrar aquí es el diseño de la API, el modelado del dominio y la arquitectura del backend.',
    },
    en: {
      title: 'Restaurant Management System',
      summary:
        'Spring Boot backend API to manage tables, orders and the kitchen in real time, with role-based access, JWT and WebSocket notifications.',
      description: [
        'This project is a complete REST API to digitize a restaurant\'s workflow, from the moment a waiter opens a table to the moment the bill gets paid. The goal wasn\'t to build "yet another CRUD", but to actually model the lifecycle of a real restaurant order — its intermediate states, staff roles, and business rules (what each role can do, when, and what happens if something gets cancelled halfway through).',
        'The core of the system is orders (Pedido) and their lines (LineaPedido). Each line represents a dish within a round, and goes through its own state cycle — PENDIENTE → ACEPTADO → EN_PREPARACION → LISTO → ENTREGADO, with CANCELADO possible at any active point. Every transition stores its timestamp, which makes it possible to compute real wait and preparation times per dish — useful in a real restaurant to spot kitchen bottlenecks. If the kitchen can only prepare part of a requested quantity, the system automatically splits the line into two, keeping traceability back to the original line.',
        'Real-time communication was built with WebSocket over STOMP: when a waiter sends an order, the kitchen sees it instantly on screen without refreshing; when the kitchen marks a dish as ready, the specific waiter gets a personal notification. Authentication for those WebSocket channels reuses the same JWT that protects the REST API, validated during the handshake before the connection is accepted — there is no separate session system for real-time.',
        'Access control is role-based (CAMARERO/waiter, COCINERO/cook, BARTENDER, MANAGER, PROPIETARIO/owner), enforced at the service layer on every operation: for example, only a cook can accept or mark a line as ready, only a waiter can open an order or confirm delivery, and only the owner can create or delete tables. Beyond authorization, the system keeps an audit log (LogActividad) recording which user did what and when, queryable with filters by user, action type and date range — useful to reconstruct what happened during a shift if there\'s a dispute over a charge or a cancellation.',
        'Deployment was designed for real production use, not just a demo: a multi-stage Dockerfile (builds with Maven, runs on a lightweight JRE), separate Docker Compose setups for development (only spins up PostgreSQL, backend runs locally via Maven) and production (backend + PostgreSQL together, with a persistent volume for dish photos uploaded by the owner). API documentation is generated with Swagger/OpenAPI directly from the controller annotations.',
      ],
      features: [
        'Full order and order-line lifecycle with timestamps on every state transition',
        'Automatic line splitting when the kitchen accepts only a partial quantity',
        'Real-time WebSocket (STOMP) notifications to the kitchen and to individual waiters',
        'JWT authentication reused to authorize the WebSocket handshake as well',
        'Role-based access control (waiter, cook, bartender, manager, owner) enforced at the service layer',
        'Queryable audit log with filters by user, action and date range',
        'Dish photo upload with file type and size validation',
        'Interactive API documentation with Swagger/OpenAPI',
        'Dockerized deployment with separate configs for development and production',
      ],
      frontendNote:
        'The frontend for this project (React) was built as a tool to visually exercise the backend during development — kitchen screen, table management, waiter panel — but it wasn\'t the focus of the project and isn\'t polished to production quality. The real work, and the part I want to highlight here, is the API design, domain modeling and backend architecture.',
    },
    zh: {
      title: '餐厅管理系统',
      summary:
        '基于 Spring Boot 的后端 API，用于实时管理桌位、订单和厨房，具备角色权限、JWT 认证和 WebSocket 通知。',
      description: [
        '这个项目是一套完整的 REST API，用于将餐厅的工作流程数字化：从服务员开台，到最终结账。目标不是做"又一个 CRUD"，而是真正建模一家真实餐厅订单的生命周期——包括中间状态、员工角色，以及业务规则（谁能在什么时候做什么，以及如果中途取消会发生什么）。',
        '系统的核心是订单（Pedido）及其订单行（LineaPedido）。每一行代表一轮点单中的一个菜品，拥有自己的状态流转——待处理 → 已接单 → 制作中 → 已完成 → 已上桌，并且在任意活跃状态下都可以被取消。每次状态转换都会记录时间戳，这样就能计算出每道菜真实的等待和制作时间——这在真实餐厅中有助于发现厨房的瓶颈。如果厨房只能先完成部分数量，系统会自动将该行拆分为两行，并保留与原始行的可追溯关系。',
        '实时通信基于 STOMP 协议的 WebSocket 构建：服务员下单后，厨房屏幕无需刷新即可立即看到；厨房将某道菜标记为完成后，对应的服务员会收到专属的个人通知。这些 WebSocket 通道的身份验证复用了保护 REST API 的同一个 JWT，在连接建立前的握手阶段完成校验——没有为实时通信单独设计一套会话系统。',
        '访问控制基于角色（服务员、厨师、调酒师、经理、店主），在服务层的每个操作中强制执行：例如，只有厨师才能接受订单行或将其标记为完成，只有服务员才能开单或确认上桌，只有店主才能创建或删除桌位。除了权限控制之外，系统还维护一份审计日志（LogActividad），记录哪个用户在何时做了什么操作，并支持按用户、操作类型和日期范围筛选查询——这在结账或取消订单出现争议时，有助于还原当时班次发生的情况。',
        '部署方案是按照真实生产环境设计的，而不只是一个演示：采用多阶段构建的 Dockerfile（用 Maven 编译，用轻量级 JRE 运行），开发环境和生产环境使用不同的 Docker Compose 配置（开发环境仅启动 PostgreSQL，后端在本地通过 Maven 运行；生产环境则将后端与 PostgreSQL 一起启动，并为店主上传的菜品图片配置持久化卷）。API 文档通过 Swagger/OpenAPI 直接从控制器的注解自动生成。',
      ],
      features: [
        '完整的订单与订单行生命周期，每次状态转换均记录时间戳',
        '当厨房仅接受部分数量时自动拆分订单行',
        '基于 STOMP 的 WebSocket 实时通知，推送给厨房及指定服务员',
        'JWT 身份验证同时用于 WebSocket 握手授权',
        '基于角色的访问控制（服务员、厨师、调酒师、经理、店主），在服务层强制执行',
        '可按用户、操作类型和日期范围筛选查询的审计日志',
        '菜品图片上传，支持文件类型和大小校验',
        '基于 Swagger/OpenAPI 的交互式 API 文档',
        '容器化部署，开发与生产环境使用不同配置',
      ],
      frontendNote:
        '该项目的前端（React）是作为在开发过程中直观测试后端的工具而搭建的——包括厨房屏幕、桌位管理、服务员面板——但它并不是项目的重点，也未达到生产级的打磨程度。真正的核心工作，也是我想在这里重点展示的部分，是 API 设计、领域建模和后端架构。',
    },
  },
}