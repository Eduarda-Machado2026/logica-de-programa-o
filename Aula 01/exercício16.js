saldo=50
saque=30
if(saque>0 && saque<=saldo && saldo % 10===0){
    saldo=saldo-saque
    console.log("saque realizado com sucesso!");
} else {
    let novosaldo =saldoatual-saque;
console.log("saque restante: R$ $ + novosaldo.toFixed"(2));
return novosaldo;

}

