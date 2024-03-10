// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);

const fish = {
    name: "sorse vetki",
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(fish, "name"));

Object.defineProperty(fish, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(fish, "name"));