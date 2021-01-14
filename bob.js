class Bob
{
    constructor(x,y,r)
    {
        this.x=x;
		this.y=y;
        this.r=r
        world.gravity
		this.body=Bodies.circle(this.x, this.y, this.r/2);
		World.add(world, this.body);
    }
    display()
    {
        var paperpos=this.body.position;
        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill("red")
        ellipse(0,0,this.r, this.r);
        pop()
    }
}