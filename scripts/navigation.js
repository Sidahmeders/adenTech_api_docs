const navigationElements = [
    {
        label: 'users endpoints',
        href: '/pages/users.html'
    },
    {
        label: 'patients endpoints',
        href: '/pages/patients.html'
    },
    {
        label: 'general endpoints',
        href: '/pages/general.html'
    },
    {
        label: 'oce endpoints',
        href: '/pages/oce.html'
    },
    {
        label: 'odf endpoints',
        href: '/pages/odf.html'
    },
    {
        label: 'paro endpoints',
        href: '/pages/paro.html'
    },
    {
        label: 'prothese endpoints',
        href: '/pages/prothese.html'
    },
    {
        label: 'pcb endpoints',
        href: '/pages/pcb.html'
    },
    {
        label: 'ongoing treatments',
        href: '/pages/treatments.html'
    },
    {
        label: 'status & error codes',
        href: '/pages/error.html'
    },
    {
        label: 'admin endpoints',
        href: '/pages/admin.html'
    },
    {
        label: 'statistics endpoints',
        href: '/pages/statistics.html'
    }
]

const navigation = `
    <sidebar id="sidebar">
    <div class="sidebar-logo">
        <a href="/">AD<span>T</span>ECH</a>
    </div>
    <div class="sections">
        ${navigationElements.map((item, index) => {
            const focusedNav = localStorage.getItem('focusedNav')

            if (focusedNav == index) {
                return setNavElement({ ...item, id: index, isFocused: true })
            }
            return setNavElement({ ...item, id: index })
        })}
    </div>
    </sidebar>

    <header>
    <svg width="900px" height="85px">
        <symbol id="s-text">
        <text text-anchor="middle" x="30%" y="60%">
            AdenTech API Endpoints
            </text>
        </symbol>
        <g class = "g-ants">
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        </g>
    </svg>
    <div id="theme">
        <input type="checkbox" class="checkbox" id="checkbox">
        <label for="checkbox" class="label">
        <div class='ball'>
        </label>
    </div>
    </header>
`

function setNavElement({ label, href, id, isFocused }) {
    const classValue = `section ${isFocused ? 'focused' : ''}`
    const clickHnadler = `(() => {
        localStorage.setItem('focusedNav' ~ ${id})
    })()`

    return `
        <a id="${id}" class="${classValue}" onclick="${clickHnadler}" href="${href}">
            ${label}
        </a>
    `
}

// And then for all matches

const navBar = document.getElementsByTagName('nav')[0]
navBar.innerHTML = navigation.replace(/,/g, '').replace(/~/g, ',')
