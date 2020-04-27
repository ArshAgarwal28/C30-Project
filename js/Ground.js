class Ground {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h = height;
        
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        
        push();
        translate(this.body.position.x, this.body.position.y);

        rectMode(CENTER);
        fill (rgb(46, 43, 68));
        stroke(rgb(46, 43, 68))
        rect(0, 0, this.w, this.h);

        pop ();
    }
}

//