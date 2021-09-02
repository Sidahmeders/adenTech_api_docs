export default [
    {
        title: 'examenEndobuccal collection',
        method: 'POST',
        route: '/generalExamination/examenEndobuccal',
        request: `
            (
                -patient_id: "string" !
                -overture_buccal: "string" @< suffisant, < insuffisant, [number] > >
                -hygiene_buccaux_dentaires: "string" ! @< mauvais, moyenne, bon >
                -glandes_salivaires: "string"
                -etat_muqueuses_levre_sup: "string" @< RAS, [anything] >
                -etat_muqueuses_levre_inf: "string" @< RAS, [anything] >
                -etat_muqueuses_jugale: "string" @< RAS, [anything] >
                -etat_muqueuses_palatin: "string" @< RAS, [anything] >
                -etat_muqueuses_planche: "string" @< RAS, [anything] >
                -etat_muqueuses_langual: "string" @< RAS, [anything] >
                -etat_muqueuses_gengival: "string" @< RAS, [anything] >
                -etat_muqueuses_autres_lesion: "arrayList"
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
        title: 'examenExobuccal collection',
        method: 'POST',
        route: '/generalExamination/examenExobuccal',
        request: `
            (
                -patient_id: "string" !
                -inspection_symetrie_faciale: "string" @< normal, [anything] >
                -inspection_coloration_teguments: "string" @< normal, [anything] >
                -inspection_autres: "arrayList"
                -palpation_atm_douleur: "string" @< oui, no >
                -palpation_atm_bruite_articulaire: "string" @< claquement, craquement, crepitation, non >
                -palpation_atm_jeu_condyliene: "string" @< ressaut, asymetrique, symetrique, subluxation, [anything] >
                -palpation_atm_autres: "arrayList"
                -palpation_chaine_ganglionaire_localisation: "string" @< submental, submendibular, sous_angular, [anything] >
                -palpation_chaine_ganglionaire_nombre: "integer"
                -palpation_chaine_ganglionaire_taille: "string"
                -palpation_chaine_ganglionaire_tempirature: "string" @< chaude, froide >
                -palpation_muscles_masseter: "arrayList" @< isotonique, hypertrophique, douleure, [anything] >
                -palpation_muscles_temporal: "arrayList" @< isotonique, hypertrophique, douleure, [anything] >
                -palpation_muscles_pterygoidien_interne: "arrayList" @< isotonique, hypertrophique, douleure, [anything] >
                -palpation_muscles_pterygoidien_externe: "arrayList" @< isotonique, hypertrophique, douleure, [anything] >
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
        title: 'medicalAnamnese collection',
        method: 'POST',
        route: '/generalExamination/medicalAnamnese',
        request: `
            (
                -patient_id: "string" !
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >
                -antecedents_allergique: "arrayList" ! @< >
                -mauvaise_habitude: "arrayList" @< fumeur, bruxisme, onychophagie, succion, digigtale, [anything] >
                -AG_personnel_maladie: "arrayList" ! @< non, [anything] >
                -AG_personnel_traitement: "arrayList" ! @< non, [anything] >
                -AG_mere_maladie: "arrayList"
                -AG_pere_traitement: "arrayList"
                -AG_mere_traitement: "arrayList"
                -AG_pere_maladie: "arrayList"
                -AS_personnel_odf: "arrayList"
                -AS_personnel_oce: "arrayList"
                -AS_personnel_pcb: "arrayList"
                -AS_personnel_proth: "arrayList"
                -AS_personnel_paro: "arrayList"
                -AS_mere: "arrayList"
                -AS_pere: "arrayList"
                -AS_autres: "arrayList"
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
