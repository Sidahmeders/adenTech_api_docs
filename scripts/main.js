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
            const { entries, headerText } = alterInnerText(detail)

            detail.innerHTML = alterdHtml

            // chnage request/response entry color
            for (let entry of entries) {
                const styledEntry = detail.innerHTML.replace(
                    entry,
                    `<span style="color:white;">${entry}</span>`
                )
                detail.innerHTML = styledEntry
            }
            // change text between stars(*text*)
            if (headerText) {
                for (let entry of headerText) {
                    const textHeaderStyles = `
                        color:gold;
                        background:#9923;
                        padding:5px 12px;
                        display:block;
                        margin-bottom: -15px;
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
    method,
    route,
    request,
    response,
    headers,
    specification
}) {
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
                ${
                    headers
                        ? ` <details class="headers">
                                <summary>Headers</summary>
                                <p>
                                    ${headers}
                                </p>
                            </details>`
                        : '<div style="margin-bottom: -15px"></div>'
                }
                ${
                    specification
                        ? `<details class="specification">
                                <summary>options specification</summary>
                                <p>
                                    ${specification}
                                </p>
                            </details>`
                        : '<div style="margin-bottom: -15px"></div>'
                }
            </div>
        </div>
    `
}

function whiteSpace(repeat) {
    return '&nbsp;'.repeat(repeat)
}

function alterInnerHtml(innerHTML) {
    innerHTML = innerHTML.replace(
        /!/g,
        `<span style="color:orange;">${whiteSpace(1)}&ltrequired&gt</span>`
    )
    innerHTML = innerHTML.replace(/@/g, '<span style="color:#6dd">[options]</span>')
    innerHTML = innerHTML.replace(/-/g, whiteSpace(8))

    return innerHTML
}

function alterInnerText(detail) {
    let innerText = detail.children[1].innerText

    // match the object entries that are preceded by minus(-) and end by colons(:)
    let entries = innerText.split(':').map((item) => item.replace(/\n/g, ''))
    if (innerText.includes('token')) {
        entries = mapEntries(entries, 3)
    } else {
        entries = mapEntries(entries, 1)
    }
    // match text between starts(*someText*)
    let headerText = innerText.match(RegExp(/\*[\s\S]*?\*/, 'g'))

    return { entries, headerText }
}

function mapEntries(entries, index) {
    return entries.map((item) => {
        item = item.split('-')[index]
        return item
    })
}

export default appendEndpointData
