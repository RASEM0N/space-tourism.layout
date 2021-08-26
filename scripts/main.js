$(function () {})

// new fullpage('#fullpage', {
//     autoScrolling: true,
//     scrollHorizontally: true,
//     sectionSelector: '.page',
// })

function windowWidth() {
    const element = document.createElement('div')
    element.innerText = `${innerWidth}px/${innerHeight}px`
    element.style.position = 'fixed'
    element.style.backgroundColor = '#030303'
    element.style.padding = '10px'
    element.style.top = '20px'
    element.style.right = '20px'
    element.style.zIndex = '11'
    element.style.fontFamily = 'SF Display Pro'
    element.style.fontWeight = 'bold'
    element.style.fontSize = '24px'
    element.style.color = '#ffffff'

    document.body.append(element)

    window.addEventListener('resize', () => {
        element.innerText = `${innerWidth}px/${innerHeight}px`
    })
}

windowWidth()

const menuList = document.querySelector('.menu__list')
document.querySelector('.menu__btn').addEventListener('click', () => {
    menuList.classList.toggle('menu__list_opened')
})
