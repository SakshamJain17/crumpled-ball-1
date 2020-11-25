
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,dustbin1;
var paper, paperIMG;
var dustbin2, dustbin3;


function preload()
{
	paperIMG = loadImage("paper.png")
}

function setup() {
	 createCanvas(1500, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(750,490,1500,20);
	dustbin1= new Dustbin(1200,470,200,20);
	dustbin2= new Dustbin(1100,430,20,100);
	dustbin3= new Dustbin(1300,430,20,100);
	paper = new Paper(200,100,20);

}
function draw() {
  background("blue");
  
	Engine.update(engine);
	dustbin1.display();
  dustbin2.display(); 
  dustbin3.display();
	ground.display(); 
  paper.display();
	
 }

function keyPressed(){
	 if(keyCode===UP_ARROW){
		 console.log("hello");
		Matter.Body.applyForce(paper.body, paper.body.position,{x:80,y:-100})
	 }
 }



