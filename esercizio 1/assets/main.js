let number = parseInt(prompt("scrivi un numero"));

if(number % 2 == 0){
    document.getElementById("resultPari").innerHTML = ` il numero: ${number} è pari`
}else{
    document.getElementById("resultPari").innerHTML = ` il numero: ${number + 1} è pari`
}