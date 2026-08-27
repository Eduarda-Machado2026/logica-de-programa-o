function classificarTriangulo(a,b,c){

if(a+b>c && a+c>b && b+c>a){
if(a=== b && b===c){
    return "Equilátero";
} else if (a===b||a=== c||b===c){
    return"Isósceles";
} else {
    return "Escaleno";
}
} else {
    return "os valores informados não formam um triângulo válido";
}
}