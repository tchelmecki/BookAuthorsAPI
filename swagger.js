const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node JS API Project for mongodb',
            version: '1.0.0'
        },
        servers:[
            {
                url: 'http://localhost:3000/'
            }
        ]
    },
    apis: ['./routes/*Book.js']
}

const swaggerSpec = swaggerJSDoc(options);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = { swaggerSpec, swaggerUi };