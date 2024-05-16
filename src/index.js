import dotenv from 'dotenv';
import connectionDB from './db/dbConnection.js';
import { app } from './app.js';

dotenv.config({
    path: './env',
});

const PORT = process.env.PORT || 8000


connectionDB()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server is running on port: ${PORT}`);
        } )
    })
    .catch((error) => {console.log("\ndatabase connection error",error);});
