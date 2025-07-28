import { useEffectOnce, useLocalStorage } from "react-use"
import { userLogout } from "../../lib/api/UserApi"
import { useNavigate } from "react-router"
import { alertError } from "../../lib/Alert"

export default function UserLogout(){
    const [token,setToken] = useLocalStorage("token", "")
    const navigate = useNavigate()

    async function handleSubmit(e) {       
        const response = await userLogout(token)
        const responseBody = await response.json()

        if(response.status === 200){
            setToken("")
            await navigate({
                pathname : "/login"
            })
        }else {
            await alertError(responseBody.errors)
        }
    }

    useEffectOnce(()=>{
        handleSubmit()
            .then(()=>console.log("success logout"))
    })
}