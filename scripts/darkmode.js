const checkbox = document.getElementById('checkbox')
const darkMode = localStorage.getItem('dark-mode')

function setTheme() {
    if (darkMode == 'active') {
        document.body.classList.add('dark')
        checkbox.checked = true
    }
}

function toggleDarkMode() {
    if (checkbox.checked) {
        document.body.classList.add('dark')
        checkbox.checked = true
        localStorage.setItem('dark-mode', 'active')
    } else {
        document.body.classList.remove('dark')
        checkbox.checked = false
        localStorage.removeItem('dark-mode')
    }
}

checkbox.addEventListener('change', () => {
    toggleDarkMode()
})

document.addEventListener('DOMContentLoaded', setTheme)
