export default [
    {
        title: 'examenGingival collection',
        method: 'POST',
        route: '/paro/examenGingival',
        request: `
            (
                -patient_id: "string" !,
                -sector_gingival: "string",
                -contour: "string",
                -couleur: "string",
                -volume: "string",
                -aspect: "string",
                -consistance: "string",
                -hga: "integer",
                -pma: "integer",
                -pi: "integer",
                -gi: "integer",
                -sbi: "integer",
                -cote_l: "string"
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
        title: 'examenSondage collection',
        method: 'POST',
        route: '/paro/examenSondage',
        request: `
            (
                -patient_id: "string" !,
                -pv1: "string",
                -pv2: "string",
                -pv3: "string",
                -pp1: "string",
                -pp2: "string",
                -pp3: "string",
                -rv: "string",
                -rp: "string",
                -tooth_number: "string"
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
        title: 'indices collection',
        method: 'POST',
        route: '/paro/indices',
        request: `
            (
                -patient_id: "string" !,
                -insertion_frien_sup: "string",
                -insertion_frien_inf: "string",
                -insertion_frien_lingual: "string",
                -insertion_frien_autres: "string",
                -atteints_furcation_1: "string",
                -atteints_furcation_2: "string",
                -atteints_furcation_3: "string",
                -atteints_furcation_4: "string",
                -indice_abrasion_1: "string",
                -indice_abrasion_2: "string",
                -indice_abrasion_3: "string",
                -indice_abrasion_4: "string",
                -indice_abrasion_5: "string",
                -indice_mobilite_1: "string",
                -indice_mobilite_2: "string",
                -indice_mobilite_3: "string",
                -indice_mobilite_4: "string",
                -indice_recession_1: "string",
                -indice_recession_2: "string",
                -indice_recession_3: "string",
                -indice_recession_4: "string",
                -biotype_parodontal: "string"
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
        title: 'interpretationRadiologic collection',
        method: 'POST',
        route: '/paro/interpretationRadiologic',
        request: `
            (
                -patient_id: "string" !,
                -desmodente: "string",
                -lamina_dura: "string",
                -lyse_profondeur_superficielle: "string",
                -lyse_profondeur_profonde: "string",
                -lyse_profondeur_terminal: "string",
                -lyse_forme_horizontal: "string",
                -lyse_forme_vertical: "string",
                -rapport_cr_legerement_augmente: "string",
                -rapport_cr_augmente: "string",
                -rapport_cr_tres_augmente: "string",
                -rapport_dentodentaire: "string",
                -malposition_dentaire: "string",
                -megration_d_premaire: "string",
                -megration_d_secondaire: "string",
                -trabeculation_osseuses_max: "string",
                -trabeculation_osseuses_mand: "string"
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
        title: 'diagnosticTraitement collection',
        method: 'POST',
        route: '/paro/diagnosticTraitement',
        request: `
            (
                -patient_id: "string" !,
                -diagnostic_etiologique: "string",
                -diagnostic_positive: "string",
                -diagnostic_deffirentiel: "string",
                -traitement_urgence: "string",
                -traitement_initial: "string",
                -revaluation: "string",
                -traitement_correctif: "string",
                -maintenance: "string",
                -pronostic_global: "string",
                -pronostic_unitaire: "string"
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
