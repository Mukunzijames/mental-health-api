import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import TherapistRegDoc from "../routers/therapistDoc"
import contactDoc from "../routers/ContactRouteDoc"
import userRegDoc from "../routers/userDoc"
const options= {
    definition: {
        openapi: '3.0.0',
        info: {
          version: '1.0.0',
          title: 'BLOG APIs',
          description: 'Blog apis configurations',
        },
        servers: [
          {
            url: 'http://localhost:5000/',
            description: 'Development server',
          },
          
          
        ],
        tags: [
          { name: 'THERAPIST', description: 'Therapist Routes' },
          { name: 'CONTACT', description: 'contact Routes' },
          {name: 'USER', description:'user routes'},
         
        ],
       
        components: {
          securitySchemes: {
            token:{
              type:'apiKey',
              scheme:'bearer',
              bearerFormat:'JWT',
              name:'token',
              in:'header'

            },

          },

        },
        paths: {
            ...TherapistRegDoc,
            ...contactDoc,
            ...userRegDoc
        },
      },
      apis: ['../routes/**/*.js'],

};

const swaggerSpec = swaggerJsDoc(options)

const swaggerDocumention = (app) =>{
    app.use("/swagger",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
}

export default swaggerDocumention;