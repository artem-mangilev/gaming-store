const portraits = [...document.getElementsByClassName('portrait')]

portraits.forEach(portrait => {
  const image = portrait.querySelector('img')
  const description = portrait.querySelector('.description')

  image.onmouseover = () => {
    description.classList.add('moved-description')
  }

  portrait.onmouseleave = () => {
    description.classList.remove('moved-description')
  }
})


