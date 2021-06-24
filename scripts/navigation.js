const navigation = `
    <sidebar id="sidebar">
    <div class="sidebar-logo">
        AD<span>T</span>ECH
    </div>
    <div class="sections">
        <div class="section">
            users endpoints
        </div>
        <div class="section">
            patients endpoints
        </div>
        <div class="section">
            general endpoints
        </div>
        <div class="section">
            oce endpoints
        </div>
        <div class="section">
            odf endpoints
        </div>
        <div class="section">
            paro endpoints
        </div>
        <div class="section">
            prothese endpoints
        </div>
        <div class="section">
            pcb endpoints
        </div>
    </div>
    </sidebar>

    <header>
    <svg width="900px" height="85px">
        <symbol id="s-text">
        <text text-anchor="middle" x="25%" y="70%">
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
