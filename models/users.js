export default [
    {
        title: 'SignIn/Get a Single User',
        method: 'POST',
        route: '/users/login',
        request: `
            (
                -email: "string" !
                -password: "string" !
            )
        `,
        response: `
            {
                -token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                -data: {
                    --user: {
                        ---_id: "string"
                        ---patients_id: "arrayList"
                        ---first_name: "string"
                        ---last_name: "string"
                        ---birth_date: "date"
                        ---email: "string"
                        ---profile_image: "buffer"
                        ---phone_number: "integer"
                        ---gender: "string"
                        ---faculty: "string"
                        ---country: "string"
                        ---year_of_study: "integer"
                        ---grade: "string"
                        ---specialty: "string"
                        ---role: "string"
                        ---date_of_modification: "date"
                        ---date_of_creation: "date"
                        ---__v: "integer"
                    --}
                -}
            }
        `,
        headers: `
            *Response Headers*
                -authToken: "HS256_bearer_token" 
        `,
        description: `
            *role*
                -_unAuthorized: can't create/update/delete new patients or patients record
                -_student: can create/update new patients and patients record
                -_assistant _professor: can create/update new patients and patients record, plus some related utilities based on specialty (odf_chart, cephalometric_chart, etc...)

            *__V*
                -# this property stands for _version_ and whenever you update the user record this prop will increase by one(1)
        `
    },
    {
        title: 'SignUp/Create a New User',
        method: 'POST',
        route: '/users/register',
        request: `
            (
                -first_name: "string" !
                -last_name: "string" !
                -birth_date: "date" !
                -email: "string" !
                -password: "string" !
                -profile_image: "buffer" !
                -identity_card: "buffer" !
                -phone_number: "integer"
                -gender: "string" ! @< male, female >
                -faculty: "string" !
                -country: "string"
                -year_of_study: "integer" @< 1st, 2nd, 3rd, 4th, 5th, 6th >
                -grade: "string" @ < student, resident, assistant, master_assistant, professor >
                -specialty: "string" @< OCE, ODF, PARO, PROTHESE, PCB >
            )
        `,
        response: `
            {
                -token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                -data: {
                    --user: {
                        ---_id: "string"
                        ---patients_id: "arrayList"
                        ---first_name: "string"
                        ---last_name: "string"
                        ---birth_date: "date"
                        ---email: "string"
                        ---profile_image: "buffer"
                        ---phone_number: "integer"
                        ---gender: "string"
                        ---faculty: "string"
                        ---country: "string"
                        ---year_of_study: "integer"
                        ---grade: "string"
                        ---specialty: "string"
                        ---role: "string" @< _unAuthorized, _student, _assistant, _professor >
                        ---date_of_modification: "date"
                        ---date_of_creation: "date"
                        ---__v: "integer"
                    --}
                -}
            }
        `,
        headers: `
            *Request Headers*
                -accept: "application/json, multipart/form data"
                -contentType: "multipart/form data"
                
            *Response Headers*
                -authToken: "HS256_bearer_token"
        `,
        description: `
            *role*
                -_unAuthorized: can't create/update/delete new patients or patients record
                -_student: can create/update new patients and patients record
                -_assistant _professor: can create/update new patients and patients record, plus some related utilities based on specialty (odf_chart, cephalometric_chart, etc...)

            *__V*
                -# this property stands for _version_ and whenever you update the user record this prop will increase by one(1)
        `
    },
    {
        title: 'Return/Get all the patients a user have',
        method: 'GET',
        route: '/users/patients',
        response: `
            {
                -data: {
                    --patients: [
                        ---{
                            ----_id: "string"
                            ----user_id: "string"
                            ----first_name: "string"
                            ----last_name: "string"
                            ----gender: "string"
                            ----age: "string"
                            ----address: "string"
                            ----phone_number: "string"
                            ----email: "string"
                            ----marital_status: "string"
                            ----job: "string"
                            ----specialty_access: "arrayList"
                            ----appointment: "date"
                        ---},
                        ---{ ... },
                        ---etc...
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
        description: `
            *specialty_access*
                -# this options are meant to allow only the selected service
                -to access and see what is in the patient document.
        `
    },
    {
        title: '[Add or Update] appointment to an existing patient OR [create a new patient] with appointment',
        method: 'POST',
        route: '/users/patients/appointment',
        request: `
            (
                -appointment: "date" !
                -first_name: "string"
                -last_name: "string"
                -hour: "string"
                -_color: "string"
                -comment: "string"
            )
        `,
        response: `
            {
                -data: {
                    --patient: {
                        ---_id: "string"
                        ---name: "string"
                        ---appointment: "date"
                        ---phone_number: "integer"
                        ---hour: "string"
                        ---_color: "string"
                        ---comment: "string"
                --}
                -}
            }
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    },
    {
        title: 'Return/Get all the appointments a user have',
        method: 'GET',
        route: '/users/patients/appointments',
        response: `
            {
                -data: {
                    --patients: [
                        ---{
                            ----_id: "string"
                            ---appointment: "date"
                            ---full_name: "string"
                            ---phone_number: "integer"
                            ---hour: "string"
                            ---_color: "string
                            ---comment: "string"
                        ---},
                        ---{ ... },
                        ---...
                    ---]
                -}
            }
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json"
                -contentType: "application/json"
        `
    }
]
