class POLYGON {

    constructor(x, y, w) {
        // var prop = { density: 1 ,isStatic:true}
        this.poly = Matter.Bodies.rectangle(x, y, w, w);
        this.w = w;
        this.shape = loadImage("sprites/polygon.png");
        Matter.World.add(world, this.poly);
    }

    display() {
        imageMode(CENTER)
        image(this.shape, this.poly.position.x, this.poly.position.y, this.w, this.w);
    }

}