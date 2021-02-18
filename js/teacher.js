
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
// function remub(){
//     me.classList.remove('active')
// }
