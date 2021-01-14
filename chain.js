class Chain
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options=
        {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:1,
            length:250
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain); 
    }
    display()
    {
        push();
        var posA=this.chain.bodyA.position;
        var posB=this.chain.bodyB.position;
        var anchor1X=posA.x;
        var anchor1Y=posA.y;
        var anchor2X=posB.x+this.offsetX;
        var anchor2Y=posB.y+this.offsetY;
        strokeWeight(4);
        stroke("#999999");
        line(anchor1X,anchor1Y,anchor2X,anchor2Y);
        pop();
    }
}