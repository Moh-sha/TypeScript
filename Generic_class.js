var Box = /** @class */ (function () {
    function Box() {
    }
    Box.prototype.addItem = function (item) {
        item = this.Data;
    };
    Box.prototype.getData = function () {
        return this.Data;
    };
    return Box;
}());
var object = new Box();
object.addItem("Shafin");
console.log(object.getData());
