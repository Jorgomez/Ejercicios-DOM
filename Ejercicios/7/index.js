const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const ul = document.createElement('ul')
for (const place of places) {
  const li = document.createElement('li')
  li.textContent = place

  ul.append(li)
}

document.querySelector('[data-function="printHere"]').append(ul)
