 function calcularFatorial(n){
    if(n<0) return "o número deve ser maior ou igual a zero.";
    let fatorial=1
    for(let i=1; i<=n; i++){
        fatorial *= i;
    }
    return fatorial;
 }