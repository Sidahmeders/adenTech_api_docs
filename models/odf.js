export default [
    {
        title: 'moulage collection',
        method: 'POST',
        route: '/odf/moulage',
        request: `
            (
                -patient_id: "string" !
                -maxillaire_forme: "string" @< u, v, ogivale >
                -maxillaire_symetrie: "string" @< conserve, non, conserve >
                -maxillaire_profondeur_voute: "string" @< profonde, moyenene, plate >
                -maxillaire_malposition: "string" @< maxi_teeth_number, maxi_teeth_malposition >
                -maxillaire_ddm: "integer" @< range between [~20, ..., +20] >
                -maxillaire_ddm_type: "string" @< ddm_macrodontie_relative, ddm_macrodontie_absolue, ddm_microdontie_relative, ddm_microdontie_absolue >
                -maxillaire_indice_ponte_d4g4: "string" @< endoalveolie, exoalveolie, normoalveolie >
                -maxillaire_indice_ponte_d6g6: "string" @< endoalveolie, exoalveolie, normoalveolie >
                -maxillaire_indice_doumange: "string" @< ogivale, haute, basse >
                -mandubule_forme: "string" @< v, u >
                -mandubule_symetrie: "string" @< conserve, non_conserve >
                -mandubule_malposition: "string" @< mand_teeth_number, mand_teeth_malposition >
                -mandubule_ddm: "integer" @< range between [~20, ..., +20] >
                -mandubule_ddm_type: "string" @< ddm_macrodontie_relative, ddm_macrodontie_absolue, ddm_microdontie_relative, ddm_microdontie_absolue >
                -mandubule_indice_pont_d4g4: "string" @< endoalveolie, exoalveolie, normoalveolie >
                -mandibule_indice_pont_d6g6: "string" @< endoalveolie, exoalveolie, normoalveolie >
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
            *maxillaire_malposition*
                -maxi_teeth_number: @< 11, 12, ..., 47, 48 >
                -maxi_teeth_malposition: @< ectopique, rotation_axiale, rotation_marginale, version_vestibulaire, 
                    version_palatine, verion_mesiale, version_distale,[anything] >
            
            *mandibule_malposition*
                -mand_teeth_number: @< 11, 12, ..., 47, 48 >
                -mand_teeth_malposition: @< ectopique, rotation_axiale, rotation_marginale, version_vestibulaire, 
                    version_palatin, verion_mesiale, version_distale, [anything] >
        `
    },
    {
        title: 'anemnese collection',
        method: 'POST',
        route: '/odf/anemnese',
        request: `
            (
                -patient_id: "string" !
                -motif_consultation: "arrayList" ! @< fonctionnel, esthetique, douleur, [anything] >
                -antecedent_odf: "arraylist"@< amovible, fixe multiattache, orthopedique, [anything] >
                -tics_habitude: "arraylist" @< oui, no >
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
            *tics_habitude*
                -oui: @< succion_digitale, succion_levre_inferieure, mordillment_levre, bruxisme, onychophagie,succion_tetine, [anything] >
        `
    },
    {
        title: 'diagnosticTraitement collection',
        method: 'POST',
        route: '/odf/diagnosticTraitement',
        request: `
            (
                -patient_id: "string" !
                -dp_class_squelettique: "string" ! @< cl1_selon_ballard, cl2_selon_ballard, cl3_selon_ballard >
                -dp_forme_clinique: "arrayList" ! @<  promaxillie, retromaxillie, pro_mandibulie, retro_mandibulie, dolicho_maxillie, brachy_maxilie, dolicho_mandibulie, brachy_mandibulie >
                -dp_typologie_faciale: "string" ! @< open_bite, normo_bite, deep_bite >
                -dp_direction_croissance_faciale: "string" ! @< anterieure, posterieure, moyenne >
                -dp_direction_croissance_mandibulaire: "string" ! @< anterieure, posterieure, moyenne >
                -anomalies_basale_vertical: "arrayList" @<exes_vertical_anterieure, insufisance_verticale_anterieure >
                -anomalies_basale_transversal: "arrayList" @< endognathie, exognathie, endognathie_unilaterale, exognathie unilaterale>
                -anomalies_alviolaire_vertical: "arrayList" @<supralveolie_anterieure, infralveolie_anterieure, infralveolie_posterieure >
                -anomalies_alviolaire_transversal: "arrayList" @< endoalveolie, exoaleolie, endoalveolie_unilaterale, exoaleolie_unilaterale >
                -anomalies_alviolaire_antero_posterieure: "arrayList" @< proalveoliesuperieure, retroalvieliesuperieure, promaxillie, retromaxillie >
                -anomalies_dentaires: "arrayList" @< ectopie, dent_surnumeraire, dent_incluse, agenisie, anastrophie, heterodentie, anodentie, oligodentie, dysplasie, dent_riziforme, ddm, ddd  >
                -diagnostic_etiologique: "arrayList" ! @< heriditaire, heridite_croisee, ventilation_orale, ventilation_mixte, deglutition_atypique_pulsion_languale_anterieure, deglutition_atypique_interposition _anterieure, position_basse_protrusive_langue, mastication_unilaterale, odontome, hypotonicite_levre_superieure, hypotonicite_levre_inferieure, hypertonicite_levre_superieure, hypertonicite_levre_inferieure, [anything] >
                -diagnostic_differentiel: "arrayList" !@< cl1_selon_ballard, cl2_selon_ballard, cl3_selon_ballard, promaxillie, retromaxillie, pro_mandibulie, retro_mandibulie, dolicho_maxillie, brachy_maxilie, dolicho_mandibulie, brachy_mandibulie, exes_vertical_anterieure, insufisance_verticale_anterieure, endognathie, exognathie, endognathie_unilaterale, exognathie_unilaterale, supralveolie_anterieure, infralveolie_anterieure, infralveole_posterieure, endoalveolie, exoaleolie, endoalveolie_unilaterale, exoaleolie_unilaterale, proalveolie_superieure, retroalvieliesuperieure, retromaxillie, ectopie, dent_surnumeraire, dent_incluse, agenisie, anastrophie, heterodentie, anodentie, oligodentie, dysplasie, dent_riziforme, ddm, ddd >
                -plan_trt_objective_squeletique: "arrayList"  @< classe 1 squelitique, normo gnathie, normobite >
                -plan_trt_objective_fonctionnels: "arrayList"  @< ventilation_nasale, deglutition_physiologique, mastication_unilaterale_alternee, phonation_physiologique, arret_parafonction >
                -plan_trt_objective_occlusaux: "arrayList" ! @< overjete_physiologique , overbite_physiologique, coincidance_point_interincisif, class1_canine_droite, class1_canine_gauche, class_1_molaire droite, class1_molaire_gauche, class2_molaire_droite_therapeutique, class2_molaire_gauche_therapeutique, class2_molaire_droite_therapeutique, class2_molaire_gauche, therapeutique >
                -plan_trt_objective_esthetiques: "arrayList" !
                -plan_trt_contension : "arrayList" !
                -plan_trt_pronostic: "arrayList" !
                -plan_trt_principes_dente_extraire: "arrayList" !
                -temps_traitement: "arrayList" ! @< 1er_temps, 2em_temps, ..., 29em_temps, 30em_temps >
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
            *temps_traitement*
                -1er_temps _ 2em_temps ____ 29_temps _ 30em_temps: @< >
        `
    },
    {
        title: 'endobuccal collection',
        method: 'POST',
        route: '/odf/endobuccal',
        request: `
            (
                -patient_id: "string" !
                -hygien_bucaux_dentaire: "string" ! @< mauvais, moyenne, bon >
                -probleme_paro: "string" @< oui, no >
                -langue_volume: "string" @< macroglossie, microglossie, normoglossie >
                -langue_situation: "arrayList" @< basse, pulsion_anterieure, interposion_anterieure, interposition_laterale, papille_retro_insisive >
                -langue_frien_linguale: "string" @< court, physiologique >
                -labial_frien_sup: "string" @< court, physiologique >
                -labial_frien_inf: "string" @< court, physiologique >
                -age_dentaire: "integer"
                -satde_dentitin: "string" @< temporaire_stable, temporaire_constitutionnelle, mixte_stable, mixte_constitutionnelle, adolescente_stable, adolescente_constitutionnele, adulte_jeune_stable, adulte_jeune_constitutionnelle, adulte_complete_stable, adulte_complete_constitutionnelle >
                -chemin_fermeture: "string"< devie_gauche, devie_droite >
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
        title: 'exobuccal collection',
        method: 'POST',
        route: '/odf/exobuccal',
        request: `
            (
                -patient_id: "string" <required>
                -symetrie_faciale: "string" @< conserve, nonconserve >
                -parallelisme_trois_ligne: "string" @< conserve, nonconserve >
                -typologie_facial: "string"  "string" @< openbite, deepbite, normobite >
                -profile_izard: "string" @< sisforntal, transfrontal, orthofrontal >
                -profile_ricketts: "string" @< convexe, rectiligne, concave  >
                -muscilature_joues: "string" @< isotonique, hypertonique, hypotonique >
                -muscilature_levres_repos: "string" @< isotonique, hypertonique, hypotonique>
                -muscilature_levres_fonction: "string" @< isotonique, hypertonique, hypotonique >
                -sillons_slm: "string" @< marque, peumarque, tropmarque>
                -sillons_sng: "string" @< marque, peumarque, tropmarque >
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
        title: 'resulteCepholomettrie collection',
        method: 'POST',
        route: '/odf/resulteCepholomettrie',
        request: `
            (
                -patient_id: "string" !
                -rapport_cranio_faciaux_sagittaux_sna: "integer"
                -rapport_cranio_faciaux_sagittaux_snb: "integer"
                -rapport_cranio_faciaux_sagittaux_anb: "integer"
                -rapport_cranio_faciaux_sagittaux_convexite: "integer"
                -rapport_cranio_faciaux_sagittaux_se: "integer"
                -rapport_cranio_faciaux_sagittaux_sl: "integer"
                -rapport_cranio_faciaux_sagittaux_scg: "integer"
                -rapport_cranio_faciaux_sagittaux_s_fpm: "integer"
                -mensuration_basales_fpm_ena: "integer"
                -mensuration_basales_at_chateau: "integer"
                -mensuration_basales_longeur_mandibule: "integer"
                -mensuration_basales_xipm: "integer"
                -direction_croissance_fma_tweed: "integer"
                -direction_croissance_axe_brodie: "integer"
                -direction_croissance_axe_facial_Rickeets: "integer"
                -mensurations_verticales_hes: "integer"
                -mensurations_verticales_hei: "integer"
                -mensurations_verticales_hauteur_ramale: "integer"
                -mensurations_verticales_ena_xipm: "integer"
                -papport_dento_squellettes_6ptv: "integer"
                -rapport_dento_squelletique_if: "integer"
                -rapport_dento_squellettes_im: "integer"
                -rapport_dento_squellettes_ia_oo_distance: "integer"
                -rapport_dento_squellettes_ia_po_angle: "integer"
                -rapport_dento_squellettes_ia_po_distance: "integer"
                -rapport_dento_dentaire_ii: "integer"
                -esthetique_ls_ligne_e: "integer"
                -esthetique_li_ligne_e: "integer"
                -esthetique_angle_z: "integer"
            )        
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `,
        specification: `
            *rapport_cranio_faciaux_sagittaux_sna*
                -IF VALUE RANGE BETWEEN(6.00 AND 7.00): position normal du maxillaire paraport a la base du crane 
                -IF VALUE GREATER than 7.00: position avance du maxillaire paraport a la base du crane
                -IF VALUE LESS THAN 6.00: position recule du maxillaire paraport a la base du crane

            *rapport_cranio_faciaux_sagittaux_snb*
                position normal du mandibule paraport a la base du crane
                position avance du mandibule paraport a la base du crane
                position recule du mandibule paraport a la base du crane

            *rapport_cranio_faciaux_sagittaux_anb*
                position avance du mxillaire paraport a la mandibule
                position recule du mxillaire paraport a la mandibule
                position normal du mxillaire paraport a la mandibule

            *mensuration_basales_fpm_ena*
                longeure augmente du maxillaire
                longeure moyenne du maxillaire
                longeure diminue du maxillaire

            *mensuration_basales_at_chateau*
                longeure augmente du maxillaire
                longeure moyenne du maxillaire
                longeure diminue du maxillaire

            *mensuration_basales_longeur_mandibule*
                longeure augmente du mandibule
                longeure moyenne du mandibule
                longeure diminue du mandibule
                
            *mensuration_basales_xipm*
                longeure augmente du mandibule
                longeure moyenne du mandibule
                longeure diminue du mandibule
            
            *direction_croissance_fma_tweed*
                rotation posterieure de la mandibule
                rotation moyenne de la mandibule
                rotation anterieure de la mandibule

            *direction_croissance_axe_brodie*
                direction de croissance faciale anteriere
                direction de croissance faciale posterieuure
                direction de croissance faciale moyenne

            *direction_croissance_axe_facial_Rickeets*
                direction de croissance faciale anteriere
                direction de croissance faciale posterieuure
                direction de croissance faciale moyenne
        `
    },
    {
        title: 'examenFonction collection',
        method: 'POST',
        route: '/odf/examenFonction',
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
        title: 'examenOcclusionStatic collection',
        method: 'POST',
        route: '/odf/examenOcclusionStatic',
        request: `
            (
                -incisive_sagital: "integer" @< range between [~20, ..., +20] >
                -incisive_transversal: "string" @< coincidence, devie_gauche , devie_droite >
                -incisive_vertical: "integer" @< range between [~20, ..., +20] >
                -canine_droite_sagital: "string" @< cl1, cl2 ,cl3 >
                -canine_droite_vertical: "string" @< respecte, nonrespecte >
                -canine_droite_transversal: "string" @< respecte, nonrespecte >
                -canine_gauche_sagital: "string" @< cl1, cl2, cl3 >
                -canine_gauche_vertical: "string" @< respecte, nonrespecte >
                -canine_gauche_transversal: "string" @< respecte, nonrespecte >
                -molaire_gauche_sagital: "string" @< cl1, cl2, cl3 >
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
        title: 'examenOcclusionDynamic collection',
        method: 'POST',
        route: '/odf/examenOcclusionDynamic',
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
        title: 'interpretationRadiologic_Odf_Paro collection',
        method: 'POST',
        route: '/odf/interpretationRadiologic_Odf_Paro',
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
