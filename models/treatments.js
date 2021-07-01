export default [
    {
        title: 'ongoing treatment OCE',
        method: 'POST',
        route: '/ongoing-treatments/oce',
        request: `
            -tooth_number: "integer" ! @< 11, 12, ..., 47, 47 >
            -decision_terapeutique: "string" ! @< dentinogene, cementogene, osteocementogene >
        `,
        response: ``,
        headers: `
        *Request Headers*
            -authToken: "HS256_bearer_token" !
            -accept: "application/json"
            -contentType: "application/json"
        `,
        specification: `
            *decision_terapeutique*
            -dentinogene: 
            -cementogene: 
            -osteocementogene: 
        `
    },
    {
        title: 'ongoing treatment ODF',
        method: 'POST',
        route: '/ongoing-treatments/odf',
        request: `
            -decision_terapeutique: "string" ! @< >
        `,
        response: ``,
        headers: `
        *Request Headers*
            -authToken: "HS256_bearer_token" !
            -accept: "application/json"
            -contentType: "application/json"
        `,
        specification: `
            *decision_terapeutique*
            -
            -
            -
        `
    },
    {
        title: 'ongoing treatment PARO',
        method: 'POST',
        route: '/ongoing-treatments/paro',
        request: `
            -decision_terapeutique: "string" ! @< >
        `,
        response: ``,
        headers: `
        *Request Headers*
            -authToken: "HS256_bearer_token" !
            -accept: "application/json"
            -contentType: "application/json"
        `,
        specification: `
            *decision_terapeutique*
            -
            -
            -
        `
    },
    {
        title: 'ongoing treatment prothese',
        method: 'POST',
        route: '/ongoing-treatments/prothese',
        request: `
            -decision_terapeutique: "string" ! @< >
        `,
        response: ``,
        headers: `
        *Request Headers*
            -authToken: "HS256_bearer_token" !
            -accept: "application/json"
            -contentType: "application/json"
        `,
        specification: `
            *decision_terapeutique*
            -
            -
            -
        `
    },
    {
        title: 'ongoing treatment PCB',
        method: 'POST',
        route: '/ongoing-treatments/paro',
        request: `
            -decision_terapeutique: "string" ! @< >
        `,
        response: ``,
        headers: `
        *Request Headers*
            -authToken: "HS256_bearer_token" !
            -accept: "application/json"
            -contentType: "application/json"
        `,
        specification: `
            *decision_terapeutique*
            -
            -
            -
        `
    }
]
