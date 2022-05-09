import { performPurchase } from "..";
import { User } from "../model/IUser";


describe ("testanto o teste", () => {
    test("teste", () => {
        const user: User = {name: "Maria", balance: 15}
        const result = performPurchase(user, 5)
        expect(result).toEqual({name: "Maria", balance: 10})
    })
})


