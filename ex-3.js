const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[1].name;
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;

console.log(alex);
console.log(alexHobbies);
console.log(alexAndJamesAge);

employees[1].hobbies.push("Watching basketball");
employees[1].hobbies.pop();
employees[1].hobbies.unshift("Watching basketball");
console.log(employees[1].hobbies);
