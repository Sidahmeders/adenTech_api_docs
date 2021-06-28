export default [
    {
        title: 'edentePartielle collection',
        method: 'POST',
        route: '/prothese/edentePartielle',
        request: `
            (
                -patient_id: "string" !,
                -motif_consultation: "string" ! @< fonctionnele, esthetique, douleure, [anything] >,
                -kenedy_apelgate_maxillaire: "string",
                -kenedy_apelgate_mandibule: "string",
                -decision_therapeutique: "string"
            )
        `,
        response: ``,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'edenteTotal collection',
        method: 'POST',
        route: '/prothese/edenteTotal',
        request: `
            (
                -patient_id: "string" !,
                -motif_consultation: "string" ! @< fonctionnele, esthetique, douleure, [anything] >,
                -linda_maxillaire: "string",
                -linda_mandibule: "string",
                -decision_therapeutique: "string"
            )
        `,
        response: `
            {}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    }
]
