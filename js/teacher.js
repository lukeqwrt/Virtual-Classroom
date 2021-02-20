
    var container = document.getElementsByClassName('comp-container')
    var child = document.getElementsByClassName('my-child')
    var icon = document.getElementsByClassName('fa-ellipsis-v');
    var remove = document.getElementsByClassName('remove');
    var box = document.getElementsByClassName('box');

    for(let i = 0; i < icon.length; i++){
        let button = icon[i]
        button.addEventListener('click', () => {
            document.getElementById('icon').classList.add('active')
            box[i].style.display = "block";
        })
    }
    for(let i = 0; i < remove.length; i++){
        let alis = remove[i]
        alis.addEventListener('click', () => {
            document.getElementById('icon').classList.remove('active')
            box[i].style.display = "none";
        })
    }

    const myprofile = document.querySelector('.myprofile')
const signout = document.querySelector('.signout-container')

myprofile.addEventListener('click', () => {
    signout.classList.add('active')
})

signout.addEventListener('click', ()=> {
    signout.classList.remove('active')
})
// function remub(){
//     me.classList.remove('active')
// }

const rowClass = document.querySelector('.row-classes')

rowClass.addEventListener('click', () => {
    window.location.href = "../teacher/Teacher-View-Class.html"
})