// Archivo para gestionar toda la sesión del usuario

import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher(["/dashboard"])

export const onRequest = clerkMiddleware((auth, context) => {
    const {userId, redirectToSignIn} = auth()

    // Si la ruta es protegida y el usuario no está autenticado, redirige al usuario a la página de inicio de sesión 
    if(isProtectedRoute(context.request) && !userId){
        return redirectToSignIn()
    }
});
