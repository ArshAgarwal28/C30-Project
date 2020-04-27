class Target {
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, 25, 50, options);
        this.w = 25;
        this.h = 50;
        
        this.randColor = ["assets/Blue.png", "assets/darkBlue.png", "assets/lightOrange.png", "assets/lightPink.png", "assets/Orange.png", "assets/Pink.png"];
        this.randomNum = Math.round(random(0, 5))

        this.image = loadImage(this.randColor[this.randomNum]);
        World.add(world, this.body);
        
        this.Visiblity = 255;
        this.State = "alive"
    }
  
    display() {          
        if (this.body.speed < 3 && this.State === "alive") {
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.w, this.h);
            pop();

        } else {
            this.State = "dead";
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
            pop();

        }        
    }
}

    /*constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, 25, 50, options);
        this.w = 25;
        this.h = 50;
        
        
        World.add(world, this.body);

        //this.randColor = ["red", "yellow", "orange", "blue", "green"];
        //this.randomNum = Math.round(random(0, 4))
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        fill("red");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);

        pop();
    }
}*/

//this.randColor[this.randomNum]