 let nomi = ["elia", "carlo", "lorenzo", "fabio"];
 let countName = nomi.length;
 
 
 let cognomi = ["rossi", "magris", "simoni", "dorigo"];
 let countCognomi = cognomi.length;



 let randomnomi = nomi[Math.floor(Math.random(0) * countName)];
 let randomcognomi = cognomi[Math.floor(Math.random(0) * countCognomi)] ;
 
 
 console.log(randomnomi + ' ' + randomcognomi);
 

