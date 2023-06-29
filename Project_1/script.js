const panels = document.querySelectorAll('.panel') //создает что-то по типу массива


//проходимся по массиву , при нажатии на каждую карточку мы хотим добавлять класс active
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removectiveClasses()
        panel.classList.add('active')
        
    })
})


function removectiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}