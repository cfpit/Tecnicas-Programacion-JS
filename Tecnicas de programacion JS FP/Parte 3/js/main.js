console.log('hola soy un script externo!')

var refLista = document.getElementById('lista')
console.log(refLista)

refLista.innerHTML = '<ul>'+
                        '<li>Item 1</li>'+
                        '<li>Item 2</li>'+
                        '<li>Item 3</li>'+
                     '</ul>'
                        