const navigation = `
    <sidebar id="sidebar">
    <div class="sidebar-logo">
        <a href="/">AD<span>T</span>ECH</a>
    </div>
    <div class="sections">
        <div class="section">
            <a href="/pages/users.html">users endpoints</a>
        </div>
        <div class="section">
            <a href="/pages/patients.html">patients endpoints</a>
        </div>
        <div class="section">
            <a href="/pages/general.html">general endpoints</a>
        </div>
        <div class="section">
            <a href="/pages/oce.html">oce endpoints</a>
        </div>
        <div class="section">
            <a href="/pages/odf.html">odf endpoints</a>
        </div>
        <div class="section">
            <a href="/pages/paro.html">paro endpoints</a>
        </div>
        <div class="section">
            <a href="/pages/prothese.html">prothese endpoints</a>
        </div>
        <div class="section">
            <a href="/pages/pcb.html">pcb endpoints</a>
        </div>
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
