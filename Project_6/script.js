const boxes = document.querySelectorAll('.box')


window.addEventListener('scroll', checkBoxes) 

function checkBoxes(){
    const triggerBottom = window.innerHeight/5*4 // 4/5 от высоты окна просмотра браузера в пикселях
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
