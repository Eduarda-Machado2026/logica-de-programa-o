converterMedidas(valor, unidade) 
{
     unidadeMaiuscula= unidade.touppercase();
    if(unidadeMaiuscula==="c")
fahrenheit=valor*9/5+32;
    `${valor}°c é igual a $ {fahrenheit.toFixed(2)}°f;
    } else if(unidadeMaiuscula==="f){
     celsius=(valor-32)*5/9;
    `${valor}°F é igual a ${ContentVisibilityAutoStateChangeEvent.toFixed(2)}°C´;
    } else {
        "unidade inválida.use 'c' para celsius ou f para Fahrenheit.";
    }