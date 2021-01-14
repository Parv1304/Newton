const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create(World,{gravity:{x:1,y:1}});
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,500,100);
	bob2=new Bob(300,500,100);
	bob3=new Bob(400,500,100);
	bob4=new Bob(500,500,100);
	bob5=new Bob(600,500,100);
	roof=new Roof(400,150,600,20);
	chain1=new Chain(bob1.body,roof.body,-200,0);
	chain2=new Chain(bob2.body,roof.body,-100,0);
	chain3=new Chain(bob3.body,roof.body,0,0);
	chain4=new Chain(bob4.body,roof.body,+100,0);
	chain5=new Chain(bob5.body,roof.body,+200,0);
	Engine.run(engine);
  
}


function draw() {
	/*Matter.World.gravity.x;
	Matter.World.gravity.y;*/
	rectMode(CENTER);
	background(0);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	drawSprites();
	if(keyCode===RIGHT_ARROW)
	{
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:10,y:10});
	}
}