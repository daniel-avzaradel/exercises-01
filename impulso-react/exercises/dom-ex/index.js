const btn = document.getElementById('btn')
const body = document.getElementsByTagName('body')
const heading1 = document.getElementById('heading1')

const darkMode = () => {
    if(btn.classList.contains('light-mode-btn')) {
        btn.classList.remove('light-mode-btn')
        btn.classList.add('dark-mode-btn')
        btn.innerText = 'Light Mode'
        heading1.innerText = 'DARK MODE'
        document.body.style.backgroundColor = '#333'
    } else {
        btn.classList.remove('dark-mode-btn')
        btn.classList.add('light-mode-btn')
        btn.innerText = 'Dark Mode'
        heading1.innerText = 'LIGHT MODE'
        document.body.style.backgroundColor = '#e2e2e2'
    }

}