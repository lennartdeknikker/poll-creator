const form = document.querySelector('form')
if (form) form.addEventListener('submit', animate)

function animate() {
    console.log(event.target + 'hallo')
    event.preventDefault()
    const container = document.querySelector('.container')
    container.style.transform = 'rotateY(90deg)'
    function goToNextPage() {
        form.submit()
    }
    window.setTimeout(goToNextPage, 700)
}


const buttons = document.querySelectorAll('a')
for (const button of buttons) {
    button.addEventListener('click', function() {
        animateButton(event, button)
    })    
}

function animateButton(event, button) {
    event.preventDefault()
    const container = document.querySelector('.container')
    container.style.transform = 'rotateY(90deg)'
    function goToNextPage() {
        window.location.href = button.href
    }
    window.setTimeout(goToNextPage, 700)

}