class Box<T> {
  private Data: T;

  addItem(item: T): void {
    this.Data = item;
  }

  getData(): T {
    return this.Data;
  }
}

const object = new Box<string>();

object.addItem("Shafin");
console.log(object.getData());
