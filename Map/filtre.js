function filtraPares(arr){
    return arr.filter(callback);
}
function callback (item){
return item % 2 !== 0; /*numero impar*/
}

const meuArrey = [3, 23 , 55, 56, 2, 4];
console.log(filtraPares(meuArrey));