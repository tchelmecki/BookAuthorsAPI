const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AuthorBook = require('./models/userModel');
//routes
const deleteBook = require("./routes/deleteBook.js");
const showBook = require("./routes/getBook.js");
const editBook = require("./routes/editBook.js");
const addBook = require("./routes/addBook.js");
//swagger
const swagger = require('./swagger');
//graphql
const { graphqlHTTP } = require('express-graphql');
const graphql = require('./graphql')

app.use('/graphql', graphqlHTTP({
    schema: graphql.schema,
    rootValue: graphql.root,
    graphiql: true,
}));


//app
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); 
app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.swaggerSpec));

//routes app use
app.use("/", deleteBook);
app.use("/", showBook);
app.use("/", editBook);
app.use("/", addBook);


const url = "mongodb://localhost:27017";

async function connectToDatabase() {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Database connection error:', error);
    }
}



connectToDatabase();

