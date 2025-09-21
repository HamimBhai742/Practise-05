//arrow function
export const confusion = (name, age) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

//ternary operator
export const checkEvenOdd = (number) => {
  const result = number % 2 === 0 ? 'Even' : 'Odd';
  console.log(`${number} is ${result}`);
};

//array methods
export const arrayFunctions = (arr) => {
  const doubled = arr.map((num) => num * 2);
  const evens = arr.filter((num) => num % 2 === 0);
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const result = { doubled, evens, sum };
  console.log(result);
};


