import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToRecipesList } from "../routes/coordinator"



const useUnProtectedPage = () => {
    const navigate = useNavigate()
        useLayoutEffect(() => {
            const token = localStorage.getItem('token')
            if (token) {
                goToRecipesList(navigate)
            }
        }, [navigate])
    
    
}

export default useUnProtectedPage