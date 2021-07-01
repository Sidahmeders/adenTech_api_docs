export default [
    {
        title: 'ongoing treatment OCE',
        method: 'POST',
        route: '/ongoing-treatments/oce',
        request: `
            -tooth-number: "integer" ! @< 11, 12, ..., 47, 47 >,
            -
        `,
        response: ``
    }
]
