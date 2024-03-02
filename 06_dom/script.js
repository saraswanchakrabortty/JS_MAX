const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);
// console.log(parent.children[0].innerHTML);

for (let index = 0; index < parent.children.length; index++) {
    const element = parent.children[index];
    console.log(element.innerHTML);
}