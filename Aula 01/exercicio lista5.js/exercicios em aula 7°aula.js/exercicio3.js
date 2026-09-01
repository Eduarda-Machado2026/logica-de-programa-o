let alunos = [
    { nome: "paloma", idade: 33, nota: 7.5 },
    { nome: "rafaela", idade: 38, nota: 8.5 },
    { nome: "lucas", idade: 31, nota: 6.5 },
];
   let somaNota=0
   let media_geral=0
for (let i = 0; i < alunos.length; i++) {
somaNota += alunos[i].nota;
    console.log(alunos[i].nome + "-" + alunos[i].nota + "  " + somaNota);
}
media_geral = somaNota / alunos.length;
console.log("Média geral: " + media_geral);