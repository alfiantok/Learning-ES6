// Basic variable

const varconst = "halo"; // fixed
let hello = "hello" // not global scope



// Learn string congcat

const elhtml = document.getElementById("el");

let teks = "teks";
elhtml.innerHTML = `exyz ${teks}`;

// Object literal
function addProduct(name, weight) {
    let property = {
        name,
        weight
    }
    return property;
}

let productAdd = addProduct("nasi padang", "0.5kg");
console.log(productAdd);


// Array foreach
const myName = ['alfian', 'fian', 'pian'];
myName.forEach((nama) => {
    console.log(nama);
})

// Array map
const huruf = ['a', 'b', 'c'];
huruf.map((hrf) => {
    console.log(hrf);
})