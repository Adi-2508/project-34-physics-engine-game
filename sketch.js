
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crane,craneImg;
var block;
var bgImg;

function preload(){
craneImg=loadImage("crane.png")
bgImg = loadImage("background.jpeg")
}

function setup() {
  createCanvas(500,400);

  engine = Engine.create();
  world = engine.world;
  crane = createSprite(300,200,50,50)
  crane.addImage(craneImg)

  block = new Blocks(150,200,300,300)
}


function draw() 
{
  background(bgImg);
  Engine.update(engine);
  block.display();
  World.remove(engine.world,blocks);
  drawSprites();
}

