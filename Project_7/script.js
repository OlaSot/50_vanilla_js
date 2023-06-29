const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
    console.log(left);
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
    console.log(left);
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
    console.log(right);
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
    console.log(right);

})