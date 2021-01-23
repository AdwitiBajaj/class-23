// name spacing is just like giving a nickname.
// const is a constant which is not going to change throughout the program.
// var is variable in which the value changes in our program.

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world,ball;
var ground;
var box;
var box1;


function setup() {
  createCanvas(1200,600);
  engine  = Engine.create();
  world = engine.world;

  
  Engine.run(engine);

  // console.log(ball);

 ground = new Ground();
box = new Box(400,100,50,50);
box1 = new Box(420,50,50,50);
}

function draw() {
  background(0); 
 
  
  ground.display()
  box.display()
  box1.display()
}