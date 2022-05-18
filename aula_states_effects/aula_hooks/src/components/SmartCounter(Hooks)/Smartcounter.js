import {useState} from 'react';


function SmartCounter() {

    //retorna um vetor
    //sendo o vetor uma variável stateful
    //função amarrada a essa variável que atualiza o valor
    
    const [quantity, upQuantity] = useState(0);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;