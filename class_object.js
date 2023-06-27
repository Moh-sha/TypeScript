var Car = /** @class */ (function () {
    function Car(n, m, c) {
        this.color = c;
        this.name = n;
        this.model = m;
    }
    Car.prototype.get = function () {
        console.log(this.color, this.name, this.model);
    };
    return Car;
}());
var result = new Car("blue", 200, "Honda");
console.log(result.get());
