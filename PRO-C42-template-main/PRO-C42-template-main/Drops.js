class Drops{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            friction:20
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,5,this.diameter);

    } 
    //creating an update function to drops if it crosses the limits of the height
    update(){
        if(this.Drops.position.y > height){
            Matter.Body.setPosition(this.Drops,{x:10,y:350});
        }
    }

}