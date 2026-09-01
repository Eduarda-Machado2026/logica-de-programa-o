let produto=[
    {nome:"pão",preco:3.50,quantidade:3},
    {nome:"leite",preco:4.50,quantidade:1},
    {nome:"ovo",preco:3.00,quantidade:6},
    {nome:"descartáveis",preco:20.00,quantidade:"3"},
    {nome:"molho",preco:2.99,quantidade:"1"},
];
for(let i=0;i<produto.length;i++){
    console.log(produto[i].nome + " - " + produto[i].preco);
}