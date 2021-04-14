var polygon;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(900, 400);
	engine = Matter.Engine.create();
	world = engine.world;

	rectMode(CENTER);
	ground = new GROUND(360, 330, 170, 15);
	ground2 = new GROUND(760, 200, 120, 15);

	ground3 = new GROUND(180, 200, 10, 10);

	box1 = new BOX(300, 280);
	box2 = new BOX(330, 280);
	box3 = new BOX(360, 280);
	box4 = new BOX(390, 280);
	box5 = new BOX(420, 280);
	box6 = new BOX(315, 250);
	box7 = new BOX(345, 250);
	box8 = new BOX(375, 250);
	box9 = new BOX(405, 250);
	box10 = new BOX(330, 220);
	box11 = new BOX(360, 220);
	box12 = new BOX(390, 220);
	box13 = new BOX(345, 190);
	box14 = new BOX(375, 190);
	box15 = new BOX(360, 160);
	box16 = new BOX(730, 160);
	box17 = new BOX(760, 160);
	box18 = new BOX(790, 160);
	box19 = new BOX(745, 130);
	box20 = new BOX(775, 130);
	box21 = new BOX(760, 100);

	polygon = new POLYGON(100, 200, 50);

	rope = new ROPE(this.polygon, {x:100,y:200});
	console.log(rope)

	Matter.Engine.run(engine);
}


function draw() {
	background(0);
	Matter.Engine.update(engine);


	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();

	polygon.display();

	// rope.display();


	ground.display();
	ground2.display();
	ground3.display();

	drawSprites();
}