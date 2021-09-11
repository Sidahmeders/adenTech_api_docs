export default [
    {
        title: 'get/login the Admin User',
        method: 'POST',
        route: '/admin/users/login',
        request: `
            (
                -email: "string" !
                -password: "string" !
            )
        `,
        response: `
            -data: {
                --user: {
                    ---_id: "string"
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
                    ---role: "string" @< admin >
                    ---date_of_modification: "date"
                    ---date_of_creation: "date"
                    ---__v: "integer"
                --}
            -}
        `,
        headers: `
            *Request Headers || Response Headers*
                -accept: "application/json, multipart/form data"
                -contentType: "application/json, multipart/form data" !

            *Response Headers Cookie*
            -# this authToken is set from the server with the httpOnly Flag
                -authToken: "HS256_bearer_token"
                -HttpOnly_Cookie: true
                -SameSite: 'strict'
                -MaxAge: 1 day
                -Domain: 'https://adtech.com'
        `
    },
    {
        title: 'get/return all Users',
        method: 'GET',
        route: '/admin/users?limit=number',
        request: `
            *Query Paramater*
                -limit: 'integer'
                    # limit is the number of users you want returned on each request to the endpoint
                    # if the limit is undefined we will default to all the users in the database
        `,
        response: `
            -data: {
                --users: [
                    ---user: {
                        ----_id: "string"
                        ----patients_id: "arrayList"
                        ----first_name: "string"
                        ----last_name: "string"
                        ----birth_date: "date"
                        ----email: "string"
                        ----profile_image: "buffer"
                        ----phone_number: "integer"
                        ----gender: "string"
                        ----faculty: "string"
                        ----country: "string"
                        ----year_of_study: "integer"
                        ----grade: "string"
                        ----specialty: "string"
                        ----role: "string" @< _unAuthorized, _student, _assistant, _professor >
                    ---}
                --]
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json, multipart/form data"
                -contentType: "multipart/form data" !
                -credentials: 'include' !
        `,
        specification: `
            *role*
                -_unAuthorized: can't create/update/delete new patients or patients record
                -_student: can create/update new patients and patients record
                -_assistant _professor: can create/update new patients and patients record, plus some related utilities based on specialty (odf_chart, cephalometric_chart, etc...)
            
            *__V*
                -# this property stands for _version_ and whenever you update the user record this prop will increase by one(1)
        `
    },
    {
        title: 'add/create new Users',
        method: 'POST',
        route: '/admin/users',
        request: `
            (
                -_id: "string"
                -patients_id: "arrayList"
                -first_name: "string"
                -last_name: "string"
                -birth_date: "date"
                -email: "string"
                -profile_image: "buffer"
                -phone_number: "integer"
                -gender: "string" @< male, female >
                -faculty: "string"
                -country: "string"
                -year_of_study: "integer" @< 1st, 2nd, 3rd, 4th, 5th, 6th >
                -grade: "string" @ < student, resident, assistant, master_assistant, professor >
                -specialty: "string" @< OCE, ODF, PARO, PROTHESE, PCB >
                -role: "string" @< _unAuthorized, _student, _assistant, _professor >
            )
        `,
        response: `
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
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json, multipart/form data"
                -contentType: "multipart/form data" !
                -credentials: 'include' !
        `,
        specification: `
            *role*
                -_unAuthorized: can't create/update/delete new patients or patients record
                -_student: can create/update new patients and patients record
                -_assistant _professor: can create/update new patients and patients record, plus some related utilities based on specialty (odf_chart, cephalometric_chart, etc...)

            *__V*
                -# this property stands for _version_ and whenever you update the user record this prop will increase by one(1)
        `
    },
    {
        title: 'get/return unAuthorized Users',
        method: 'GET',
        route: '/admin/users/unAuthorized?limit=number',
        request: `
            *Query Paramater*
                -limit: 'integer'
                    # limit is the number oft access to new or unAuthorized Users users you want returned on each request to the endpoint
                    # if the limit is undefined we will default to all thet access to new or unAuthorized Users users in the database
        `,
        response: `
            -data: {
                --users: [
                    ---{
                        ----_id: "string"
                        ----patients_id: "arrayList"
                        ----first_name: "string"
                        ----last_name: "string"
                        ----birth_date: "date"
                        ----email: "string"
                        ----profile_image: "buffer"
                        ----phone_number: "integer"
                        ----gender: "string"
                        ----faculty: "string"
                        ----country: "string"
                        ----year_of_study: "integer"
                        ----grade: "string"
                        ----specialty: "string"
                        ----role: "string" @< _unAuthorized, _student, _assistant, _professor >
                    ---},
                    ---{ ... },
                    ---etc...
                --]
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json, multipart/form data"
                -contentType: "multipart/form data" !
                -credentials: 'include' !
        `
    },
    {
        title: 'return/search for some specific users',
        method: 'GET',
        route: '/admin/users/search?query={queryKey: queryValue}',
        request: `
            *Query Paramater*
                -queryKey: "string" @< first_name, last_name, email, specialty, year_of_study, grade >
                -queryValue: "string"
        `,
        response: `
            -data: {
                --users: [
                    ---{
                        ----_id: "string"
                        ----patients_id: "arrayList"
                        ----first_name: "string"
                        ----last_name: "string"
                        ----birth_date: "date"
                        ----email: "string"
                        ----profile_image: "buffer"
                        ----phone_number: "integer"
                        ----gender: "string"
                        ----faculty: "string"
                        ----country: "string"
                        ----year_of_study: "integer"
                        ----grade: "string"
                        ----specialty: "string"
                        ----role: "string" [options]< _unAuthorized, _student, _assistant, _professor >
                    ---},
                    ---{ ... },
                    ---etc...
                --]
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json, multipart/form data"
                -contentType: "multipart/form data" !
                -credentials: 'include' !
        `,
        specification: `
            *queryValue*
                -first_name _ last_name _ email: any string value can be valid as log as the [whole] OR [part] of the string exist in the database
                -specialty: @< OCE, ODF, PARO, PROTHESE, PCB >
                -year_of_study: @< 1st, 2end, 3rd, 4th, 5th, 6th >
                -grade: @< student, resident, assistant, master_assistant, professor >
        `
    },
    {
        title: 'update users account info',
        method: 'PUT',
        route: '/admin/users',
        request: `
            (
                -first_name: "string"
                -last_name: "string"
                -birth_date: "string"
                -phone_number: "integer"
                -gender: "string"
                -faculty: "string"
                -country: "string"
                -year_of_study: "integer"
                -grade: "string"
                -specialty: "string"
                -role: "string"
                -email: "string"
                -password: "string"
            )
        `,
        response: `
            -data: {
                --user: {
                    ---_id: "string"
                    ---first_name: "string"
                    ---last_name: "string"
                    ---birth_date: "string"
                    ---phone_number: "integer"
                    ---gender: "string"
                    ---faculty: "string"
                    ---country: "string"
                    ---year_of_study: "integer"
                    ---grade: "string"
                    ---specialty: "string"
                    ---role: "string"
                    ---email: "string"
                    ---date_of_modification: "date"
                    ---date_of_creation: "date"
                    ---patients_id: "arrayList"
                    ---__v: "integer"
                --}
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json, multipart/form data"
                -contentType: "multipart/form data" !
                -credentials: 'include' !
        `
    },
    {
        title: 'grant access to new/unAuthorized Users',
        method: 'PUT',
        route: '/admin/users/grantAccess',
        request: `
            *Query Paramater*
                -id: "string" !
                -garde: "string" !
        `,
        response: `
            -data: {
                --user_id: "string"
                --name: "string"
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json, multipart/form data"
                -contentType: "multipart/form data" !
                -credentials: 'include' !
        `
    },
    {
        title: 'delete/drop new/unAuthorized OR existing/old Users',
        method: 'DELETE',
        route: '/admin/users/dropUser?id=user_id',
        request: `
            *Query Paramater*
                -id: "string" !
        `,
        response: `
            -data: {
                --user_id: "string"
                --name: "string"
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json, multipart/form data"
                -contentType: "multipart/form data" !
                -credentials: 'include' !
        `
    },
    {
        title: 'search for users and thier patients',
        method: 'GET',
        route: '/admin/users/patients/search?query={queryKey: queryValue}',
        request: `
            *Query Paramater*
                -queryKey: "string" @< first_name, last_name, email, specialty, year_of_study, grade >
                -queryValue: "string"
        `,
        response: `
            -data: {
                --users: {
                    ---first_name: "string"
                    ---last_name: "string"
                    ---patients_id: "arrayList"
                    ---patients_names: "arrayList"
                    ---date_of_creation: "date"
                    ---date_of_modification: "date"
                --}
            -}
        `,
        headers: `
            *Request Headers*
                -authToken: "HS256_bearer_token" !
                -accept: "application/json, multipart/form data"
                -contentType: "multipart/form data" !
                -credentials: 'include' !
        `
    }
]
