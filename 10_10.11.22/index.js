class Circle {
    radius;
    color;
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        return Math.round(Math.PI * this.radius * this.radius *100)/100;
    }

}
const result1 = new Circle(5, 5);
console.log(result1.getRadius());
console.log(result1.getArea());

class Cylinder extends Circle{
    constructor(radius, color, height){
        super(radius, color);
        this.height = height;
    }
    getHeight() {
        return this.height;
    }
    getVolume() {
        return Math.round(this.height * this.getArea() *100)/100;
    }
}

const result2 = new Cylinder (5, 5, 50);
console.log(result2.getHeight());
console.log(result2.getVolume());


