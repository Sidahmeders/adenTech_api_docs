export default [
    {
        title: 'examenEndobuccal collection',
        method: 'POST',
        route: '/generalExamination/examenEndobuccal',
        request: `
            (
                -patient_id: "string" !,
                -overture_buccal: "string" @< suffisant, < insuffisant, [number] > >,
                -hygiene_buccaux_dentaires: "string" ! @< mauvais, moyenne, bon >,
                -etat_muqueuses_levre_sup: "string" @< RAS, [anything]  >,
                -etat_muqueuses_levre_inf: "string" @< RAS, [anything]  >,
                -etat_muqueuses_jugale: "string" @< RAS, [anything]  >,
                -etat_muqueuses_palatin: "string" @< RAS, [anything]  >,
                -etat_muqueuses_planche: "string" @< RAS, [anything]  >,
                -etat_muqueuses_langual: "string" @< RAS, [anything]  >,
                -etat_muqueuses_gengival: "string" @< RAS, [anything]  >,
                -etat_muqueuses_autres_lesion: "string",
            )   
        `,
        response: `
            {}
        `,
        headers: `
            *Request Headers*
                -authToken: "bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'examenExobuccal collection',
        method: 'POST',
        route: '/generalExamination/examenExobuccal',
        request: `
            (
                -patient_id: "string" !,
                -inspection_symetrie_faciale: "string" @< normal, [anything] >,
                -inspection_coloration_teguments: "string" @< normal, [anything] >,
                -inspection_autres: "string",
                -palpation_atm_douleur: "string" @< oui, no >,
                -palpation_atm_bruite_articulaire: "string" @< claquement, craquement, crepitation, non >,
                -palpation_atm_jeu_condyliene: "string" @< ressaut, asymetrique, symetrique, subluxation, [anything] >,
                -palpation_atm_autres: "string",
                -palpation_chaine_ganglionaire_localisation: "string" @< submental, submendibular, sous_angular, [anything] >,
                -palpation_chaine_ganglionaire_nombre: "integer",
                -palpation_chaine_ganglionaire_taille: "string",
                -palpation_chaine_ganglionaire_tempirature: "string" @< chaude, froide >,
                -palpation_muscles_masseter: "string" @< isotonique, hypertrophique, douleure, [anything] >,
                -palpation_muscles_temporal: "string" @< isotonique, hypertrophique, douleure, [anything] >,
                -palpation_muscles_pterygoidien_interne: "string" @< isotonique, hypertrophique, douleure, [anything] >,
                -palpation_muscles_pterygoidien_externe: "string" @< isotonique, hypertrophique, douleure, [anything] >,
            )      
        `,
        response: `
            {}
        `,
        headers: `
            *Request Headers*
                -authToken: "bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'medicalAnamnese collection',
        method: 'POST',
        route: '/generalExamination/medicalAnamnese',
        request: `
            (
                -patient_id: "string" !,
                -motif_consultation: "string" ! @< fonctionnele, esthetique, douleure, [anything] >,
                -mauvaise_habitude: "string",
                -AG_personnel_maladie: "string" ! @< non, [anything] >,
                -AG_personnel_traitement: "string" ! @< non, [anything] >,
                -AG_mere_maladie: "string",
                -AG_pere_traitement: "string",
                -AG_mere_traitement: "string",
                -AG_pere_maladie: "string",
                -AS_personnel_odf: "string",
                -AS_personnel_oce: "string",
                -AS_personnel_pcb: "string",
                -AS_personnel_proth: "string",
                -AS_personnel_paro: "string",
                -AS_mere_odf: "string",
                -AS_mere_oce: "string",
                -AS_mere_pcb: "string",
                -AS_mere_paro: "string",
                -AS_mere_proth: "string",
                -AS_pere_odf: "string",
                -AS_pere_oce: "string",
                -AS_pere_pcb: "string",
                -AS_pere_proth: "string",
                -AS_pere_paro: "string",
                -AS_autres: "string"
            )
        `,
        response: `
            {}
        `,
        headers: `
            *Request Headers*
                -authToken: "bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    }
]
