import endpointsData from './data.js'

function whiteSpace(repeat) {
    return '&nbsp;'.repeat(repeat)
}

function alterInnerHtml(innerHTML) {
    innerHTML = innerHTML.replace(/!/g, `${whiteSpace(1)}&ltrequired&gt`)
    innerHTML = innerHTML.replace(/-/g, whiteSpace(4))

    return innerHTML
}

function createEndpointElement({ title, method, route, request, response }) {
    return `
        <div class="endpoint">
            <h2>${title}</h2>
            <code>
                ${method}<span>${route}<button onclick="
                (function (node) {
                    const url = node.parentNode.innerHTML.split('<')[0]
                    return navigator.clipboard.writeText(url)
                })(this);
                ">copy</button></span>
            </code>
            <div class="container">
                <details class="request">
                    <summary>Request Parameters</summary>
                    <p>
                        ${request}
                    </p>
                </details>
                <details class="response">
                    <summary>Response Body</summary>
                    <p>
                        ${response}
                    </p>
                </details>
            </div>
        </div>
    `
}

const main = document.body.getElementsByTagName('main')[0]
const endpoints = endpointsData.map((item) => createEndpointElement(item))

main.innerHTML = endpoints

const endpointsElement = document.querySelectorAll('.endpoint')

for (let endpoint of endpointsElement) {
    const detailsElement = endpoint.querySelectorAll('details')

    for (let detail of detailsElement) {
        const alterdHtmlText = alterInnerHtml(detail.innerHTML)
        detail.innerHTML = alterdHtmlText
    }
}

const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})
