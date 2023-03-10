
const forgetDOc = {
    tags: ["AUTHENTICATION"],
    description: "REGISTER ",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        
                        email: {
                            type: "string",
                            example: "mashami@yopmail.com"
                        },
                    },
                },
            },
        },
    },
    responses: {
        200: {
            description: "OK",

            content: {
                "application/json": {
                    Schema: {
                        type: "object",
                        example: {
                            count: 0,
                            user: [],
                        },
                    },
                },
            },
        },
    },
}

const forget = {
    "/api/auth/forget": {
        post: forgetDOc
    },

};
export default forget;