class Car {
  public color: string;
  public name: string;
  public model: number;

  constructor(n: string, m: number, c: string) {
    this.color = c;
    this.name = n;
    this.model = m;
  }

  get(): void {
    console.log(this.color, this.name, this.model);
  }
}

const result = new Car("blue", 200, "Honda");

console.log(result.get());
