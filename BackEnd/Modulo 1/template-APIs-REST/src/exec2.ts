
export function imprimeTresCoresFavoritas(): string[] {
    let cor1: string = prompt("Insira sua primeira cor favorita")
    let cor2: string = prompt("Insira sua segunda cor favorita")
    let cor3: string = prompt("Insira sua terceira cor favorita")
    return [cor1, cor2, cor3]
}

console.log(imprimeTresCoresFavoritas())