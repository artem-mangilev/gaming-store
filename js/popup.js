const popupLinks = [...document.querySelectorAll('.popup-link')]
const root = document.querySelector('html')
const popup = document.querySelector('.popup')
const popupView = popup.querySelector('.popup-view')

popupLinks.forEach(link => {
  link.onclick = e => {
    e.preventDefault()

    const verticalScrollOffset = window.pageYOffset

    popup.style.top = verticalScrollOffset + 'px'
    popup.classList.remove('hide')
    popup.classList.toggle('show')

    popupView.classList.toggle('animated-popup-view')

    root.style.overflowY = 'hidden'
  }
})

popup.onclick = e => {
  if (e.target.className == 'popup-inside' ||
      e.target.className == 'popup show') {
    popup.classList.toggle('show')

    popupView.classList.toggle('animated-popup-view')

    setTimeout(() => {
      popup.classList.add('hide')

      root.style.overflowY = 'overlay'
    }, 499)    
  }
} 