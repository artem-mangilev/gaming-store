const textSlides = [...document.querySelectorAll('.text-slideshow .slide')]
const pagination = document.querySelector('.pagination')

const nextSlideBtn = document.querySelector('.next-slide')
const prevSlideBtn = document.querySelector('.prev-slide')

function changeSlide() {
  const paginationButtons = [...pagination.children]

  paginationButtons.forEach((button, index) => {
    const isChecked = button.checked
    const slide = textSlides[index]

    if (isChecked) {
      slide.classList.add('active-slide')
      slide.classList.remove('slide')
    } else {
      slide.classList.add('slide')
      slide.classList.remove('active-slide')
    }
  })
}

changeSlide()

pagination.onclick = () => changeSlide()

function nextSlide() {
  const paginationButtons = [...pagination.children]
  const nOfButtons = paginationButtons.length
  const checkedIndex = paginationButtons.findIndex(btn => btn.checked)
  const nextIndex = (checkedIndex + 1) % nOfButtons
  paginationButtons[nextIndex].checked = true

  changeSlide()
}

function prevSlide() {
  const paginationButtons = [...pagination.children]
  const nOfButtons = paginationButtons.length
  const checkedIndex = paginationButtons.findIndex(btn => btn.checked)
  const prevIndex = Math.abs((checkedIndex - 1) % nOfButtons)
  paginationButtons[prevIndex].checked = true

  changeSlide()
}

setInterval(() => {
  nextSlide()
}, 5000)

nextSlideBtn.onclick = () => {
  nextSlide()
}

prevSlideBtn.onclick = () => {
  prevSlide()
}


 




