
// //DESTRUCTURING

// const laptop = {
//     brand: "Lenovo",
//     model: "IdeaPad",
//     price: 65000
// };

// const movie = {
//     title: "Interstellar",
//     year: 2014,
//     rating: 8.7
// };


// const {brand,model,price} = laptop
// const {title,year,rating} = movie


// console.log(brand)
// console.log(model)
// console.log(price)

// console.log(title)
// console.log(year)
// console.log(rating)



// // RENAMING VARIABLE 

// const book = {
//     title: "Atomic Habits",
//     author: "James Clear",
//     pages: 320
// };

// const {title: bookTitle , author:writer} = book
// console.log(bookTitle)
// console.log(writer)


// // ASSIGNING DEFAULT VALUES 

// const game = {
//     name: "Minecraft",
//     company: "Mojang",
//     year: 2011
// };

// const {name, company:developer, year} = game

// console.log(name)
// console.log(developer)
// console.log(year)

// const student = {
//     name: "Rahul",
//     course: "BCA"
// };

// const {name,course,city = "Delhi"} = student
// console.log(name)
// console.log(course)
// console.log(city)

// const phone = {
//     brand: "Samsung"
// };

// const {brand, model = "Unknow", price = 0} = phone

// console.log(brand)
// console.log(model)
// console.log(price)


// NESTED DESTRUCTURING

const employee = {
    name: "Rahul",
    company: {
        name: "Google",
        location: "Bangalore"
    }
};

const {company:{name,location}} = employee

console.log(name)
console.log(location)

const laptop = {
    brand: "Lenovo",
    specs: {
        ram: "16GB",
        storage: "512GB SSD"
    }
};

const {specs:{ram,storage}} = laptop

console.log(ram)
console.log(storage)
