const {Engine, World, Bodies, Constraint, Body} = Matter;

var engine, world;

var bottGround, sideGround1, sideGround2;
var ball, pointAttach, pointCirc;

var ground1;
var target1;


var gameState = "onSling";

function setup(){
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  bottGround = new Ground(600, height + 2, 1200, 20);
  sideGround1 = new Ground(0, 200, 20, 12000);
  sideGround2 = new Ground(1200, 200, 20, 12000);

  ball = new Ball(200, 370, 45, 45);
  pointAttach = new Attach(ball.body, {x:200, y: 275});
  pointCirc = new Circle(200, 275, 10, 5)

  ground1 = new Ground(650, 225, 150, 20);
  target1 = new Target(650, 200);
}

function draw() {
  background("rgb(24, 24, 29)");
  Engine.update(engine);

  ball.display();
  pointAttach.display();

  if (gameState === "onSling") {
    pointCirc.display();
  }

  ground1.display(); 

  //console.log(target1.Visiblity)

  if (target1.Visiblity < 0) {
    target1 = null;
    target1 = new Target(650, 200);
  }

  target1.display();
}


function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased() {
  if (gameState === "onSling") {
    pointAttach.fly();
    gameState = "launched"
  }
}

function keyPressed() {
  if (keyCode === 32 && gameState === "launched") {
    Matter.Body.setPosition(ball.body, {x:200, y:300});
    Matter.Body.setVelocity(ball.body, {x:0, y: 0})
    pointAttach.attach(ball.body);
    gameState = "onSling";
  }
}