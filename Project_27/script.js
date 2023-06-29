const button = document.querySelector('.btn')
const toasts = document.querySelector('#toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification ( message = null, type = null) 
//Когда функция createNotification вызывается без указания аргументов для message и type, они примут значения null по умолчанию. Это означает, что если вы не передаете значения message и type при вызове createNotification, они будут равны null.
    {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage() 
    // if message show the message else getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage () {
    return messages [Math.floor(Math.random() * messages.length)]  //В данном случае, messages предполагается, что это массив, и мы обращаемся к его элементам с помощью индекса, который вычисляется с помощью выражения Math.floor(Math.random() * messages.length).
}

/*
-Math.random() генерирует случайное число от 0 до 1 (включительно). Например, 0.135.
-Math.random() * messages.length умножает случайное число на длину массива messages. Это дает случайное число в диапазоне от 0 до messages.length. Например, если messages.length равно 10, результат будет 1.35.
-Math.floor() округляет число вниз до ближайшего целого значения. В нашем примере, результат будет 1.
-messages[Math.floor(Math.random() * messages.length)] используется для получения элемента массива messages с индексом, равным случайному числу. Например, если messages содержит ["Привет", "Как дела?", "Пока"], и случайное число равно 1, функция вернет "Как дела?". */

function getRandomType () {
    return types [Math.floor(Math.random() * types.length)] 
}