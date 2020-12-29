class Box {
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density:1.0,
            friction:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pose=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pose.x,pose.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
        
    }
}