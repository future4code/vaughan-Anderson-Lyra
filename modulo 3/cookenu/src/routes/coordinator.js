export  const history = useNavigate()

export const goToLogin = (history) => {
    history('/login')
}

export const goToSignUp = (history) => {
    history('/cadastro')
}

export const goToAddRecipes = (history) => {
    history('/adicionar-receita')
}

export const goToRecipeDetail = (history) => {
    history(`/detalhe/${id}`)
}

export const goToRecipesList = (history) => {
    history('/')
}