import axios from "axios";

type Adress = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    complemento: string,
    numero: number
};

export const getAddressInfo = async (cep: string, numero: number, complemento: string) : Promise <Adress> => {

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    return{
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf,
        cep: response.data.cep,
        complemento:complemento,
        numero:numero
    }
}