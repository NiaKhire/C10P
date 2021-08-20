
var ship, ship_sailing, edges ; 
var screenImage;
var screen

function preload(){
ship_sailing = loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png");
screenImage = loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite (100,350,30,30);
  ship.addAnimation("sailing", ship_sailing);

  edges = createEdgeSprites();

  screen = createSprite (200,200,400,400);
  screen.addAnimation = loadImage("sea", sea.png);
  screen.velocityX = -2;

}

function draw() {
  background("blue");
 
  ship.collide(screen);


  if(screen.x>0){
    screen.x = screen.width/2
    }






  drawSprites();
}