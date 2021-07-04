export default [
    {
        title: 'return/get all patients statistics that are common between specialties',
        method: 'GET',
        route: '/admin/patients/statistics/common',
        response: `
            -data: {
                --commonStat: {
                    ---specialty: { ... }
                    ---sex: { ... }
                    ---ages: { ... }
                    ---hygienBuccaul: { ... }
                    ---motifConsultation: { ... }
                --}
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -credentials: 'include' !

            *Response Headers*
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'return/get OCE patients statistics',
        method: 'GET',
        route: '/admin/patients/statistics/oce',
        response: `
            -data: {
                --oceStat: { 
                    ---calssification_de_black: { ... }
                    ---sit_sta: { ... }
                    ---dent_cousale: { ... }
                    ---dignostic_etiologique: { ... }
                    ---treatment: { ... }
                --}
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -credentials: 'include' !

            *Response Headers*
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'return/get ODF patients statistics',
        method: 'GET',
        route: '/admin/patients/statistics/odf',
        response: `
            -data: {
                --odfStat: {
                    ---dignostic_postive: { 
                        ----class_squelitique: { ... }, 
                        ----typologieFacial: { ... }
                    ---}
                    ---direction_de_craoissance: { 
                        ----facial: { ... }, 
                        ----mandibulaire: { ... }
                    ---}
                --}
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -credentials: 'include' !

            *Response Headers*
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'return/get PARO patients statistics',
        method: 'GET',
        route: '/admin/patients/statistics/--',
        response: `
            -data: {
                --
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -credentials: 'include' !

            *Response Headers*
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'return/get PROTHESE patients statistics',
        method: 'GET',
        route: '/admin/patients/statistics/prothese',
        response: `
            -data: {
                --protheseStat: {
                    ---calssification_de_limda: {
                        ----mandibule: { ... }
                        ----maxillaire: { ... }
                    ---}
                    ---classification_de_kinedy_aplegate: { ... }
                --}
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -credentials: 'include' !

            *Response Headers*
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'return/get PCB patients statistics',
        method: 'GET',
        route: '/admin/patients/statistics/--',
        response: `
            -data: {
                --
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -credentials: 'include' !

            *Response Headers*
                -accept: "application/json"
                -contentType: "application/json"
        `
    }
]
