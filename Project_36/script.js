const container = document.querySelector('#container')
const colors = ['#D147FF', '#483D8B', '#736aa6', '#6600cc', 'purple' ]
const squares  = 500;

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))


    container.append(square)

}

function setColor(el){
    const color = getRandomColor()
    el.style.background = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}



function removeColor(el){
    el.style.background =  '#1d1d1d'
    el.style.boxShadow = '0 0 2px black'
}



function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}