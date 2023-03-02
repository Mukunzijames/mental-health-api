
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

const TherapistRegDoc = {
    "/api/therapist/register": {
        post: createTherapist
    },

};

export default TherapistRegDoc;