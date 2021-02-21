if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    const mybox = document.querySelectorAll(".my-box")
    // const choice = document.querySelectorAll(".choices")
      var close = document.querySelectorAll(".close")
      // for(let i = 0; i < mybox.length; i++){
      //   var button = mybox[i]
      //   button.addEventListener('click', () => {
      //       // console.log(choice)
      //       choice[i].classList.add('active')
        
      //       close[i].addEventListener("click", () => {
             
      //         choice[i].classList.remove('active')
  
        
      //        })
      //   })
      // }

      mybox.forEach( i => {
        i.addEventListener('click', () => {
          const choice = i.querySelector('.choices')
          choice.style.display = "block"

          const close = choice.querySelector('.close')
          close.addEventListener('click', (e) =>{
            e.stopPropagation()
            choice.style.display = "none"
          })
        })
      })

     
      
      const pinili = document.querySelectorAll('.pinili')
        pinili.forEach(l => {
          l.addEventListener('click', (e) => {
            var btn = e.target
            // var pick1 = tex.getElementsByClassName('pinili')[0].innerText
            // var pick2 = tex.getElementsByClassName('pinili')[1].innerText
            // var pick3 = tex.getElementsByClassName('pinili')[2].innerText
            // var pick4 = tex.getElementsByClassName('pinili')[3].innerText
            var here = btn.parentElement.parentElement
            // console.log(here)
       here.getElementsByClassName('palit')[0].innerText = btn.innerText

            
          })
         
        })

        // rectangle.innerText = "hello"
}
