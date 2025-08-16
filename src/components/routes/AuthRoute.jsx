import { Navigate } from "react-router"
import { useLocalStorage } from "react-use"

export function ProtectedRoute({ children }) {

    const [token, _] = useLocalStorage("token", "")

    if (!token) {
        return <Navigate to={"/login"} replace />
    }
    return children  //tidak tampilkan login
}

export function PublicRoute({ children }) {

    const [token, _] = useLocalStorage("token", "")

    if (token) {
        return <Navigate to={"/dashboard/contacts"} replace />
    }
    return children
}