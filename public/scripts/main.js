const forms = document.querySelectorAll('form')
const buttons = document.querySelectorAll('a')

function submitFormAfterAnimation(form) {
    function goToNextPage() {
        form.submit()
    }
    window.setTimeout(showLoader, 700)
    window.setTimeout(goToNextPage, 700)
}

function goToNextPageAfterAnimation(button) {
    function goToNextPage() {
        window.location.href = button.href
    }
    window.setTimeout(showLoader, 700)
    window.setTimeout(goToNextPage, 700)
}

function animate() {
    event.preventDefault()
    const div = document.querySelector('main')
    div.style.transform = 'rotateY(90deg)'
}

function showLoader() {
    const loaderImage = document.createElement('img')
    loaderImage.src = './images/loader.png'
    loaderImage.classList.add('loader-image')
    document.querySelector('body').appendChild(loaderImage)
}

for (const form of forms) {
    const formElements = form.querySelectorAll('textarea, input')

    form.addEventListener('submit', function() {
        let allIsRight = true
        for (const element of formElements) {
            const value = element.value
            if (!value) {
                event.preventDefault()
                element.placeholder = 'Sorry, this field is required.'
                element.classList.add('wrong-input')
                allIsRight = false
            }
        }
        if (allIsRight) {
            animate()
            submitFormAfterAnimation(form)
        }
    })
}

for (const button of buttons) {
    button.addEventListener('click', function() {
        // checks if page will just be refreshed. Then the animation would make the card disappear.
        const notJustRefreshing = !button.href.includes(window.location.href.slice(8)) || !window.location.href.slice(8, -1).includes('/')
        if (notJustRefreshing) animate()    
        goToNextPageAfterAnimation(button)
    })    
}

const createdNew = window.location.href.slice(-16, -3) === 'created?code='
const closed = window.location.href.slice(-14, -3) === 'close?code='

if (createdNew) {
    let codes = []
    if (localStorage.getItem('pollcodes')) codes = JSON.parse(localStorage.getItem('pollcodes'))
    const newCode = window.location.href.slice(-3)
    if (!codes.includes(newCode)) codes.push(newCode)
    localStorage.setItem('pollcodes', JSON.stringify(codes))
}

const pollcodes = JSON.parse(localStorage.getItem('pollcodes'))

if (pollcodes.length > 0) {
    const list = document.createElement('ul')
    list.classList.add('polls-list')

    for (const code of pollcodes) {
        let newLi = document.createElement('li')
        let newA = document.createElement('a')
        let newButton = document.createElement('button')

        newLi.dataset.listcode = code
        newA.href = `/created?code=${code}`
        newButton.innerText = code
        
        newA.appendChild(newButton)
        newLi.appendChild(newA)
        list.appendChild(newLi)
    }
    if (!document.querySelector('.poll-list-container')) {
        const pollListContainer = document.createElement('div')
        const textElement = document.createElement('h4')
        
        textElement.innerText = 'Your open polls'
        pollListContainer.classList.add('poll-list-container')
        pollListContainer.appendChild(textElement)
        document.querySelector('main').appendChild(pollListContainer)
    }    
    document.querySelector('.poll-list-container').appendChild(list)
}

if (closed) {
    let codes = []
    const codeClosed = window.location.href.slice(-3)
    if (localStorage.getItem('pollcodes')) codes = JSON.parse(localStorage.getItem('pollcodes'))
    var indexOfCodeClosed = codes.indexOf(codeClosed)
    if (indexOfCodeClosed !== -1) codes.splice(indexOfCodeClosed, 1)
    if (codes.length < 1) document.querySelector('.poll-list-container').remove()
    localStorage.setItem('pollcodes', JSON.stringify(codes))

    const closedListItem = document.querySelector(`[data-listcode="${codeClosed}"]`)
    if (closedListItem) closedListItem.remove()
}