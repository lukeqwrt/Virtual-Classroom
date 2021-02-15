const mybars = document.querySelector('.mybars')
const nav = document.querySelector('.nav')
const mylist = document.querySelector('list')

mybars.addEventListener('click', () => {
    nav.classList.add('active')
})

nav.addEventListener('click', ()=> {
    nav.classList.remove('active')
})