const person = {
    pName: "Shaikat",
    age: 27,
    friends: ['sayed','arafat','Tauhid'],
    visaStatus: true
}

const newPerson = JSON.stringify(person)

console.log(newPerson)
console.log(typeof(newPerson))
console.log(typeof(person))

const newPersonSimplify = JSON.parse(newPerson)
console.log(newPersonSimplify)
console.log(newPerson)
console.log(newPerson.pName)