class Ball {
    constructor(x, y,radius) {
      var options = {
        'density':1.2,
        'friction': 0.5,
        'restitution':0.3,
         isStatic : false
      };
      this.body = Matter.Bodies.circle(x, y, radius, options)
      this.radius = 20;
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
      push();
      // translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      strokeWeight(3);
      fill('white')
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, 20)
      pop();
    };
  };

  
  
  