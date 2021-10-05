export default [
    {
        title: 'edentePartielle collection',
        method: 'POST',
        route: '/prothese/edentePartielle',
        request: `
            (
                -patient_id: "string" !
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >
                -kenedy_apelgate_maxillaire: "string" ! @< class1, class2, class3, class4, class5, class6 >
                -kenedy_apelgate_mandibule: "string" ! @< class1, class2, class3, class4, class5, class6 >
                -decision_therapeutique: "arrayList" ! @< ppac, ppaa, conjoite, implantaire, [anything] >
            )
        `,
        response: ``,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `,
        description: `
            *kenedy_apelgate_maxillaire || kenedy_apelgate_mandibule*
                -class1 _ class2 _ class3 _ class4 _ class5 _ class6: @< 1, 2, 3, 4, 5, 6 >
        `
    },
    {
        title: 'edenteTotal collection',
        method: 'POST',
        route: '/prothese/edenteTotal',
        request: `
            (
                -patient_id: "string" !,
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >
                -linda_maxillaire: "string" ! @< class1, class2, class3 >
                -linda_mandibule: "string" ! @< class1, class2, class3, class4 >
                -decision_therapeutique: "arrayList" ! @< amovible, amovible_piezographique, stabilise_sur_implant, bridje_complete_sur_implant >
            )
        `,
        response: ``,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    }
]
