const lista = [
    {
        produto: 'leite',
        preco: 5.5
    },
    {
       produto:'arroz',
       preco: 4 
    },
    {
        produto: 'biscoito',
        preco: 2
    }
];

const saldo = 20;

function listaPrecos(lista,saldo) {
    return lista.reduce(function(prev,current,index) {
        console.log("iteração ", index+1);
        console.log({ prev });
        console.log({ current });
        return prev-current.preco;
    }, saldo)
}

console.log(listaPrecos(lista,saldo));
