function validaArray(arr, num){
   try{
    if(!arr && !num) throw new ReferenceError("Envie os parametros")
    if(typeof arr != 'object') throw new TypeError("Array precisa ser do tipo object ")
    if(typeof arr != 'number') throw new TypeError("Array precisa ser do tipo number ")
    if(arr.length !== num) throw new RangeError("tamanho invalido!")

    return arr;
   }
   catch{
       if(e instanceof ReferenceError){
         console.log("este erro é um ReferenceError") 
         console.log(e.message)
       }else if (e instanceof TypeError){
            console.log("este erro é um TypeError") 
            console.log(e.message)
        }else if(e instanceof RangeError){
                console.log("este erro é um RangeError") 
                console.log(e.message)
            }else{
                console.log("Ocorreu um tipo de erro não esperado:" + e)
            }
        }
       }
       console.log(validaArrey)();
 