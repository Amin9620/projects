class Car {
  public brand: string; // public (default)
  
  constructor(brand: string) {
    this.brand = brand;
  }

  public drive() {
    console.log(`${this.brand} is driving`);
  }
}

const car = new Car("Toyota");
console.log(car.brand); // ✅ allowed
car.drive();          