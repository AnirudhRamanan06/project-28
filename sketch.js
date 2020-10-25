
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Body;
var treeImage,mangoImage,stoneImage;
function preload(){
	stoneImage=loadImage('Images/Plucking mangoes/stone.png');
	mangoImage=loadImage('Images/Plucking mangoes/mango.png');
	treeImage=loadImage('Images/Plucking mangoes/tree.png');
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(500,500);
	mango1=new Mango(200,201);    
    mango2=new Mango(280,101);  
    mango3=new Mango(350,301);  
    mango4=new Mango(400,51);  
    mango5=new Mango(470,401);  
	mango6=new Mango(530,71); 
	stone=new Stone(210,200);
	ground=new Ground(210,200);
	
              

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  tree.display();

  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
     if(keyCode===32){
		 Matter.body.setPosition(stoneObj.body,{x:235,y:420})
		 slingshot.attach(stoneObj.body);
	 }
}
function detectCollision(stoneObj,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stoneObj.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=mango.r+stone.r){

  }
}