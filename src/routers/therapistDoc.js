
const createTherapist = {
    tags: ["THERAPIST"],
    description: "REGISTER AND LOG IN TO USER",
    requestBody: {
        content: {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        Names: {
                            type: "string",
                            example: "mashami"
                        },
                        email: {
                            type: "string",
                            example: "mashami@gmail.com"
                        },
                        password: {
                            type: "string",
                            example: "mashami"
                        },

                        phoneNumber: {
                            type: "string",
                            example: "+25078884884"
                        },
                        'location[province]': {
                            type: "String",
                            example: "Kigali",
                        },

                        'location[district]': {
                            type: "String",
                            example: "Nyarugenge",
                        },
                        'location[street]': {
                            type: "String",
                            example: "Nyamirambo",
                        },
                        Gender: {
                            type: "string",
                            example: "mashami",
                            enum:
                                ["male",
                                    "female",
                                    "other"
                                ]

                        },
                        therapist_type: {
                            type: "string",
                            example: "",
                            enum: [
                                "Psychologist",
                                "Psychiatrist",
                                "Psychoanalyst",
                                "Psychiatric nurse",
                                "Psychotherapist",
                                "Mental health counselor",
                                "Family and marriage counselor",
                                "Addiction counselor"]
                        },
                        profile_picture: {
                            type: "file",
                            example: "upload Image"
                        },
                        licence_number: {
                            type: "string",
                            example: "mashami"
                        },

                        Skill: {
                            type: "string",
                            example: " consoring"
                        },
                        Degree: {
                            type: "file",
                            example: "upload Document"
                        },

                        Question1: {
                            type: "Boolean",
                            type: "Are you willing to undergo a background check?",
                            enum: ["true", "false"]
                        },
                        Question2: {
                            type: "Boolean",
                            type: "Are you familiar with our payment policies and fees?",
                            enum: ["true", "false"]
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

const createGroup = {
    tags: ["THERAPIST"],
    description: "REGISTER AND LOG IN TO USER",
    security: [{
        token: []
    }],

    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        groupName: {
                            type: "string",
                            example: "counselor group"
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


const searchTherapist = {
    tags: ["THERAPIST"],
    description: "SEARCH A THERAPIST ",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        Names: {
                            type: "string",
                            example: "mashami"
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

const searchAUser = {
    tags: ["USER"],
    description: "SEARCH A THERAPIST ",
    security:[{
        token :[]
    }],
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

const GetAllTherapistExits = {
    tags: ["THERAPIST"],
    description: "this API it for getting all the users exits in database no need of log in!",
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

const GetAllGroups = {
    tags: ["THERAPIST"],
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

const GetGroups = {
    tags: ["THERAPIST"],
    description: "this API it for getting all the users exits in database no need of log in!",

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
const asignUsertoGroup = {
    tags: ['THERAPIST'],
    description: "Update POST API it require you to generation a post-Id but will be for the owner and Admin",
    security:[{
        token :[]
    }],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of POST",
            type: "string",
            example: "63caaf3527b29e1d399896da"
        }
    ],
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
                    },
                },
            },
        },
    },
    responses: {
        201: {
            description: "OK",
            content: {
                "application/json": {
                    type: "object",
                    example: {
                        status: "success",
                        data: []
                    },
                },
            },
        },
    },
};


const GetUsers_in_group = {
    tags: ["THERAPIST"],
    description: "get users member of a group",
    description: "This Api generated for accessing a Post only by the post owner by using ID of the post",
    security:[{
        token :[]
    }],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of user",
            type: "string",
            example: "63e9227fc807f6e9217d955a"
        }
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    type: 'object',
                    example: {
                        status: "success",
                        data: []
                    },
                },
            },
        },
    },

};
const TherapistRegDoc = {
    "/api/therapist/register": {
        post: createTherapist
    },
    "/api/therapist/search": {
        post: searchTherapist
    },
    "/api/therapist/all": {
        get: GetAllTherapistExits
    },
    "/api/therapist/group/create": {
        post: createGroup
    },
    "/api/therapist/group/all": {
        get: GetAllGroups
    },
    "/api/therapist/group/groups": {
        get: GetGroups
    },
    "/api/therapist/group/asign/{id}":{
        patch: asignUsertoGroup
    
    },
    "/api/therapist/group/member/{id}":{
        get:GetUsers_in_group
    },
    "/api/therapist/search/users":{
        post:searchAUser
    },

};

export default TherapistRegDoc;