export class Conta{
    agencia
    _cliente
    _saldo = 0
    static numeroDeContas = 0

    constructor(cliente, agencia, saldo){
        Conta.numeroDeContas += 1
        this._cliente = cliente
        this.agencia = agencia
        this._saldo = saldo
    }

    set cliente(nomeDoCliente){
        if(nomeDoCliente instanceof Cliente){
            this._cliente = nomeDoCliente
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }
    
    depositar(valor){
        if(valor <= 0) return
        this._saldo += valor
    }

    sacar(valor){
        if(this._saldo > valor) {
            this._saldo -= valor
            return valor
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

}
