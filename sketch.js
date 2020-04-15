const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1700,20)

    DustbinObj = new Dustbin(810,315,150,0);

    side1 = new Side(764,315,150, -PI/13);
    side2 = new Side(855,315,150, PI/13);

    paperObj = new PaperBall(100,300,20);

}

function draw(){
    background("#808080");
    Engine.update(engine);
    paperObj.display();
    ground.display();
    side1.display();
    side2.display();
    DustbinObj.display();
    
}

function keyPressed(){
    if(keyCode === 38){
       Matter.Body.applyForce( paperObj.body, {x: paperObj.body.position.x, y: paperObj.body.position.y}, {x: 87, y: -65});
    }
}




