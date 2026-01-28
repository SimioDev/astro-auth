// Archivo para gestionar toda la sesión del usuario

import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';
import { protectedRoutes } from './config/auth';

const isProtectedRoute = createRouteMatcher(protectedRoutes);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth();

  // Si la ruta es protegida y el usuario no está autenticado, redirige al usuario al inicio de sesión.
  if (isProtectedRoute(context.request) && !userId) {
    return redirectToSignIn();
  }
});
