const generalItems = document.getElementById("categories");

const liItem = generalItems.children;

const numberItem = generalItems.children.length;
console.log("Number of categories:", numberItem);


// const itemAll = document.querySelectorAll('.item');
// Array.prototype.forEach.call(itemAll, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title} \nElements: ${itemsLength}`);
// });


const itemAll = Array.from(document.querySelector("#categories").children);
for (let elem of itemAll) {
    let subject = elem.firstElementChild.textContent;   
    let quantityLi = elem.lastElementChild.children.length;
    console.log(`Category: ${subject} \nElements: ${quantityLi}`);
};