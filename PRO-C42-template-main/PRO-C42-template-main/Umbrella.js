class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.umbrella)
        //load Image for BestMan
        this.image = loadImage("Walking Frame/batman.png");
        this.human = loadImage("Walking Frame/walking_1.png");
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount >= 200){
        image(this.image,200,350,300,300);
        }
        else{
            image(this.human,200,350,300,300);
        }
    }
}
