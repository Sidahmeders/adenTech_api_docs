export default [
    {
        title: 'moulage collection',
        method: 'POST',
        route: '/odf/moulage',
        request: `
            (
                -patient_id: "string" !,
                -maxillaire_forme: "string" @< u, v, ogivale >,
                -maxillaire_symetrie: "string" @< conserve, non, conserve >,
                -maxillaire_profondeur_voute: "string" @< profonde, moyenene, plate >,
                -maxillaire_malposition: "string" @< maxi_teeth_number, maxi_teeth_malposition >,
                -maxillaire_ddm: "integer" @< range between [~20, ..., +20] >,
                -maxillaire_indice_ponte_d4g4: "string" @< maxilaire_large, maxilaire_moyenne, maxilaire_etroite >,
                -maxillaire_indice_ponte_d6g6: "string" @< maxilaire_large, maxilaire_moyenne, maxilaire_etroite >,
                -maxillaire_indice_doumange: "string" @< ogivale, haute, basse >,
                -mandubule_forme: "string" @< v, u >,
                -mandubule_symetrie: "string" @< conserve, non_conserve >,
                -mandubule_malposition: "string" @< mand_teeth_number, mand_teeth_malposition >,
                -mandubule_indice_pont_d4g4: "string" @< mandibule_large, mandibule_moyenne, mandibule_etroite >,
                -mandubule_indice_pont_d6g6: "string" @< mandibule_large, mandibule_moyenne, mandibule_etroite >
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
                -maxi_teeth_malposition: @< ectopique, rotation, axiale, marginale, version_vestibulaire, 
                    version_palatin, verion_mesiale, version_distale,[anything] >
            
            *mandubule_malposition*
                -mand_teeth_number: @< 11, 12, ..., 47, 48 >
                -mand_teeth_malposition: @< ectopique, rotation_axiale, marginale, version_vestibulaire, 
                    version_palatin, verion_mesiale, version_distale, [anything] >
        `
    },
    {
        title: 'anemnese collection',
        method: 'POST',
        route: '/odf/anemnese',
        request: `
            (
                -patient_id: "string" !,
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >,
                -antecedente_odf_duree: "string",
                -antecedente_odf_type: "string",
                -tics_habitude: "arrayList" @< oui, no >
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
                -oui: @< succion_digitale, succion_levre_inferieure, mordillment_levre, bruxisme, onychophagie, [anything] >
        `
    },
    {
        title: 'diagnosticTraitement collection',
        method: 'POST',
        route: '/odf/diagnosticTraitement',
        request: `
            (
                -patient_id: "string" !,
                -dp_class_squelettique: "string" ! @< cl1_selon_ballard, cl2_selon_ballard, cl3_selon_ballard >,
                -dp_forme_clinique: "arrayList" ! @< endoalveolie, exoalveolie, endognathie, exognathie, latero_gnathie, infraalviole_anterieure,
                    infraalveolie posterieur, supraalveolie, promaxillie, retromaxillie, pro_mandibulie, retro_mandibulie, dolicho_maxillie, 
                    brachy_maxilie, dolicho_mandibulie, brachy_mandibulie, [anything] >,
                -dp_typologie_faciale: "string" ! @< open_bite, normo_bite, deep_bite >,
                -dp_direction_croissance_faciale: "string" ! @< anterieur, posterieur, moyenne >,
                -dp_direction_croissance_mandibulaire: "string" ! @< anterieur, posterieur, moyenne >,
                -dp_anomalies_associees: "arrayList" ! @< endoalveolie, exoalveolie, endognathie, exognathie, latero_gnathie, infraalviole_anterieure, 
                    infraalveolie_posterieur, supraalveolie, promaxillie, retromaxillie, pro_mandibulie, retro_mandibulie, dolicho_maxillie ,
                    brachy_maxilie, dolicho_mandibulie_brachy_mandibulie, proglissement_mandibulaire, latero_deviation, [anything] >,
                -diagnostic_etiologique: "arrayList" ! @< heriditaire, foctionnelle, [anything] >,
                -diagnostic_differentiel: "arrayList" !,
                -plan_trt_objective_squeletique: "string" !,
                -plan_trt_objective_fonctionnels: "string" !,
                -plan_trt_objective_occlusaux: "string" !,
                -plan_trt_objective_esthetiques: "string" !,
                -plan_trt_principes_moyens: "string" !,
                -plan_trt_contension : "string" !,
                -plan_trt_pronostic: "string" !
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
        title: 'endobuccal collection',
        method: 'POST',
        route: '/odf/endobuccal',
        request: `
            (
                -patient_id: "string" !,
                -hygien_bucaux_dentaire: "string" ! @< mauvais, moyenne, bon >,
                -probleme_paro: "string" @< oui, no >,
                -langue_volume: "string" @< macroglossie, microglossie, normoglossie >,
                -langue_situation: "string" @< basse, pulsion_anterieure, interposion_anterieure, interposition_laterale, papille_retro_insisive >,
                -langue_frien_linguale: "string",
                -age_dentaire: "integer" @< court, physiologique >,
                -satde_dentitin: "string" @< temporaire_stable, temporaire_constitutionnelle, mixte_stable, mixte_constitutionnelle, 
                    adolescente_stable, adolescente_constitutionnele, adulte_jeune_stable, adulte_jeune_constitutionnelle,
                    adulte_complete_stable, adulte_complete_constitutionnelle >
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
                -patient_id: "string" <required>,
                -symetrie_faciale: "string",
                -parallelisme_trois_ligne: "string",
                -typologie_facial: "string",
                -profile_izard: "string",
                -profile_ricketts: "string",
                -muscilature_joues: "string",
                -muscilature_levres_repos: "string",
                -muscilature_levres_fonction: "string",
                -sillons_slm: "string",
                -sillons_sng: "string"
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
                -patient_id: "string" !,
                -rapport_cranio_faciaux_sagittaux_sna: "integer",
                -rapport_cranio_faciaux_sagittaux_snb: "integer",
                -rapport_cranio_faciaux_sagittaux_anb: "integer",
                -rapport_cranio_faciaux_sagittaux_convexite: "integer",
                -rapport_cranio_faciaux_sagittaux_se: "integer",
                -rapport_cranio_faciaux_sagittaux_sl: "integer",
                -rapport_cranio_faciaux_sagittaux_scg: "integer",
                -rapport_cranio_faciaux_sagittaux_s_fpm: "integer",
                -mensuration_basales_fpm_ena: "integer",
                -mensuration_basales_at_chateau: "integer",
                -mensuration_basales_longeur_mandibule: "integer",
                -mensuration_basales_xipm: "integer",
                -direction_croissance_fma_tweed: "integer",
                -direction_croissance_axe_brodie: "integer",
                -direction_croissance_axe_facial_Rickeets: "integer",
                -mensurations_verticales_hes: "integer",
                -mensurations_verticales_hei: "integer",
                -mensurations_verticales_hauteur_ramale: "integer",
                -mensurations_verticales_ena_xipm: "integer",
                -papport_dento_squellettes_6ptv: "integer",
                -rapport_dento_squelletique_if: "integer",
                -rapport_dento_squellettes_im: "integer",
                -rapport_dento_squellettes_ia_oo_distance: "integer",
                -rapport_dento_squellettes_ia_po_angle: "integer",
                -rapport_dento_squellettes_ia_po_distance: "integer",
                -rapport_dento_dentaire_ii: "integer",
                -esthetique_ls_ligne_e: "integer",
                -esthetique_li_ligne_e: "integer",
                -esthetique_angle_z: "integer"
            )        
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'examenFonction collection',
        method: 'POST',
        route: '/odf/examenFonction',
        request: `
            (
                -patient_id: "string" !,
                -ventilation: 'string',
                -daeglutition: 'string',
                -mastication: 'string',
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
                -incisive_vertical:"string" @< >
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
        title: 'ineterprationRadiologicParo collection',
        method: 'POST',
        route: '/odf/ineterprationRadiologicParo',
        request: `
            (
                -bases_osseuses: "string",
                -sinus_maxilllaires: "string",
                -articulation_temporo_mandibulaire: "string",
                -fosses_nasales: "string",
                -germes: "string",
                -etat_couronnes: "string",
                -etat_racines: "string",
                -edification_racines_complete: "string",
                -edification_racines_terminal: "string",
                -medification_racines_moyenne: "string",
                -edification_racines_debutante: "string",
                -rhizalyse_debutante: "string",
                -rhizalyse_moyenne: "string",
                -rhizalyse_terminal: "string",
                -signe_DDM: "string"
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
