import {Cliente} from "./class-cliente.js"
import {Conta} from "./class-conta.js"

const clinte1 = new Cliente("Igor", "000.000.000-01")
const clinte2 = new Cliente("Pedro", "000.000.000-02")

const conta1 = new Conta(clinte1, "001", 500)
const conta2 = new Conta(clinte2, "002", 300)

conta2.transferir(50, conta1)

console.log("=====================================")
console.log(conta1)
console.log("=====================================")
console.log(conta2)
console.log("=====================================")