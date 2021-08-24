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
    element.style.top = '30px'
    element.style.right = '30px'
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
