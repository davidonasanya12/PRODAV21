var bg,rG,lG,bG1,lG1,tG,lG2,rG1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
let engine
let world

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
  ellipseMode(RADIUS);
	bG = new Ground(400,390,800,20)
	rG = new Ground(600,350,20,100)
	lG = new Ground(730,350,20,100)
	tG = new Ground(400,10,800,20)
	lG2 = new Ground(10,200,20,400)
	lG1 = new Ground(690,160,20,100)
	rG1 = new Ground(790,200,20,400)
	bG1 = new Ground(750,200,100,20)
	ball = Bodies.circle(200,200,20,{restitution:0.5})
	World.add(world,ball)

	Engine.run(engine);
	b1=createImg("push.png")
	b1.position(220,30)
	b1.size(50,50)
  b1.mouseClicked(hforce)
  
 
}
function hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.1})
  }
//function keuPresseed(){
//	if (keyCode === UP_ARROW) {
//		Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.5,y:0})
//	}
//}


var ball_options = {
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
} 
  
  
function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse (ball.position.x,ball.position.y,20)
bG.display() 
rG.display() 
lG.display() 
lG1.display() 
bG1.display() 
tG.display()
lG2.display()
rG1.display()
  drawSprites();

 
}



