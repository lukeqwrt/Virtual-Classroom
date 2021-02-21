const mybars = document.querySelector('.mybars')
const nav = document.querySelector('.nav')
const mylist = document.querySelector('list')

mybars.addEventListener('click', () => {
    nav.classList.add('active')
})

nav.addEventListener('click', ()=> {
    nav.classList.remove('active')
})



const go = document.querySelector('.go')

go.addEventListener('click', () => {
     window.location.href='../teacher/mystudents.html'
})



const myprofile = document.querySelector('.myprofile')
const signout = document.querySelector('.signout-container')

myprofile.addEventListener('click', () => {
    signout.classList.add('active')
})

signout.addEventListener('click', ()=> {
    signout.classList.remove('active')
})

