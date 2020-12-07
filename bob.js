class Bob {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':50
      }
      this.body =Matter.Bodies.circle(x, y,20, options);
      this.width = 20;
      this.height = 20;
      this.color = color(random(0,200),random(0,200),random(0,200),random(0,200),random(0,200));
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3);
      fill(this.color);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };