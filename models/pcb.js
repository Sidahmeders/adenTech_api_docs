export default [
    {
        title: 'maladieRisque cardiopathie collection',
        method: 'POST',
        route: '/pcb/maladieRisque/cardiopathie',
        request: `
            -type_cardiopathie: "string" @< >,
            -pathologie_associe: "string" @< >,
            -risque_endocardite: "string" @< >,
            -traitement_anticoagulante: "string" @< >,
            -traitement_cours: "string" @< >,
            -affection_associees: "string" @< >,
            -examen_complementaires_demande: "string" @< >,
            -decision_therapeutique: "string" @< >,
            -protocole_antibiothique: "string" @< >,
            -observation_particulieres: "string" @< >,
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
        title: 'maladieRisque diabete collection',
        method: 'POST',
        route: '/pcb/maladieRisque/diabete',
        request: `
            -type_diabete: "string" @< type1, type2 >,
            -pathologie_associe: "string" @< >,
            -traitement_cours: "string" @< >,
            -malaise_hypoglycemique: "string" @< >,
            -glycemie: "string" @< >,
            -hemoglobinegyque: "string" @< >,
            -examen_complementaires_demande: "string" @< >,
            -decision_therapeutique: "string" @< >,
            -equilibre_diabete: "string" @< >,
            -protocole_antibiothique: "string" @< >,
            -observation_particulieres: "string" @< >,
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
        title: 'maladieRisque bisphosphonates collection',
        method: 'POST',
        route: '/pcb/maladieRisque/bisphosphonates',
        request: `
            -diagnostique_maladie : "string" @<  >,
            -pathologie_associe: "string" @< >,
            -traitement_bisphosphonate_type: "string" @< >,
            -traitement_bisphosphonate_dose: "string" @< >,
            -traitement_bisphosphonate_voie: "string" @< >,
            -traitement_bisphosphonate_nombre_cures: "string" @< >,
            -traitement_bisphosphonate_type_date_debute_taitement: "string" @< >,
            -traitement_bisphosphonate_type_date_fin_taitement: "string" @< >,
            -traitement associes:: "string" @< >,
            -examen_complementaires_demande: "string" @< >,
            -decision_therapeutique: "string" @< >,
            -protocole_antibiothique: "string" @< >,
            -observation_particulieres: "string" @< >,
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
        title: 'maladieRisque hemopathie collection',
        method: 'POST',
        route: '/pcb/maladieRisque/hemopathie',
        request: `
            -diagnostique_maladie: "string" @<  >,
            -pathologie_associe: "string" @< >,
            -antecedentes_saignemet : "string" @< >,
            -antecedentes_saignemet_familialle: "string" @< >,
            -traitement_cours: "string" @< >,
            -groupe_sanguin: "string" @< >,
            -examen_complementaires_demande: "string" @< >,
            -decision_therapeutique: "string" @< >,
            -transfusion_sanguine : "string" @< >,
            -adjoction_facteure_manquant : "string" @< >
            -protocole_antibiothique: "string" @< >,
            -observation_particulieres: "string" @< >,
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
        title: 'maladieRisque irradie collection',
        method: 'POST',
        route: '/pcb/maladieRisque/irradie',
        request: `
            -diagnostique_maladie : "string" @<  >,
            -pathologie_associe: "string" @< >,
            -traitement_cours: "string" @< >,
            -traitement_dose_iradiation: "string" @< >,
            -traitement_type_date_debute_taitement: "string" @< >,
            -traitement_type_date_fin_taitement: "string" @< >,
            -traitement associes: "string" @< >,
            -complication_poste_radiotherapie: "string" @< >,
            -examen_complementaires_demande: "string" @< >,
            -decision_therapeutique: "string" @< >,
            -protocole_antibiothique: "string" @< >,
            -observation_particulieres: "string" @< >,
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
        title: 'maladieRisque accidentCellulaire collection',
        method: 'POST',
        route: '/pcb/maladieRisque/accidentCellulaire',
        request: `
            -date_appraition : "string" @<  >,
            -pathologie_associe: "string" @< >,
            -traitement_cours: "string" @< >,
            -examen_complementaires_demande: "string" @< >,
            -diagnostic_positive: "string" @< >,
            -diagnostique_etiologique: "string" @< >,
            -protocole_antibiothique: "string" @< >,
            observation_particulieres: "string" @< >,
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
        title: 'kysteTumeur collection',
        method: 'POST',
        route: '/pcb/kysteTumeur',
        request: `
            -aspecte_clinique_forme: "string" @<  >,
            -aspecte_clinique_signe_fonctionnele: "string" @<  >,
            -aspecte_clinique_aspecte_muquese_recouvrement: "string" @<  >,
            -aspecte_clinique_dente_regard_lesion: "string" @<  >,
            -aspecte_clinique_envaiessemete_partie_molle : "string" @<  >,
            -aspecte_radio_aspect: "string" @< >,
            -aspecte_radio_contour: "string" @< >,
            -aspecte_radio_localisation: "string" @< >,
            -aspecte_radio_la taille: "string" @< >,
            -aspecte_radio_les limite de lesion: "string" @< >,
            -aspecte_radio_evolustion: "string" @< >,
            -aspecte_radio_rapporte_avec_structure_anatomique: "string" @< >,
            -aspecte_radio_aspecte_macroscopique: "string" @< >,
            -aspecte_aspecte_histologique: "string" @< >
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
        title: 'bilanRadiologique collection',
        method: 'POST',
        route: '/pcb/bilanRadiologique',
        request: `
            -panoramique: "string" @<  >,
            -retroalviolaire : "string" @<  >,
            -cone_beam: "string" @<  >,
            -tomodensitometrie: "string" @<  >,
            -sialographie: "string" @<  >,
            -irm: "string" @< >,
            -echographie: "string" @< >
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
        title: 'examenDentaire collection',
        method: 'POST',
        route: '/pcb/examenDentaire',
        request: `
            -tooth_number: "integer" ! @< 11, 12, ..., 47, 48 >,
            -Motif de consultation: "string" @< >,
            -Histoire de la maladie: "string" @< >,
            -sign_subjective_provoque: "arrayList" @< chaude, froide, sucre, [anything] >,
            -sign_subjective_spontanne: "string" @< ague, spontanne >,
            -sign_subjective_autres: "string",
            -sign_objective_vitalite: "string" @< postive, negtive >,
            -sign_objective_percussion_axial: "string" @< postive, negtive >,
            -sign_objective_percussion_lateral: "string" @< postive, negtive >,
            -sign_objective_palpation_fond_vestibule: "string" @< postive, negtive >,
            -sign_objective_mobilite: "integer" @< 0, 1, 2, 3, 4 >,
            -Diagnostic: "string" @< >,
            -Traitement: "string" @< >
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
        title: 'T_D --- collection',
        method: 'POST',
        route: '/pcb/T_D/---',
        request: `
            -Motif de consultation : "string" @< >,
            -
            -
            -
            -
        `
    },
    {
        title: 'traumatisme alveoloDentaire collection',
        method: 'POST',
        route: '/pcb/traumatisme/alveoloDentaire',
        request: `
            -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >,
            -etat_general_actuel: "string" !,
            -date_traumatisme: "date" !,
            -cause_tarumatiame: "string" !,
            -circonstance_traumatisme: "string" !,
            -etat_generale_cephale: "string" ! @< oui, no >,
            -etat_general_pert_conscience: "string" ! @< oui, no >,
            -etat_generale_nauses: "string" ! @< oui, no >,
            -etat_generale_saignement: "string" ! @< oui, no >,
            -examen de occlusion: "string"
            `
    }
]
