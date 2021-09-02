export default [
    {
        title: 'examenFonction collection (odf, paro)',
        method: 'POST',
        route: '/common/examenFonction',
        request: `
            (
                -ventilation: "string" @< naso_buccale,nasal,buccale >
                -daeglutition: "string"  @< physiologique, atypique_pulsion_linguale, atypique_pulsion_linguale, atypique_interposition_anterieure, atypique_interposition_laterale, atypique_participation_muscle_mimique >
                -mastication: "string" @< belateral, unilateral_alterne, unilateral_gauche, unilaterlae_droite >
                -phonation: "string" @< correcte, atypique >
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
        title: 'examenOcclusionStatic collection (odf, paro, prothese)',
        method: 'POST',
        route: '/common/examenOcclusionStatic',
        request: `
            (
                -incisive_sagital: "integer" @< range between [~20, ..., +20] >
                -incisive_transversal: "string" @< coincidence, devie_gauche , devie_droite >
                -incisive_vertical: "integer" @< range between [~20, ..., +20] >
                -canine_droite_sagital: "string" @< class1, class2 ,class3 >
                -canine_droite_vertical: "string" @< respecte, nonrespecte >
                -canine_droite_transversal: "string" @< respecte, nonrespecte >
                -canine_gauche_sagital: "string" @< class1, class2, class3 >
                -canine_gauche_vertical: "string" @< respecte, nonrespecte >
                -canine_gauche_transversal: "string" @< respecte, nonrespecte >
                -molaire_gauche_sagital: "string" @< class1, class2, class3 >
                -molaire_gauche_vertical: "string" @< respecte, nonrespecte >
                -molaire_gauche_transversal: "string" @< respecte, nonrespecte >
                -molaire_droite_sagital: "string" @< respecte, nonrespecte >
                -molaire_droite_transversal: "string" @< respecte, nonrespecte >
                -molaire_droite_verticale: "string" @< respecte, nonrespecte >
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
        title: 'examenOcclusionDynamic collection (odf, paro, prothese)',
        method: 'POST',
        route: '/common/examenOcclusionDynamic',
        request: `
            (
                -protrution_cote travaillaint: "string" @< >
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
    },
    {
        title: 'interpretationRadiologic collection (odf, paro)',
        method: 'POST',
        route: '/common/interpretationRadiologic',
        request: `
            (
                -bases_osseuses: "string" @< >
                -sinus_maxilllaires: "string" @< >
                -articulation_temporo_mandibulaire: "string" @< >
                -fosses_nasales: "string" @< >
                -germes: "arrayList" @< toth number>
                -etat_couronnes: "string" @< >
                -etat_racines: "string" @< >
                -edification_racines_complete: "arrayList" @< tooth_number_dent_permanate >
                -edification_racines_terminal: "arrayList" @< tooth_number_dent_permanate >
                -medification_racines_moyenne: "arrayList" @< tooth_number_dent_permanate >
                -edification_racines_debutante: "arrayList" @< tooth_number_dent_permanate >
                -rhizalyse_debutante: "arrayList" @< tooth_number_dent_de_lait >
                -rhizalyse_moyenne: "arrayList" @< tooth_number_dent_de_lait >
                -rhizalyse_terminal: "arrayList" @< tooth_number_dent_de_lait >
                -signe_ddm: "arrayList" @< >
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
