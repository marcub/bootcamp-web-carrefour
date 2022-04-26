function valida_arrays (arr,num) {
    try {

        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Envie um array do tipo Object");
    
        if(typeof num !== 'number') throw new TypeError("Envie um parâmetro do tipo Number");
    
        if(arr.length !== num) throw new RangeError("O tamanho do array deve ser igual ao parâmetro");  
        
        return arr;
    } 
    catch (e) {

        if (e instanceof ReferenceError) {
            console.log("Este é um ReferenceError");
            console.log(e.message);
        } 
        
        else if (e instanceof TypeError) {
            console.log("Este é um TypeError");
            console.log(e.message);
        }
        
        else if (e instanceof RangeError) {
            console.log("Este é um RangeError");
            console.log(e.message);
        }
        
        else {
            console.log("Tipo de erro não esperado:" + e);
        }  
    }
}

console.log (valida_arrays());
