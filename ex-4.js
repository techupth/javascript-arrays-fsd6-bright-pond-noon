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

const employees1 = {
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"],
};

const employees2 = {
  name: "Kody",
  age: 19,
  hobbies: ["Computer games", "Wakeboard"],
};

employees.push(employees1, employees2)

console.log(employees)