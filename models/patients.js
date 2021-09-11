export default [
    {
        title: 'Create/Add a new Patient',
        method: 'POST',
        route: '/patients',
        request: `
            (
                -first_name: "string" !
                -last_name: "string" !
                -gender: "string" ! @< male, female >
                -age: "integer" !
                -address: "string"
                -phone_number: "integer"
                -email: "string"
                -marital_status: "string" @< single, married >
                -job: "string"
                -specialty_access: "arrayList" @< OCE, ODF, PARO, PROTHESE, PCB >
                -appointment: "date"
            )    
        `,
        response: `
            {
                -data: {
                    --patient: {
                        ---_id: "string"
                        ---user_id: "string" !
                        ---first_name: "string" !
                        ---last_name: "string" !
                        ---gender: "string" !
                        ---age: "integer" !
                        ---address: "string"
                        ---phone_number: "integer"
                        ---email: "string"
                        ---marital_status: "string"
                        ---job: "string"
                        ---specialty_access: "arrayList"
                        ---appointment: "date"
                        ---date_of_modification: "date"
                        ---date_of_creation: "date"
                        ---__v: "integer"
                    --}
                -}
            }
        `,
        headers: `
        *Request Headers*
            -authToken: "HS256_bearer_token" !
            -accept: "application/json"
            -contentType: "application/json"
        `,
        specification: `
            *specialty_access*
                this options are meant to allow only the selected service
                to access and see what is in the patient document.
        `
    },
    {
        title: 'return/get all the user patients',
        method: 'GET',
        route: '/patients',
        response: `
            {
                -data: {
                    --patients: [
                        ---{
                            ----_id: "string"
                            ----user_id: "string" !
                            ----first_name: "string" !
                            ----last_name: "string" !
                            ----gender: "string" !
                            ----age: "integer" !
                            ----address: "string"
                            ----phone_number: "integer"
                            ----email: "string"
                            ----marital_status: "string"
                            ----job: "string"
                            ----specialty_access: "arrayList"
                            ----appointment: "date"
                            ----date_of_modification: "date"
                            ----date_of_creation: "date"
                            ----__v: "integer"
                        ---},
                        ---{ .... }
                    --]
                -}
            }
        `,
        headers: `
        *Request Headers*
            -authToken: "HS256_bearer_token" !
            -accept: "application/json"
            -contentType: "application/json"
        `,
        specification: `
            *specialty_access*
                this options are meant to allow only the selected service
                to access and see what is in the patient document.
        `
    }
]
