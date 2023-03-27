
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

const createAppointment = {
    tags: ["USER"],
    description: "create Appointment",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        Names: {
                            type: "String",
                            example: "paccy"
                        },
                        email: {
                            type: "String",
                            example: "paccy@gmail.com"
                        },
                        password: {
                            type: "String",
                            example: "paccy"
                        },
                       
                        phoneNumber: {
                            type: "String",
                            example: "+25078884884"
                        },
                        
                        Date: {
                            type: "String",
                            example:"10-03-2023"

                        },
                        time:{
                            type:"String",
                            example:"T07:30 PM"
                        },
                        reason:{
                             type:"String",
                             example:"reason"
                        },
                        specialty:{
                            type:"String",
                            example:"specialty"
                        },
                        availability:{
                            type:"String",
                            example:"availability"
                        },
                        paymentMethod:{
                            type:"String",
                            example:"card!momo"
                        },
                        paymentAmount:{
                            type:"String",
                            example:"money"
                        },
                        confirmationInfo:{
                            type:"String",
                            example:"receipt"
                        },
                        appointmentStatus:{
                            type:"string",
                            example:"status"
                        }
                        
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




const userRegDoc = {
    "/api/user/register": {
        post: createUser
    },
    "/api/user/all":{
        get: GetAlluserExits
    },
     "/api/user/Appointment":{
         post: createAppointment
 }

};

export default userRegDoc;