
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var DustbinImage

function preload()
{
	DustbinImage=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	Paper1=new Paper();
	Dustbin1=new Dustbin(620,635,100,10);
	Dustbin2=new Dustbin(670,600,10,100);
	Dustbin3=new Dustbin(570,600,10,100);
	ground1=new Ground(400,650,800,20);

	
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  Paper1.display();
  
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  ground1.display();
  image(DustbinImage,620,580,125,125);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:150,y:-125});
	}
}

