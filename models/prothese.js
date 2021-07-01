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
                -cl1 cl2 cl3 cl4 cl5 cl6: @< 1, 2, 3, 4, 5, 6 >
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
        response: ``,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'examenOcclusionDynamic collection',
        method: 'POST',
        route: '/odf/examenOcclusionDynamic',
        request: `
            (
                -protrution_cote travaillaint: "string" @< rapport2/4 >
                -protrution_conte non travaillaint: "string" @< desoclusion_posterieure, interference >
                -lateralite_droit_cote_travaillaint: "string" @< foction_canine, fonction_groupe >
                -lateralite_droit_non_travaillaint: "string" @< desocclusion, interference >
                -lateralite_gauche_cote_travaillaint: "string" @< foction canine, fonction_groupe >
                -lateralite_gauche_non_travaillaint: "string" @< desocclusion, interference >
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
