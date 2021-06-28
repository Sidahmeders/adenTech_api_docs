export default [
    {
        title: 'edentePartielle collection',
        method: 'POST',
        route: '/prothese/edentePartielle',
        request: `
            (
                -patient_id: "string" !,
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >,
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
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >,
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
    },
    {
        title: 'examenOcclusionStaticStaticStatic collection',
        method: 'POST',
        route: '/odf/examenOcclusionStatic',
        request: `
            (
                -incisive_sagital:"string" @< >
                -incisive_transversal:"string" @< >
                -incisive_vertical:"string" @< >
                -canine_droite_sagital:"string" @< cl1, cl2 ,cl3 >
                -canine_droite_vertical:"string" @< >
                -canine_droite_transversal:"string" @< >
                -canine_gauche_sagital:"string" @< cl1, cl2, cl3 >
                -canine_gauche_vertical:"string" @< >
                -canine_gauche_transversal:"string" @< >
                -molaire_gauche_sagital:"string" @< cl1, cl2, cl3 >
                -molaire_gauche_vertical:"string" @< >
                -molaire_gauche_transversal:"string" @< >
                -molaire_droite_sagital:"string" @< >
                -molaire_droite_transversal:"string" @< >
                -molaire_droite_verticale:"string" @<  >
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
