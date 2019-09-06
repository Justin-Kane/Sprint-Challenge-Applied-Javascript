// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let divHead = document.createElement('div')
    let date = document.createElement('span')
    let h1 = document.createElement('h1')
    let spanTemp = document.createElement('span')

    divHead.classList.add('header')
    date.classList.add('date')
    h1.classList.add('h1')

    
    divHead.appendChild(date)
    divHead.appendChild(h1)
    divHead.appendChild(spanTemp)
    
    h1.textContent = 'Lambda Times'
    date.textContent = 'Date: 28 March 2019'
    spanTemp.textContent = 'Temp: 98°'

    return divHead
}

document.querySelector('.header-container').appendChild(Header())