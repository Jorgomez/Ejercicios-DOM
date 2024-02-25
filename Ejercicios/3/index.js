// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

// const ul = document.createElement('ul')
// for (const countrie of countries) {
//   const li = document.createElement('li')
//   li.textContent = countrie
//   ul.append(li)
//   document.body.append(ul)
// }

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// const eliminable = document.querySelector('.fn-remove-me')
// eliminable.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
// s

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

// for (const countrie of countries) {
//   const div = document.createElement('div')
//   const h4 = document.createElement('h4')
//   const img = document.createElement('img')

//   h4.innerText = countrie.title
//   img.src = countrie.imgUrl
//   div.append(h4, img)
//   section.append(div)
// }

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

// const section = document.createElement('section')
// const printImg = (arrays) => {
//   section.innerHTML = ''
//   for (const array of arrays) {
//     const div = document.createElement('div')
//     const h4 = document.createElement('h4')
//     const img = document.createElement('img')

//     h4.innerText = array.title
//     img.src = array.imgUrl
//     div.append(h4, img)
//     section.append(div)
//   }

//   document.body.append(section)
// }
// ______________Parte Especifica Resolicion ejercicio_____________
// const button = document.createElement('button')
// button.textContent = 'eliminar ultimo elemento'
// document.body.append(button)
// const eliminar = () => {
//   countries.pop(), printImg(countries)
// }
// button.addEventListener('click', eliminar)
// _________________________________________________________________
printImg(countries)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const section = document.createElement('section')
const printImg = (arrays) => {
  section.innerHTML = ''
  for (let i = 0; i < arrays.length; i++) {
    const div = document.createElement('div')
    const h4 = document.createElement('h4')
    const img = document.createElement('img')
    const button = document.createElement('button')

    h4.innerText = arrays[i].title
    img.src = arrays[i].imgUrl
    button.textContent = 'delete myself'
    button.addEventListener('click', () => eliminar(i))
    div.append(h4, img, button)
    section.append(div)
  }

  document.body.append(section)
}
// ______________Parte Especifica Resolicion ejercicio_____________
const mybutton = document.querySelectorAll('button')

const eliminar = (i) => {
  countries.splice(i, 1), printImg(countries)
}

// ________________________________________
printImg(countries)
