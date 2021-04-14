class BOX {
    constructor(x, y) {
        var prop = { 'restitution': 0.8}
        this.box = Matter.Bodies.rectangle(x, y, 30, 30, prop);
        Matter.World.add(world, this.box);
    }
    display() {
        push();
        fill("lightblue")
        rect(this.box.position.x, this.box.position.y, 30, 30);
        pop();
    }
}