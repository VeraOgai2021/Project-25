class Paper{
    constructor (x,y){
        var papero={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(x,y,50,50,papero);
        this.height = 50;
        this.width = 50;
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
		image(this.image, 200,626.5,100,100)
        pop();
    }
    
}