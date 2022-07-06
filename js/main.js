//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
const displayDish = () => {
    let foodCategory = Object.keys(person3)
    console.log(foodCategory)
    for(let i = 0; i < foodCategory.length; i++){
        Array.isArray(person3[foodCategory[i]]) ? Object.values(person3[foodCategory[i]]).forEach(dish => console.log(dish)) : console.log(person3[foodCategory[i]])
    }
    return
}
displayDish()





//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person{
    constructor(full_name, age, number){
        this.full_name = full_name
        this.age = age
        this.number = number
    }
    printInfo = () => {
        return `This is Prototype number ${this.number} \nArtificial age: ${this.age}\nGiven name: ${this.name}`
    }
    ageAge = (added_num) => {
        this.age += added_num
        return `${this.name} Prototype ${this.number} has been aged by ${added_num} year. Memory storage depreciated.`
    }
}
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const stringLength = word => {
    return new Promise((resolve, reject) => word.length > 10 ? resolve('Big word') : reject('Small Number'))

}
stringLength("Hello world")
