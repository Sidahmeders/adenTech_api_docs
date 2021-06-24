export default [
    {
        title: 'SignIn/Get a Single User',
        method: 'POST',
        route: '/users/login',
        request: `
            (
                -email: "string" !,
                -password: "string" !
            )
        `,
        response: `
            {
                -token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                -data: {
                    --user: {
                        ---_id: "string",
                        ---patients_id: "arrayList",
                        ---first_name: "string",
                        ---last_name: "string",
                        ---birth_date: "date",
                        ---email: "string",
                        ---profile_image: "buffer",
                        ---phone_number: "integer",
                        ---gender: "string",
                        ---faculty: "string",
                        ---country: "string",
                        ---year_of_study: "integer",
                        ---grade: "string",
                        ---specialty: "string",
                        ---role: "string"
                    --}
                -}
            }
        `
    },
    {
        title: 'SignUp/Create a New User',
        method: 'POST',
        route: '/users/register',
        request: `
            (
                -first_name: "string" !,
                -last_name: "string" !,
                -birth_date: "date" !,
                -email: "string" !,
                -password: "string" !,
                -profile_image: "buffer" !,
                -identity_card: "buffer" !,
                -phone_number: "integer",
                -gender: "string" ! [options]< male, female >,
                -faculty: "string" !,
                -country: "string",
                -year_of_study: "integer" < 1st, 2nd, 3rd, 4th, 5th, 6th >,
                -grade: "string" [options] < student, resident, assistant, master_assistant, professor >,
                -specialty: "string" [options]< OCE, ODF, PARO, PROTHESE, PCB >
            )
        `,
        response: `
            {
                -token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                -data: {
                    --user: {
                        ---_id: "string",
                        ---patients_id: "arrayList",
                        ---first_name: "string",
                        ---last_name: "string", 
                        ---birth_date: "date",
                        ---email: "string",
                        ---profile_image: "buffer",
                        ---phone_number: "integer"
                        ---gender: "string",
                        ---faculty: "string",
                        ---country: "string",
                        ---year_of_study: "integer",
                        ---grade: "string",
                        ---specialty: "string",
                        ---role: "string" [options]< _unAuthorized, student, professor >
                    --}
                -}
            }
        `
    }
]
