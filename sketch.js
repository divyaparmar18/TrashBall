const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1700,20)

    
    side1 = new Log(810,380,180, PI/2);
    side2 = new Log(710,320,100, -PI/8);
    side3 = new Log(910,320,100, PI/9);
    ball = new Ball(100,300,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    side1.display();
    side2.display();
    side3.display();
    ball.display();

}

function keyPressed(){
    if(keyCode === 38){
       Matter.Body.applyForce( ball.body, {x: ball.body.position.x, y: ball.body.position.y}, {x: 90, y: -55});
    
    }
}




