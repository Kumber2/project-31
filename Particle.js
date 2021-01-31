class Particle{
    constructor(x,y,radius,colour){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y, width,height, options);
        this.colour = colour(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
       rotate(angle);
       noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
       pop();
    }
    

    
}