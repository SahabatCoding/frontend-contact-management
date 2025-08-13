import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useEffectOnce, useLocalStorage } from "react-use"

export default function ProtectedRoute({ children }) {

    const [token, _] = useLocalStorage("token", "")
    const navigate = useNavigate()

    async function validasi() {
        console.log(token)
        if (!token) {
            await navigate({
                pathname: "/login"
            })
        }
    }

    useEffect(()=>{
        validasi().then(()=>console.log("berhasil"))
    },[token])



    return children
}