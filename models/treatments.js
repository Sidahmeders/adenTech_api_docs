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
                -dentinogene _ cementogene _ osteocementogene: @< traitement_urgence, pancements_serie, radiographie_retro_aleolaire_, blanchimente_dente_vivante,
                    radiographie_panoramique, blanchimente_dente_devitalise, coiffage_pulpaire_inderecte, coiffage_pulpaire_derecte, pulpotomie, traitemente_endo_dent_temporaire,
                    apexogenese, apexification, depulpation_mono_radiculaire, depulpation_bi_radiculaire, depulpation_molaires, depulpation_dds, retraitement_endo_mono,
                    retraitement_endo_pluri, restauration_amalgame_01face, restauration_amalgame_02face, restauration_amalgame_03face, reconstitution_amalgame_large_avec_ancrage,
                    restauration_simple_composite, reconstitution_large_composite_avec_ancrage, scellement_couronne, scellement_bridge, detartrage, 
                    curtage_periapecale, exerese_kyste_petit_volume, exerese_kyste_grand_volume, amputation_radiculaire, finition_polissage
                >
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
