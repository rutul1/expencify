const person = {
  name: 'rutul',
  age: 26,
  location: {
    city: 'admedabad',
    temp: 41,
  },
}

const { name, age } = person
const { city, temp } = person.location
const array = [1, 2, 3]
const [, , three = '3'] = array
console.log(three)
console.log(name, age)
