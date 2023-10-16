import mongoose from 'mongose';

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log('Connected do DB'))
.catch((error)=>console.log(error));