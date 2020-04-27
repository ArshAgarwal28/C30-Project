class Circle {
    constructor(x,y,radius, minusValue) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        this.m = minusValue;
    }

    display() {
        var pos = this.body.position;
        
        push();
        translate(this.body.position.x, this.body.position.y);

        ellipseMode(CENTER);
        fill ("blue");
        stroke("blue");
        ellipse(0, 0, this.r, this.r);

        fill ("white");
        stroke("white");
        ellipse(0, 0, this.r - this.m, this.r - this.m);

        pop();
    }
}