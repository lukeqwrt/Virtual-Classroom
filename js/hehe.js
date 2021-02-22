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

       

        const recitationBox1 = document.querySelector('.trigger1')
        const recitationBox2 = document.querySelector('.trigger2')
        const recitationBox3 = document.querySelector('.trigger3')
        const recitationBox4 = document.querySelector('.trigger4')
        const myinput1 = document.querySelector('.input-container')
        const myinput2 = document.querySelector('.input-container2')
        const myinput3 = document.querySelector('.input-container3')
        const myinput4 = document.querySelector('.input-container4')
       
        const submit1 = document.querySelector('.submit1')
        const submit2 = document.querySelector('.submit2')
        const submit3 = document.querySelector('.submit3')
        const submit4 = document.querySelector('.submit4')
        const input1 = document.querySelector('.input1')
        const input2 = document.querySelector('.input2')
        const input3 = document.querySelector('.input3')
        const input4 = document.querySelector('.input4')
      
      
      recitationBox1.addEventListener('click', () => {
          myinput1.classList.add('active')

          submit1.addEventListener('click', () => {
            const myp = recitationBox1.getElementsByClassName('herepo')[0]
            myp.innerText = input1.value

            myinput1.classList.remove('active')
          })
      })
      recitationBox2.addEventListener('click', () => {
          myinput2.classList.add('active')

          submit2.addEventListener('click', () => {
            const myp = recitationBox2.getElementsByClassName('herepo1')[0]
            myp.innerText = input2.value

            myinput2.classList.remove('active')
          })
      })
      recitationBox3.addEventListener('click', () => {
          myinput3.classList.add('active')

          submit3.addEventListener('click', () => {
            const myp = recitationBox3.getElementsByClassName('herepo2')[0]
            myp.innerText = input3.value

            myinput3.classList.remove('active')
          })
      })
      recitationBox4.addEventListener('click', () => {
          myinput4.classList.add('active')

          submit4.addEventListener('click', () => {
            const myp = recitationBox4.getElementsByClassName('herepo3')[0]
            myp.innerText = input4.value

            myinput4.classList.remove('active')
          })
      })

    
        // myinput.addEventListener('click', () => {
        //   alert('lumabas e')
        // })
}
