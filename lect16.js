let parent = {
  name: "Amit Deshmane",
  age: 40,
  address: "Baner, Pune"
};

let learner = {
  name: "Karan",
  age: 18,
  class: "12th",
  gender: "Male",
  address: "Kothrud, Pune"
};

parent.job = "Teacher";
parent.age = 42;
console.log({ parent, learner });

let car1 = {
  seats: 4,
  topSpeed: "200 km/h",
  mileage: "20 km/l",
  airbags: 4
};
delete car1.airbags;

car1.location = {
  addressLine1: "Galaxy Heights",
  addressLine2: "Wakad",
  city: "Pune",
  state: "Maharashtra"
};

console.log({ car: car1 });
console.log("City of car location is", car1?.location?.city);

console.log(car1.brand); // undefine - because its not mentioned before
car1.brand = "Hyundai";

const car2 = {
  brand: "Honda",
  seats: 4,
  topSpeed: "220 km/h",
  mileage: "18 km/l",
  airbags: 6,
  colors: ["red", "black", "silver"],

  location: {
    addressLine1: "Skyline Towers",
    addressLine2: "Aundh",
    city: "Nagpur",
    state: "Maharashtra"
  }
};

const cars = [car1, car2];
console.log({ cars });

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]?.brand);
  console.log(cars[i]?.location?.city);
}



const car3 = {
  brand: "Toyota",
  seats: 5,
  topSpeed: "210 km/h",
  currentSpeed: 70,
  mileage: "16 km/l",
  airbags: 6,
  colors: ["white", "grey", "blue"],

  location: {
    addressLine1: "Orchid Residency",
    addressLine2: "Hinjewadi",
    city: "Nashik",
    state: "Maharashtra"
  },
  isDriving: function () {
    if (this.currentSpeed > 0) {
      console.log(this.brand + " is running at speed " + this.currentSpeed);
    } else {
      console.log(this.brand + " is not running");
    }
  }
};

car3.isDriving();
