import './darkmode.js'
import './navigation.js'

function whiteSpace(repeat) {
    return '&nbsp;'.repeat(repeat)
}

function alterInnerHtml(innerHTML) {
    innerHTML = innerHTML.replace(/!/g, `${whiteSpace(1)}&ltrequired&gt`)
    innerHTML = innerHTML.replace(/@/g, '[options]')
    innerHTML = innerHTML.replace(/-/g, whiteSpace(8))

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

function appendEndpointData(endpointData) {
    const mainElement = document.getElementsByTagName('main')[0]
    const endpoints = endpointData.map((item) => createEndpointElement(item))

    mainElement.innerHTML = endpoints

    const endpointsElement = document.querySelectorAll('.endpoint')

    for (let endpoint of endpointsElement) {
        const detailsElement = endpoint.querySelectorAll('details')

        for (let detail of detailsElement) {
            const alterdHtmlText = alterInnerHtml(detail.innerHTML)
            detail.innerHTML = alterdHtmlText
        }
    }
}

export default appendEndpointData
