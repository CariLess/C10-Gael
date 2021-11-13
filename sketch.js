
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200);
  
  //crear sprite del t-rex.
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  trex.x= 50;
 
  edges = createEdgeSprites();
}

function draw(){
  background("white")
  
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY +0.5;
  trex.collide(edges[3]);

  //0 derecha
  //1 izquierda
  //2 arriba
  //3 abajo

drawSprites();
}
