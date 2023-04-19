
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options={
		isStatic: true
	}

	

	block1 = Bodies.circle(300, 10, 50, block1_options);
	World.add(world,block1);

	block2= Bodies.rectangle(110, 50, 80, 80, block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(500,50,130,80, block3_options);
	World.add(world,block3);

	plane = Bodies.rectangle(400,700,800,20, plane_options);
	World.add(world,plane);

	Engine.run(engine);

	var block1_options ={
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0
	}

	var block2_options ={
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}

	var block3_options ={
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3
	}
  
}


function draw() {
  rectMode(CENTER);
  background(20, 230, 160);
fill(140, 10, 30);
  

  Engine.update(engine);

  ellipse(block1.position.x,block1.position.y,50);
  rect(block2.position.x,block2.position.y,80,80);
  rect(block3.position.x,block3.position.y,130,80);

  rect(plane.position.x,plane.position.y,800,20);





  
  
  drawSprites();
 
}



