class Attach {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: .2
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }
    
    display() {
        push();
        fill("white");
        strokeWeight(4);

        if (this.sling.bodyA != null) {
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y)
        }

        pop();
    }
}