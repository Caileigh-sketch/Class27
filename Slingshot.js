class Slingshot
{
    constructor(A,B)
    { 
        var options = {
            bodyA: A,
            bodyB: B,
            stiffness: 0.05,
            length: 30,
        }
       this.sling = Max.create(options)
       World.add(world, this.sling);
    }

    display()
    {
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,
        this.sling.bodyB.position.x, this.sling.bodyB.position.y)
    }
} 
