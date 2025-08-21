import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useLocalStorage } from "react-use"

export function ProtectedRoute({ children }) {

    const [token,_] = useLocalStorage("token", "")
    const navigate = useNavigate()

    async function fetch() {
        if(!token){
            await navigate({
                pathname : "/login"
            })
        }
    }

    useEffect(()=>{
        fetch().then(()=>console.log("berhasil protect"))
    })

    if (!token) {
        return null
    }
    return children 
}

export function PublicRoute({ children }) {

    const [token, _] = useLocalStorage("token", "")
    const navigate = useNavigate()

    async function fetch() {
        if(token){
            await navigate({
                pathname : "/dashboard/contacts"
            })
        }
    }

    useEffect(()=>{
        fetch().then(()=>console.log("berhasil public"))
    })

    if (token) {
        return null
    }

    return children
}