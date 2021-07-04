const navigation = `
    <sidebar id="sidebar">
    <div class="sidebar-logo">
        <a href="/">AD<span>T</span>ECH</a>
    </div>
    <div class="sections">
        <a class="section" href="/pages/users.html">
            users endpoints
        </a>
        <a class="section" href="/pages/patients.html">
            patients endpoints
        </a>
        <a class="section" href="/pages/general.html">
            general endpoints
        </a>
        <a class="section" href="/pages/oce.html">
            oce endpoints
        </a>
        <a class="section" href="/pages/odf.html">
            odf endpoints
        </a>
        <a class="section" href="/pages/paro.html">
            paro endpoints
        </a>
        <a class="section" href="/pages/prothese.html">
        prothese endpoints
        </a>
        <a class="section" href="/pages/pcb.html">
            pcb endpoints
        </a>
        <a class="section" href="/pages/treatments.html">
            ongoing treatments
        </a>
        <a class="section" href="/pages/error.html">
            status & error codes
        </a>
        <a class="section" href="/pages/admin.html">
            admin endpoints
        </a>
        <a class="section" href="pages/statistics.html">
            statistics endpoints
        </a>
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

const navElement = document.getElementsByTagName('nav')[0]
navElement.innerHTML = navigation
