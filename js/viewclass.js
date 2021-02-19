let mylist = document.getElementsByClassName('list')[0];
let mymain = document.getElementsByClassName('main')[0];
let all = mylist.getElementsByTagName('li') 
for(let i = 0 ; i < all.length; i++) {
    all[i].addEventListener('click', () => {
        mylist.getElementsByClassName("active")[0].classList.remove('active');
        all[i].classList.add('active');

        mymain.getElementsByClassName('active')[0].classlist.remove('active');
        mymain.getElementsByTagName('div')[i].classList.add('active')
        
    })
}


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
        
      })
      tab.classList.add('active')
      target.classList.add('active')
     
    })
  })


  
  const myprofile = document.querySelector('.myprofile')
  const signout = document.querySelector('.signout-container')
  
  myprofile.addEventListener('click', () => {
      signout.classList.add('active')
  })
  
  signout.addEventListener('click', ()=> {
      signout.classList.remove('active')
  })

