export default [
    {
        title: 'examenGingival collection',
        method: 'POST',
        route: '/paro/examenGingival',
        request: `
            (
                -patient_id: "string" !
                -sector_gingival: "string" @< sup_ant, sup_g, sup_d, inf_ant, inf_d , inf_g >
                -contour: "arrayList" @< regulier, irregulier >
                -couleur: "arrayList" @< rose_coraille, rose_pale, rouge_claire, rouge_bleute, rouge_fonce, tache_milanine >
                -volume: "string" @< moyenne, augmente, tres_augmente >
                -aspect: "string" @< lisse_brillante, piquete_peau_orange >
                -consistance: "string" @< ferme, molle, adherente >
                -hga: "string" @< suffisante, insuffisante >
                -pma: "integer" @< 0, 1, 2, 3 >
                -pi: "integer" @< 0, 1, 2, 3 >
                -gi: "integer" @< 0, 1, 2, 3 >
                -sbi: "integer" @< 0, 1, 2, 3, 4, 5 >
                -cote_l: "string"
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
            *contour*
                -irregulier: @< malposition, augmentation_hauteur, recession, fisure_stillman, bourellet_maccall, [anything] >
        `
    },
    {
        title: 'examenSondage collection',
        method: 'POST',
        route: '/paro/examenSondage',
        request: `
            (
                -patient_id: "string" !
                -pv1: "string"
                -pv2: "string"
                -pv3: "string"
                -pp1: "string"
                -pp2: "string"
                -pp3: "string"
                -rv: "string"
                -rp: "string"
                -tooth_number: "string"
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
        title: 'indices collection',
        method: 'POST',
        route: '/paro/indices',
        request: `
            (
                -patient_id: "string" !
                -insertion_frien_sup: "string" @< cl1, cl2, cl3, cl4 >
                -insertion_frien_inf: "string" @< cl1, cl2, cl3, cl4 >
                -insertion_frien_lingual: "string" @< pathologique, physiologique >
                -insertion_frien_autres: "string"
                -atteints_furcation_1: "arrayList" @< teeth_number >
                -atteints_furcation_2: "arrayList" @< teeth_number >
                -atteints_furcation_3: "arrayList" @< teeth_number >
                -atteints_furcation_4: "arrayList" @< teeth_number >
                -indice_abrasion_1: "arrayList" @< teeth_number >
                -indice_abrasion_2: "arrayList" @< teeth_number >
                -indice_abrasion_3: "arrayList" @< teeth_number >
                -indice_abrasion_4: "arrayList" @< teeth_number >
                -indice_abrasion_5: "arrayList" @< teeth_number >
                -indice_mobilite_1: "arrayList" @< teeth_number >
                -indice_mobilite_2: "arrayList" @< teeth_number >
                -indice_mobilite_3: "arrayList" @< teeth_number >
                -indice_mobilite_4: "arrayList" @< teeth_number >
                -indice_recession_1: "arrayList" @< teeth_number >
                -indice_recession_2: "arrayList" @< teeth_number >
                -indice_recession_3: "arrayList" @< teeth_number >
                -indice_recession_4: "arrayList" @< teeth_number >
                -biotype_parodontal: "string" @< cl1, cl2, cl3, cl4 >
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
        title: 'interpretationRadiologicParo collection',
        method: 'POST',
        route: '/paro/interpretationRadiologicParo',
        request: `
            (
                -patient_id: "string" !
                -desmodente: "string"
                -lamina_dura: "string"
                -lyse_profondeur_superficielle: "string" @< teeth_number >
                -lyse_profondeur_profonde: "string" @< teeth_number >
                -lyse_profondeur_terminal: "string" @< teeth_number >
                -lyse_forme_horizontal: "string" @< teeth_number >
                -lyse_forme_vertical: "string" @< teeth_number >
                -rapport_cr_legerement_augmente: "string" @< teeth_number >
                -rapport_cr_augmente: "string" @< teeth_number >
                -rapport_cr_tres_augmente: "string" @< teeth_number >
                -rapport_dentodentaire: "string"
                -malposition_dentaire: "string"
                -megration_d_premaire: "string" @< teeth_number >
                -megration_d_secondaire: "string" @< teeth_number >
                -trabeculation_osseuses_max: "string" @< lache, dense >
                -trabeculation_osseuses_mand: "string" @< lache, dense >
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
        title: 'diagnosticTraitement collection',
        method: 'POST',
        route: '/paro/diagnosticTraitement',
        request: `
            (
                -patient_id: "string" !
                -diagnostic_etiologique_directe_declenchant: "string" @< plaque_dentaire, non >
                -diagnostic_etiologique_directe_favorisant: "arrayList" @< prothese_mal_adapte, traitement_odf,
                    respiration_buccale, obturation_debordante, tartre, carie_cervicale, 
                    dent_abscente, diasteme, recession, mastication_unilaterale, [anything] >
                -diagnostic_etiologique_indirecte: "arrayList" @< prematurite, interfirence, trauma_occlusale_primaire, 
                    trauma_occlusale_secondaire, traitement_odf, prothese_mal_adapte, bruxisme, crispation, succion_de_pouce,
                    onychophagie, mastication_unilaterale, obturation_debordante_occlusale, [anything] >
                -diagnostic_positive: "arrayList" @< classification_armitage_tout >
                -diagnostic_differentiel: "arrayList" @< classification_armitage_tout >
                -traitement_urgence: "arrayList" @< antibiotherapie, contention, curtage, ecouvillonnage, incision_et_drinage, gouttiere >
                -traitement_initial: "string" @< detartrage, surfasage, motivation_HBD >
                -revaluation: "arrayList"
                -traitement_correctif: "arrayList"
                -maintenance: "arrayList"
                -pronostic_global: "arrayList"
                -pronostic_unitaire: "arrayList"
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
        title: 'examenFonction collections',
        method: 'POST',
        route: '/odf/examenFonction',
        request: `
            (
                -patient_id: "string" !
                -ventilation: 'string'
                -daeglutition: 'string'
                -mastication: 'string'
                -phonation: 'string'
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
        title: 'examenOcclusionStatic collection',
        method: 'POST',
        route: '/odf/examenOcclusionStatic',
        request: `
            (
                -incisive_sagital:"string" @< >
                -incisive_transversal:"string" @< >
                -incisive_vertical:"string" @< overbite_normal_supracclusion, beance >
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
    },
    {
        title: 'interpretationRadiologic_Odf_Paro collection',
        method: 'POST',
        route: '/odf/interpretationRadiologic_Odf_Paro',
        request: `
            (
                -bases_osseuses: "string"
                -sinus_maxilllaires: "string"
                -articulation_temporo_mandibulaire: "string"
                -fosses_nasales: "string"
                -germes: "string"
                -etat_couronnes: "string"
                -etat_racines: "string"
                -edification_racines_complete: "string"
                -edification_racines_terminal: "string"
                -medification_racines_moyenne: "string"
                -edification_racines_debutante: "string"
                -rhizalyse_debutante: "string"
                -rhizalyse_moyenne: "string"
                -rhizalyse_terminal: "string"
                -signe_ddm: "string"
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
