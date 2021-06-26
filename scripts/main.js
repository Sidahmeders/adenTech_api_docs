import './navigation.js'
import './darkmode.js'

function appendEndpointData(endpointData) {
    const mainElement = document.getElementsByTagName('main')[0]
    const endpoints = endpointData.map((item) => createEndpointElement(item))

    mainElement.innerHTML = endpoints

    const endpointsElement = document.querySelectorAll('.endpoint')

    for (let endpoint of endpointsElement) {
        const detailsElement = endpoint.querySelectorAll('details')

        for (let detail of detailsElement) {
            const alterdHtml = alterInnerHtml(detail.innerHTML)
            const alterdText = alterInnerText(detail)

            detail.innerHTML = alterdHtml

            // chnage request/response entry color
            for (let entry of alterdText) {
                const newText = detail.innerHTML.replace(
                    entry,
                    `<span style="color:white;">${entry}</span>`
                )
                detail.innerHTML = newText
            }
        }
    }
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

function whiteSpace(repeat) {
    return '&nbsp;'.repeat(repeat)
}

function alterInnerHtml(innerHTML) {
    innerHTML = innerHTML.replace(/!/g, `${whiteSpace(1)}&ltrequired&gt`)
    innerHTML = innerHTML.replace(/@/g, '[options]')
    innerHTML = innerHTML.replace(/-/g, whiteSpace(8))

    return innerHTML
}

function alterInnerText(detail) {
    let innerText = detail.children[1].innerText
    let entries = innerText.split(':').map((item) => item.replace(/\n/g, ''))

    if (innerText.includes('token')) {
        entries = mapEntries(entries, 3)
    } else {
        entries = mapEntries(entries, 1)
    }

    return entries
}

function mapEntries(entries, index) {
    return entries.map((item) => {
        item = item.split('-')[index]
        return item
    })
}

export default appendEndpointData
