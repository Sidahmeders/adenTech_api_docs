import './navigation.js'
import './darkmode.js'

function appendEndpointData(endpointData) {
    const mainElement = document.getElementsByTagName('main')[0]
    const endpoints = endpointData.map((item, index) => {
        item.index = index
        return createEndpointElement(item)
    })

    mainElement.innerHTML = endpoints

    const endpointsElement = document.querySelectorAll('.endpoint')

    for (let endpoint of endpointsElement) {
        const detailsElement = endpoint.querySelectorAll('details')

        for (let detail of detailsElement) {
            const alterdHtml = alterInnerHtml(detail.innerHTML)
            const { entries, headerText } = alterInnerText(detail)

            detail.innerHTML = alterdHtml

            // chnage request/response entry color
            if (entries) {
                for (let entry of entries) {
                    entry = entry.replace(/-/g, '')
                    const styledEntry = detail.innerHTML.replace(
                        entry,
                        `<span style="color:white;">${entry}</span>`
                    )
                    detail.innerHTML = styledEntry
                }
            }
            // change text between stars(*text*)
            if (headerText) {
                for (let entry of headerText) {
                    const textHeaderStyles = `
                        color:gold;
                        background:#9923;
                        padding:5px 12px;
                        display:block;
                        margin-bottom: -20px;
                    `
                    const styledHeader = detail.innerHTML.replace(
                        entry,
                        `<span style="${textHeaderStyles}"> > ${entry.replace(/\*/g, '')}</span>`
                    )
                    detail.innerHTML = styledHeader
                }
            }
        }
    }
}

function createEndpointElement({
    title,
    index,
    method,
    route,
    request,
    response,
    headers,
    description
}) {
    return `
        <div class="endpoint">
            <h2> <span style="color:blue;">${index + 1}</span> ${title}</h2>
            <code>
                ${method}<span>${route}<button onclick="
                (function (node) {
                    const url = node.parentNode.innerHTML.split('<')[0]
                    return navigator.clipboard.writeText(url)
                })(this)">copy</button></span>
            </code>
            <div class="container">
                ${
                    request
                        ? `<details class="request">
                                <summary>Request Parameters</summary>
                                <p>
                                    ${request}
                                </p>
                            </details>`
                        : '<div style="margin-bottom: -20px"></div>'
                }
                <details class="response">
                    <summary>Response Body</summary>
                    <p>
                        ${response}
                    </p>
                </details>
                ${
                    headers
                        ? ` <details class="headers">
                                <summary>Headers</summary>
                                <p>
                                    ${headers}
                                </p>
                            </details>`
                        : '<div style="margin-bottom: -20px"></div>'
                }
                ${
                    description
                        ? `<details class="description">
                                <summary>options description</summary>
                                <p>
                                    ${description}
                                </p>
                            </details>`
                        : '<div style="margin-bottom: -20px"></div>'
                }
            </div>
        </div>
    `
}

function whiteSpace(repeat) {
    return '&nbsp;'.repeat(repeat)
}

function alterInnerHtml(innerHTML) {
    innerHTML = innerHTML.replace(/!/g, `<span style="color:orange;">&ltrequired&gt</span>`)
    innerHTML = innerHTML.replace(/@/g, '<span style="color:#6dd">[options]</span>')
    innerHTML = innerHTML.replace(/-/g, whiteSpace(4))

    return innerHTML
}

function alterInnerText(detail) {
    let innerText = detail.children[1].innerHTML

    // match the object entries that are preceded by minus(-) and end by colons(:)
    let entries = innerText.match(RegExp(/-[\w\s]*?\:/, 'g'))
    // match text between starts(*someText*)
    let headerText = innerText.match(RegExp(/\*[\s\S]*?\*/, 'g'))

    return { entries, headerText }
}

export default appendEndpointData
