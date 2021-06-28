export default [
    {
        title: 'moulage collection',
        method: 'POST',
        route: '/odf/moulage',
        request: `
            (
                -patient_id: "string" !,
                -maxillaire_forme: "string",
                -maxillaire_symetrie: "string",
                -maxillaire_profondeur_voute: "string",
                -maxillaire_malposition: "string",
                -maxillaire_ddm: "integer",
                -maxillaire_indice_ponte_D4G4: "integer",
                -maxillaire_indice_ponte_D6G6: "integer",
                -maxillaire_indice_doumange: "integer",
                -mandubule_forme: "string",
                -mandubule_symetrie: "string",
                -mandubule_malposition: "string",
                -mandubule_indice_pont_D4G4: "integer",
                -mandubule_indice_pont_D6G6: "integer"
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
        title: 'anemnese collection',
        method: 'POST',
        route: '/odf/anemnese',
        request: `
            (
                -patient_id: "string" !,
                -motif_consultation: "arrayList" ! @< fonctionnele, esthetique, douleure, [anything] >,
                -antecedente_odf_duree: "string",
                -antecedente_odf_type: "string",
                -tics_habitude: "string"
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
        route: '/odf/diagnosticTraitement',
        request: `
            (
                -patient_id: "string" !,
                -dp_class_squelettique: "string" ! @< cl1, cl2, cl3 >,
                -dp_forme_clinique: "string" !,
                -dp_typologie_faciale: "string" ! @< open_bite, normo_bite, deep_bite >,
                -dp_direction_croissance_faciale: "string" ! @< anterieur, posterieur, moyenne >,
                -dp_direction_croissance_mandibulaire: "string" ! @< anterieur, posterieur, moyenne >,
                -dp_anomalies_associees: "string" !,
                -diagnostic_etiologique: "string" !,
                -diagnostic_differentiel: "string" !,
                -plan_trt_objective_squeletique: "string" !,
                -plan_trt_objective_fonctionnels: "string" !,
                -plan_trt_objective_occlusaux: "string" !,
                -plan_trt_objective_esthetiques: "string" !,
                -plan_trt_principes_moyens: "string" !,
                -plan_trt_contension : "string" !,
                -plan_trt_pronostic: "string" !
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
        title: 'endobuccal collection',
        method: 'POST',
        route: '/odf/endobuccal',
        request: `
            (
                -patient_id: "string" !,
                -hygien_bucaux_dentaire: "string" ! @< mauvais, moyenne, bon >,
                -probleme_paro: "string" @< oui, no >,
                -langue_volume: "string",
                -langue_situation: "string",
                -langue_frien_linguale: "string",
                -age_dentaire: "integer",
                -satde_dentitin: "string",
                -chemin_fermeture: "string"
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
        title: 'examenFonction collections',
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
