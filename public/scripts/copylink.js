const urlSpan = document.querySelector('.poll-url')
const linkElement = urlSpan.querySelector('a')

function addInputElement() {
    const inputElement = document.createElement('input')
    inputElement.type = 'text'
    inputElement.value = linkElement.innerText
    linkElement.remove()
    urlSpan.appendChild(inputElement)
}

function addCopyButton() {
    const copyButton = document.createElement('button')
    copyButton.classList.add('button-copy')
    copyButton.innerText = 'copy'

    function copyLinkValue() {
        const inputElement = urlSpan.querySelector('input')
        inputElement.select()
        document.execCommand('copy')
        console.log('copied text')
    }

    copyButton.addEventListener('click', copyLinkValue)
    urlSpan.appendChild(copyButton) 
}

urlSpan.classList.add('poll-url-with-js')
addInputElement()
addCopyButton()


