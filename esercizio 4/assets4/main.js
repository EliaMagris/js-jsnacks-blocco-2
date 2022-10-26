let array1 = [1,2,3,4,5,6,7,8,9,10]


let array2 = [1,2,3,4,5]

let arrayMaggiore;
let arrayMinore;

if(array1.length > array2.length){
  arrayMaggiore = array1;
  arrayMinore = array2;

}else if(array1.length = array2.length){
    console.log("hanno lo stesso numero di dati")

}else{
    arrayMaggiore = array2;
    arrayMinore = array1;
}

let differenzaLunghezzaArray = arrayMaggiore.length - arrayMinore.length;

for(let i = 0; i < differenzaLunghezzaArray; i++){
    let numeroRandom = Math.floor(Math.random()* 100);
    
    arrayMinore.push(numeroRandom);
}

console.log(arrayMinore);
