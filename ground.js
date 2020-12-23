class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.bodies = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.bodies)
    }

    display(){
        var pos = this.bodies.position;
        rectMode(CENTER);
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)

    }
}