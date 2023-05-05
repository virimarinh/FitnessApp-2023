require('dotenv').config()
const express = require('express')
const path = require('path');
const exercises = require('./controllers/exercises')
const users = require('./controllers/users')
const { requireLogin, parseAuthorizationHeader } = require('./middleware/authorization')
const app = express()
const { MongoClient } = require('mongodb');
const url = process.env.MONGO_URL;

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

//Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))

    //CORS
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
        // Male sure OPTIONS request are always allowed
        // That way pre-flight requests don't fail
        if(req.method === 'OPTIONS') {
            return res.status(200).send({})
        }
        next()
    })

    .use(parseAuthorizationHeader)


// Actions
app 
    .get('/api/v1', (req, res) => {
        res.send('Hello World! From Express')
    })
    .use('/api/v1/exercises', exercises)
    .use('/api/v1/users', users)

// Catch All
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

// Error Handling
app
    .use((err, req, res, next) => {
        const msg = {
            status: err.code || 500,
            error: err.message || 'Internal Server Error',
            isSuccess: false
        }
        res.status(msg.status).json(msg)
    })


console.log('1: About to start server')

app.post('/api/v1/users/add', async (req, res) => {
    try {
      const { firstName, lastName, email, password, handle } = req.body;
  
      const client = await MongoClient.connect(url, { useUnifiedTopology: true });
      const db = client.db('myDatabase');
  
      // Insert the user data into the "users" collection
      const result = await db.collection('users').insertOne({
        name: `${firstName} ${lastName}`,
        email,
        password,
        handle,
      });
  
      // Close the database connection
      await client.close();

      res.status(200).json({ message: 'User created successfully!' });
  } catch (err) {
    console.error(err);

    // Add this line to print out the response that the server is sending back
    console.log(res);

    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => 
  console.log(`2: Server running at http://${hostname}:${port}/`)
);

console.log('3: Asked server to start')