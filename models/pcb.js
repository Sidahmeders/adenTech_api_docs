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
            -diagnostique_maladie : "string" @< type1, type2 >,
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
            -diagnostique_maladie: "string" @< type1, type2 >,
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
            -diagnostique_maladie : "string" @< type1, type2 >,
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
            -date_appraition : "string" @< type1, type2 >,
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
    }
]
