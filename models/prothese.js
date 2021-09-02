export default [
    {
        title: 'edentePartielle collection',
        method: 'POST',
        route: '/prothese/edentePartielle',
        request: `
            (
                -patient_id: "string" !
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >
                -kenedy_apelgate_maxillaire: "string" ! @< cl1, cl2, cl3, cl4, cl5, cl6 >
                -kenedy_apelgate_mandibule: "string" ! @< cl1, cl2, cl3, cl4, cl5, cl6 >
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
        specification: `
            *kenedy_apelgate_maxillaire || kenedy_apelgate_mandibule*
                -cl1 _ cl2 _ cl3 _ cl4 _ cl5 _ cl6: @< 1, 2, 3, 4, 5, 6 >
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
                -linda_maxillaire: "string" ! @< cl1, cl2, cl3 >
                -linda_mandibule: "string" ! @< cl1, cl2, cl3, cl4 >
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
