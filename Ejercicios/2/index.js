// Inserta dinamicamente en un html un div vacio con javascript.
//
// div = document.createElement('div')
// document.body.appendChild(div)

// document.body.innerHTML = `<div>  <div>`

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
div = document.createElement('div')
p = document.createElement('p')
div.appendChild(p)
document.body.appendChild(div)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

const div = document.createElement('div')
for (let i = 0; i < 6; i++) {
  p = document.createElement('p')
  p[i]
  div.appendChild(p)
}
document.body.appendChild(div)

// const divLoopP = document.createElement('div')

// for (let i = 0; i < 6; i++) {
//   const p = document.createElement('p')
//   divLoopP.appendChild(p)
// }

// document.body.appendChild(divLoopP)

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

p = document.createElement('p')
p.textContent = 'Soy dinámico'
document.body.appendChild(p)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('h2.fn-insert-here')
h2.innerHTML = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ul = document.createElement('ul')

for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.append(li)
}

// document.body.append(ul)
// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminables = document.querySelectorAll('.fn-remove-me')

for (const eliminable of eliminables) {
  eliminable.remove()
}
// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const ele = document.querySelector('div')
const p = document.createElement('p')
p.textContent = 'Voy en medio!'

ele.after(p)

// const allDiv = document.querySelectorAll("div");

// const pMid = document.createElement("p");

// pMid.textContent = "Voy en medio!";
// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here ;document.body.insertBefore(pMid, allDiv[1]);

const insertDiv = document.querySelectorAll('div.fn-insert-here')

for (const div of insertDiv) {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
}
