# Mundo Eco Verde

Sitio web para una empresa de gestión integral de residuos y soluciones ambientales, con un panel administrativo que permite editar todo el contenido del sitio sin tocar código.

**Sitio en vivo:** [mundoecoverde.co](https://www.mundoecoverde.co/)

## Funcionalidades

**Sitio público**
- Páginas de inicio, nosotros, servicios, proceso, iniciativas y contacto
- Formulario de contacto cuyos mensajes llegan al panel
- Contenido cargado desde la base de datos (textos, cifras, servicios, pasos del proceso, materiales)

**Panel administrativo** (`/admin`)
- Edición de cada sección: inicio, nosotros, servicios, proceso e iniciativas
- Bandeja de mensajes del formulario de contacto
- Gestión de usuarios con roles
- Ajustes generales del sitio
- Rutas protegidas por middleware con sesión firmada (JWT) y contraseñas con bcrypt

## Stack

| Capa | Tecnologías |
| --- | --- |
| Framework | Next.js 16 (App Router, Server Actions), React 19, TypeScript |
| Estilos | Tailwind CSS v4, Lucide, React Icons |
| Datos | PostgreSQL, Prisma 7 |
| Autenticación | JWT (jose), bcrypt |
| Despliegue | Vercel |

## Estructura

```
mundo-ecoverde/
├── app/
│   ├── (páginas públicas)   # inicio, nosotros, servicios, proceso, iniciativas, contacto
│   ├── admin/               # panel: login y dashboard por secciones
│   ├── actions/             # Server Actions para guardar el contenido
│   └── api/auth/            # inicio y cierre de sesión
├── components/              # componentes de la interfaz
├── lib/                     # autenticación y cliente de Prisma
├── prisma/schema.prisma     # modelo de datos del contenido editable
└── middleware.ts            # protección de las rutas /admin
```

## Ejecutar en local

```bash
npm install
# Crea .env con DATABASE_URL y JWT_SECRET
npx prisma db push
npm run seed:admin -- admin@correo.com UnaClaveSegura
npm run dev
```

## Autor

Desarrollado por **Martín García Zurique** · [DevMart Solutions](https://devmart.co) · [LinkedIn](https://www.linkedin.com/in/martin-elias-garcia)
