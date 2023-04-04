import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './server/route.js';

const app = express(); 



app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Step 2 ------------------->
app.use('/', Routes);



const PORT = process.env.PORT || '4000'; 


mongoose.connect('mongodb+srv://user123:sX1WsbYrcS8eaBcK@cluster0.51384.mongodb.net/mango?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  }).then(() => { 
   
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})


