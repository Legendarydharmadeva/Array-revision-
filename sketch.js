var ticket = []

var myNumber;

function setup(){
  createCanvas(500,500); 

  for(var i = 0 ; i < 13 ; i++ ){
    ticket[i] = Math.round(random(1,100));
  }
}


function draw(){
  background("white");

  var x = 35;
  
  for(var i = 0 ; i < 13 ; i++){
    text(ticket[i],x,250);
    x = x + 35;
  }

  if(keyDown("space")){
   myNumber = Math.round(random(1,100));
   text(myNumber,250,350);
   for(var i = 0; i < 13; i++){
     if(myNumber === ticket[i]){
       ticket[i] = "X";
     }
   }
  }
}
