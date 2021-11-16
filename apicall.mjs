import fetch from "node-fetch";

const formula = "2 + 3"

const encoded_formula = encodeURIComponent(formula);
console.log(encoded_formula)
fetch(`http://0.0.0.0:8080/?formula=${encoded_formula}`)
    .then(response => response.json())
    .then(data => console.log(data))
