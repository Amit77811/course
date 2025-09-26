
 let mother= {
    name: "Priya Singh",
    age: 32,
    address: "Baner, Pune"
  };

  let student= {
    name: "Pratik Patil",
    age: 15,
    class: "10th",
    gender: "Male",
    address: "Viman Nagar, Pune"
  };


mother.occupation="Housewife";//if not there then it gets added.
mother.age=35;//if there then it gets updated.
console.log({mother,student});

//create a vehicle object with follwing prop
// no. of seats, topSpeed, mileage, airbags

let vehicle = {
  seats: 5,
  topSpeed: "180 km/h",
  mileage: "15 km/l",
  airbags: 2
};
delete vehicle.airbags;

vehicle.address ={
    addressLine1: "Aria tower",
    addressLine2:"Baner",
    city:"Pune",
    state:"Maharashtra"
}
console.log(vehicle.address.city);