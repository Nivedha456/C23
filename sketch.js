const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,ground;

function setup(){
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(500,200,50,30);
  box2=new Box(520,180,60,40);
  ground=new Ground(600,380,1200,20);

}
function draw(){
  background("blue")
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}

