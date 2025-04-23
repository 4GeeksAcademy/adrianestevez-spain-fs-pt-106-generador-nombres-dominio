import "./style.css";

const cajaDominios = document.querySelector("#listado-dominios");

const pronoun = ["tech", "next", "go", "vibe"];
const adj = ["smart", "cloud", "nova", "data"];
const noun = ["hub", "system", "space", "spot"];
const ext = [".com", ".io", ".xyz", ".net"];

const domainList = [];

const genDomain = (arr, arr1, arr2, arr3) => {
  const newDomain = [];
  for (let p of arr) {
    newDomain.push(p); // the

    for (let a of arr1) {
      newDomain.push(a); // the, smart

      for (let n of arr2) {
        newDomain.push(n); // the, smart, hub

        for (let e of arr3) {
          newDomain.push(e); // the, smart, hub, .com
          domainList.push(newDomain.join(""));
          newDomain.pop(); // the, smart, hub
        }

        newDomain.pop(); // the, smart
      }

      newDomain.pop(); // the
    }

    newDomain.pop(); // [] 
  }
  return domainList;
}

genDomain(pronoun, adj, noun, ext);

console.log(domainList);

const html = domainList.map((dominio) => {
  return `<li>${dominio}</li>`;
});


window.onload = () => {
  cajaDominios.innerHTML = html.join("");
};
