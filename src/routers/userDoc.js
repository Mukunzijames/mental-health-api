
const createUser = {
    tags: ["USER"],
    description: "REGISTER AND LOG IN TO USER",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        Names: {
                            type: "string",
                            example: "paccy"
                        },
                        email: {
                            type: "string",
                            example: "paccy@gmail.com"
                        },
                        password: {
                            type: "string",
                            example: "paccy"
                        },
                       
                        phoneNumber: {
                            type: "string",
                            example: "+25078884884"
                        },
                        
                        Gender: {
                            type: "string",
                            example:"male"

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




const GetAlluserExits = {
    tags: ["USER"],
    description: "this API it for getting all the users exits in database no need of log in!",
    security: [{
        token: []
    }],
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



const userRegDoc = {
    "/api/user/register": {
        post: createUser
    },
    "/api/user/all":{
        get: GetAlluserExits
    }

};

export default userRegDoc;