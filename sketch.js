  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Constraint = Matter.Constraint;

var bottle;
var ground;
var backgroundImage;
var mountain1;

function preload() {
  //backgroundImage = loadImage("download(3).png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  bottle = new Bottle(200,200,50,50);
  ground = new Ground(400,410,800,20);
  mountain1 = new Mountain(400,300,80,80);

  Engine.run(engine);
  
}

function draw() {
  background(0);  

  bottle.display();
 mountain1.display();
}