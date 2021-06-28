export default [
    {
        title: 'carieDentaire collection',
        method: 'POST',
        route: '/oce/carieDentaire',
        request: `
            (
                -patient_id: "string" !,
                -tooth_number: "integer" !,
                -motif_consultation: "string" ! @< fonctionnele, esthetique, douleure, [anything] >,
                -histoire_maladie: "string",
                -class_black: "integer" @< cl1, cl2, cl3, cl4, cl5 >,
                -class_sit_sta: "string" @< sit_sta[1<1, 2, 3, 4>, 2<1, 2, 3, 4>, 3<1, 2, 3, 4>] >,
                -diagnostic_positive: "string" ! @< baume1, baume2, baume3, baume4 >,
                -diagnostic_etiologique: "string" ! @< carie, traumtisme, [anything] >,
                -diagnostic_differentiel: "string" @< baume1, baume2, baume3, baume4 >,
                -decision_therapeutique: "string" ! @< dentinogene, cementogene, osteocementogene >
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
        title: 'signsEtRadio collection',
        method: 'POST',
        route: '/oce/signsEtRadio',
        request: `
            (
                -patient_id: "string" !,
                -tooth_number: "integer" !,
                -sign_subjective_provoque: "arrayList" @< chaude, froide, sucre, [anything] >,
                -sign_subjective_spontanne: "string" @< ague, spontanne >,
                -sign_subjective_autres: "string",
                -sign_objective_vitalite: "string" @< postive, negtive >,
                -sign_objective_percussion_axial: "string" @< postive, negtive >,
                -sign_objective_percussion_lateral: "string" @< postive, negtive >,
                -sign_objective_palpation_fond_vestibule: "string" @< postive, negtive >,
                -sign_objective_mobilite: "string" @< postive, negtive >,
                -radio_panoramique: "string",
                -radio_retroslviolsire_couronne: "string",
                -radio_retroslviolsire_racine: "string"
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
        title: 'traumatismeDentaireDents collection',
        method: 'POST',
        route: '/oce/traumatismeDentaireDents',
        request: `
            (
                -patient_id: "string" !,
                -tooth_number: "integer" !,
                -description_tiente: "string",
                -description_etat_dent: "string",
                -description_trait_fracture: "string" @< tier_coronaire, tier_radiculare, tier_apical >,
                -lesion_associees: "string" ! @< fracture, alviolaire, fracture, basale, fracture, nasale, non >,
                -diagnostic_tissu_dur_pulpe: "string" !,
                -diagnostic_complication_paro: "string" !,
                -diagnostic_pulpaire: "string" !,
                -decision_therapeutique: "string" !,
                -pronostic: "string"
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
        title: 'traumatismeDentairePatient collection',
        method: 'POST',
        route: '/oce/traumatismeDentairePatient',
        request: `
            (
                -patient_id: "string" !,
                -motif_consultation: "string" ! @< fonctionnele, esthetique, douleure, [anything] >,
                -etat_general_actuel: "string" !,
                -date_traumatisme: "date" !,
                -cause_tarumatiame: "string" !,
                -circonstance_traumatisme: "string" !,
                -etat_generale_cephale: "string" ! @< oui, no >,
                -etat_general_pert_conscience: "string" ! @< oui, no >,
                -etat_generale_nauses: "string" ! @< oui, no >,
                -etat_generale_saignement: "string" ! @< oui, no >,
                -pronostic: "string"
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
