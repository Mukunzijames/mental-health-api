import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import TherapistRegDoc from "../routers/therapistDoc"

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
            
        },
      },
      apis: ['../routes/**/*.js'],

};

const swaggerSpec = swaggerJsDoc(options)

const swaggerDocumention = (app) =>{
    app.use("/swagger",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
}

export default swaggerDocumention;