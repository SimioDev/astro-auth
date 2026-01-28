# Astro Auth Starter (Clerk)

Plantilla base para proyectos en Astro que requieren autenticación y rutas protegidas con Clerk.

## ✅ Qué incluye

- Astro 5 + Tailwind v4
- Clerk listo para login/registro
- Middleware con rutas protegidas
- Separación de rutas públicas y privadas
- Configuración centralizada en `src/config`

## 📁 Estructura

```text
src/
├── config/
│   ├── auth.ts
│   └── site.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── 404.astro
│   ├── dashboard.astro
│   └── index.astro
└── middleware.ts
```

## 🚀 Guía de uso (como plantilla)

1) Clona o copia este repositorio.
2) Instala dependencias:

```sh
pnpm install
```

3) Copia `.env.example` a `.env` y agrega tus credenciales de Clerk:

```sh
cp .env.example .env
```

```env
CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
```

4) Arranca el entorno local:

```sh
pnpm dev
```

5) Personaliza el proyecto:
- Cambia nombre/descripcion en `src/config/site.ts`.
- Define rutas privadas en `src/config/auth.ts`.
- Agrega nuevas páginas privadas dentro de `src/pages` (por ejemplo `src/pages/admin.astro`).

## 🔒 Cómo funcionan las rutas protegidas

El middleware (`src/middleware.ts`) revisa si la ruta es privada. Si el usuario no está autenticado, redirige al login de Clerk.

Para añadir rutas protegidas, edita `src/config/auth.ts`:

```ts
export const protectedRoutes = [
  '/dashboard(.*)',
  '/admin(.*)',
];
```

### ✅ Forma rápida (recomendada)

1) Crea tu página en `src/pages` (ej: `src/pages/admin.astro`).
2) Agrega el patrón en `src/config/auth.ts` (ej: `/admin(.*)`).

Así mantienes URLs simples como `/admin`.

### 📁 Si quieres agrupar en carpeta

Puedes colocar todo bajo una carpeta y protegerla por prefijo. Por ejemplo:

```text
src/pages/app/
  dashboard.astro
  settings.astro
```

Luego protege el prefijo:

```ts
export const protectedRoutes = [
  '/app(.*)',
];
```

Las URLs quedarán como `/app/dashboard`, `/app/settings`.

> Nota: Astro también permite *route groups* con paréntesis (ej: `src/pages/(protected)/dashboard.astro`) para agrupar sin cambiar la URL, pero si mueves rutas entre carpetas conviene reiniciar el dev server.

## 🎨 Personalización rápida

- Ajusta estilos en `src/layouts/Layout.astro` y en las páginas.
- Cambia la apariencia de Clerk en `astro.config.mjs` (tema, idioma, etc.).

## 🧪 Comandos útiles

```sh
pnpm dev      # desarrollo
pnpm build    # build de producción
pnpm preview  # preview local
```
