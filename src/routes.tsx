import { createBrowserRouter } from "react-router-dom"

import { Dashboard } from "./pages/pages/dashboard"
import { SignIn } from "./pages/auth/sign-in"
import { AppLayout } from "./pages/layouts/app"
import { AuthLayout } from "./pages/layouts/auth"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [{path: '/', element: <Dashboard />}]
    },
    {
        path: 'sign-in',
        element: <AuthLayout />,
        children: [{path: '/sign-in', element: <SignIn />}]
    }
])