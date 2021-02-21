const myprofile = document.querySelector('.myprofile')
const signout = document.querySelector('.signout-container')

myprofile.addEventListener('click', () => {
    signout.classList.add('active')
})

signout.addEventListener('click', ()=> {
    signout.classList.remove('active')
})
