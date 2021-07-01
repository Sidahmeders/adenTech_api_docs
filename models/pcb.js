export default [
    {
        title: 'maladieRisque cardiopathie collection',
        method: 'POST',
        route: '/pcb/maladieRisque/cardiopathie',
        request: `
            (
                -type_cardiopathie: "string" @< >,
                -pathologie_associe: "arrayList" @< >,
                -risque_endocardite: "string" @< oui, non>,
                -traitement_anticoagulante: "string" @< oui, non >,
                -traitement_cours: "arrayList" @< >,
                -affection_associees: "arrayList" @< >,
                -examen_complementaires_demande: "arrayList" @< >,
                -decision_therapeutique: "arrayList" @< >,
                -protocole_antibiothique: "arrayList" @< >,
                -observation_particulieres: "arrayList" @< >,
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
        title: 'maladieRisque diabete collection',
        method: 'POST',
        route: '/pcb/maladieRisque/diabete',
        request: `
            (
                -type_diabete: "string" @< type1, type2 >,
                -pathologie_associe: "arrayList" @< >,
                -traitement_cours: "arrayList" @< >,
                -malaise_hypoglycemique: "string" @< oui, non >,
                -glycemie: "integer" @< >,
                -hemoglobinegyque: "integer" @< >,
                -examen_complementaires_demande: "arrayList" @< >,
                -decision_therapeutique: "arrayList" @< >,
                -equilibre_diabete: "string" @< >,
                -protocole_antibiothique: "arrayList" @< >,
                -observation_particulieres: "arrayList" @< >
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
        title: 'maladieRisque bisphosphonates collection',
        method: 'POST',
        route: '/pcb/maladieRisque/bisphosphonates',
        request: `
            (
                -diagnostique_maladie : "arrayList" @<  >,
                -pathologie_associe: "arrayList" @< >,
                -traitement_bisphosphonate_type: "string" @< >,
                -traitement_bisphosphonate_dose: "string" @< >,
                -traitement_bisphosphonate_voie: "string" @< >,
                -traitement_bisphosphonate_nombre_cures: "integer" @< >,
                -traitement_bisphosphonate_type_date_debute_taitement: "date",
                -traitement_bisphosphonate_type_date_fin_taitement: "date",
                -traitement associes:: "arrayList" @< >,
                -examen_complementaires_demande: "arrayList" @< >,
                -decision_therapeutique: "arrayList" @< >,
                -protocole_antibiothique: "arrayList" @< >,
                -observation_particulieres: "arrayList" @< >
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
        title: 'maladieRisque hemopathie collection',
        method: 'POST',
        route: '/pcb/maladieRisque/hemopathie',
        request: `
            (
                -diagnostique_maladie: "arrayList" @<  >,
                -pathologie_associe: "arrayList" @< >,
                -antecedentes_saignemet : "string" @< oui, non >,
                -antecedentes_saignemet_familialle: "string" @< oui, non >,
                -traitement_cours: "arrayList" @< >,
                -groupe_sanguin: "string" @< >,
                -examen_complementaires_demande: "arrayList" @< >,
                -decision_therapeutique: "arrayList" @< >,
                -transfusion_sanguine : "string" @< oui,non >,
                -adjoction_facteure_manquant : "string" @< oui, non >
                -protocole_antibiothique: "arrayList" @< >,
                -observation_particulieres: "arrayList" @< >
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
        title: 'maladieRisque irradie collection',
        method: 'POST',
        route: '/pcb/maladieRisque/irradie',
        request: `
            (
                -diagnostique_maladie : "arrayList" @<  >,
                -pathologie_associe: "arrayList" @< >,
                -traitement_cours: "arrayList" @< >,
                -traitement_dose_iradiation: "string" @< >,
                -traitement_type_date_debute_taitement: "date",
                -traitement_type_date_fin_taitement: "date",
                -traitement associes: "arrayList" @< >,
                -complication_poste_radiotherapie: "arrayList" @< >,
                -examen_complementaires_demande: "arrayList" @< >,
                -decision_therapeutique: "arrayList" @< >,
                -protocole_antibiothique: "arrayList" @< >,
                -observation_particulieres: "arrayList" @< >
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
        title: 'maladieRisque accidentCellulaire collection',
        method: 'POST',
        route: '/pcb/maladieRisque/accidentCellulaire',
        request: `
            (
                -date_appraition : "date",
                -pathologie_associe: "arrayList" @< >,
                -traitement_cours: "arrayList" @< >,
                -examen_complementaires_demande: "arrayList" @< >,
                -diagnostic_positive: "arrayList" @< >,
                -diagnostique_etiologique: "arrayList" @< >,
                -protocole_antibiothique: "arrayList" @< >,
                -observation_particulieres: "arrayList" @< >
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
        title: 'kysteTumeur collection',
        method: 'POST',
        route: '/pcb/kysteTumeur',
        request: `
            (
                -aspecte_clinique_forme: "arrayList" @<  >,
                -aspecte_clinique_signe_fonctionnele: "arrayList" @<  >,
                -aspecte_clinique_aspecte_muquese_recouvrement: "arrayList" @<  >,
                -aspecte_clinique_dente_regard_lesion: "arrayList" @<  >,
                -aspecte_clinique_envaiessemete_partie_molle : "string" @< oui, non  >,
                -aspecte_radio_aspect: "arrayList" @< >,
                -aspecte_radio_contour: "string" @< regulier, irregulier>,
                -aspecte_radio_localisation: "arrayList" @< >,
                -aspecte_radio_taille: "arrayList" @< >,
                -aspecte_radio_limite: "string" @< limite, mal_limite >,
                -aspecte_radio_evolustion: "string" @< rapid,lente >,
                -aspecte_radio_rapporte_avec_structure_anatomique: "arrayList" @< >,
                -aspecte_radio_aspecte_macroscopique: "arrayList" @< >,
                -aspecte_aspecte_histologique: "string" @< >,
                -examen_anatomopathologique: "string" @< >,
                -diagnostic_positive: "string" @< >,
                -diagnostic_differentiel: "arrayList" @< >,
                -decision_therapeutique: "arrayList" @< >,
                -pronostic: "string" @< >
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
        title: 'bilanRadiologique collection',
        method: 'POST',
        route: '/pcb/bilanRadiologique',
        request: `
            (
                -panoramique: "string" @<  >,
                -retroalviolaire : "string" @<  >,
                -cone_beam: "string" @<  >,
                -tomodensitometrie: "string" @<  >,
                -sialographie: "string" @<  >,
                -irm: "string" @< >,
                -echographie: "string" @< >
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
        title: 'examenDentaire collection',
        method: 'POST',
        route: '/pcb/examenDentaire',
        request: `
            (
                -tooth_number: "integer" ! @< 11, 12, ..., 47, 48 >,
                -Motif de consultation: "arrayList" @< fonctionnele, esthetique, douleure, [anything] >,
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
        title: 'traumatisme alveoloDentaireGgeneral collection',
        method: 'POST',
        route: '/pcb/traumatisme/alveoloDentaireGeneral',
        request: `
            (
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >,
                -etat_general_actuel: "string" !,
                -date_traumatisme: "date" !,
                -cause_tarumatiame: "string" !,
                -circonstance_traumatisme: "string" !,
                -etat_generale_cephale: "string" ! @< oui, no >,
                -etat_general_pert_conscience: "string" ! @< oui, no >,
                -etat_generale_nauses: "string" ! @< oui, no >,
                -etat_generale_saignement: "string" ! @< oui, no >,
                -examen_occlusion: "string",
                -fractures_os_alveolaires: "string"
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
        title: 'traumatisme alveoloDentaireDent collection',
        method: 'POST',
        route: '/pcb/traumatisme/alveoloDentaireDent',
        request: `
            (
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >,
                -stade_maturation_dente: "string" !,
                -traumatisme_tissus_durs_pulpe: "date" !,
                -traumatisme_tissus_parodontaux: "string" !,
                -traumatismes_tissus_environnants: "string" !
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
        title: 'traumatisme maxilloFacial collection',
        method: 'POST',
        route: '/pcb/traumatisme/maxilloFacial',
        request: `
            (
                -Aanalyse_traite_blesse_face: "arrayList"  @< fonctionnele, esthetique, douleure, [anything] >,
                -Aanalyse_traite_blesse_profil: "string",
                -Aanalyse_traite_blesse_arrire_en_haut: "date",
                -palpation_maxilaire superieure: "string",
                -palpation_mandibule: "string",
                -palpation_territoires sensitifs et moteurs: "string",
                -autres examens: "string",
                -diagnostic_nombre de fracture : "string",
                -diagnostic_type de fracture: "string",
                -diagnostic_lesion associees: "string",
                -decision therapeutique: "string",
                -pronostic : "string"
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
