const btn = document.querySelector('.mybtn')
const modal = document.querySelector('.bg-modal')

btn.addEventListener('click', () => {
        modal.classList.add('active')

})
AOS.init();