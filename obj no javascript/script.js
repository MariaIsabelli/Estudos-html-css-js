class ContaBancaria {
    constructor (agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero= numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo (valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return "operação negada"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero,  saldo){
        super(agencia, numero,  saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito  (){
return this.cartaoCredito
    }
    set cartaoCredito(valor){
this._cartaoCredito = valor ;
    }
}

class ContaPoupanca  extends ContaBancaria{
    constructor(agencia, numero,  saldo){
        super(agencia, numero,  saldo);
        this.tipo = 'poupanca';
    }
}
class ContaUniversitaria  extends ContaBancaria{
    constructor(agencia, numero,  saldo){
        super(agencia, numero,  saldo);
        this.tipo = 'universitaria';
    }
    sacar(valor){
        if(valor > 500){
            return "operação negada"
        }
        this._saldo = this._saldo - valor ;
    }
}