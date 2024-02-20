class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    this._radius = radius;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  toString() {
    return `Circle [radius = ${this._radius} , color = ${this._color}]`;
  }
  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}
let c1 = new Circle(1, "Pink");
let c2 = new Circle(3, "Blue");

console.log(c1.toString());
console.log("Area:", c1.getArea().toFixed(4));
console.log("Circumference:", c1.getCircumference().toFixed(3));
console.log(c2.toString());
console.log("Area:", c2.getArea().toFixed(3));
console.log("Circumference:", c2.getCircumference().toFixed(3));