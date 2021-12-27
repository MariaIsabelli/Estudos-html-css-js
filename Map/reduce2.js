const lista =  [{
    nome: 'sabao',
    preco: '1,'
},{
    nome: 'chocolate',
    preco: '6'
},{
    nome: 'toalha',
    preco:'50'
}
];
const saldoDiponivel = 100;
function calculaSaldo(saldoDiponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDiponivel);
}
console.log(calculaSaldo(saldoDiponivel, lista));