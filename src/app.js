import "./style.css";

const cajaDominios = document.querySelector("#listado-dominios");

const pronoun = ["tech", "next", "go", "vibe"];
const adj = ["smart", "cloud", "nova", "data"];
const noun = ["hub", "system", "space", "spot"];
const ext = [".com", ".io", ".xyz", ".net"];

/* He conseguido hacer una nueva versión, aun sin usar destructuración ni 
spread operator. En cuanto pueda subo otra versión. Dejo comentado abajo como
esta hecho antes.*/
const getDomain = (arr, arr1, arr2, arr3) => {
  let newDomain;
  let count = 0;
  const domainList = [];

  for (let p of arr) {
    for (let a of arr1) {
      for (let n of arr2) {
        for (let e of arr3) {
          newDomain = `${p}${a}${n}${e}`;
          domainList[count] = newDomain;
          count++;
        }
      }
    }
  }

  return domainList;
};

const listadoDominios = getDomain(pronoun, adj, noun, ext);

console.log(`Elementos en domainList: ${listadoDominios.length}`);

const html = listadoDominios.map((dominio) => {
  return `<li>${dominio}</li>`;
});


window.onload = () => {
  cajaDominios.innerHTML = html.join("");
};

//CÓDIGO ANTIGUO
// const getDomain = (arr, arr1, arr2, arr3) => {
//   const newDomain = [];
//   for (let p of arr) {
//     newDomain.push(p); // the

//     for (let a of arr1) {
//       newDomain.push(a); // the, smart

//       for (let n of arr2) {
//         newDomain.push(n); // the, smart, hub

//         for (let e of arr3) {
//           newDomain.push(e); // the, smart, hub, .com
//           domainList.push(newDomain.join(""));
//           newDomain.pop(); // the, smart, hub
//         }

//         newDomain.pop(); // the, smart
//       }

//       newDomain.pop(); // the
//     }

//     newDomain.pop(); // []
//   }
//   return domainList;
// }