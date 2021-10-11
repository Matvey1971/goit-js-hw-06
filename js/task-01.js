const containerElement = document.getElementById("categories");

const amountLength = containerElement.children.length;
console.log("Number of categories:", amountLength);

const itemAll = Array.from(document.querySelector("#categories").children);
for (let elem of itemAll) {
    let subject = elem.firstElementChild.textContent;   
    let quantityLi = elem.lastElementChild.children.length;
    console.log(`Category: ${subject} \nElements: ${quantityLi}`);
};

