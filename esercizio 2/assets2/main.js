 let nomi = ["elia", "carlo", "lorenzo", "fabio"];
 let countName = nomi.length;
 
 
 let cognomi = ["rossi", "magris", "simoni", "dorigo"];
 let countCognomi = cognomi.length;



  let randomnomi = nomi[Math.floor(Math.random(0) * countName)]; //scrivo la classe array per far si che il math random venga applicato ad essa
  let randomcognomi = cognomi[Math.floor(Math.random(0) * countCognomi)] ;
 
 
 console.log(randomnomi + ' ' + randomcognomi);
 

