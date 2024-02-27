// foreach , forof, forin 

// const arr = [1,2,3,4,5]

// for (const value of arr) {
//     console.log(value);
// }

const langs = ["Rust", "GOLang", "TypeScript", "JavaScript"]

// langs.forEach( (val)=>{
//     console.log(`The value is ${val}`);
// })

// function printMe(item){
//     console.log(item);
// }

// langs.forEach(printMe)   // Passing the function reference as callback function Do not execute the function here like this printme()

// langs.forEach((item, index, arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName : "javaScript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "typescript",
        languageFile : "ts"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )