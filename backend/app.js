const express = require('express')
const app = express()
const port = 3000
const  mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
var cors = require('cors');

app.use(cors());
MONGO_URI="mongodb+srv://irfan:ansari@irfan.buyc5.mongodb.net/"

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Running');
})

app.use(userRoutes);

async function connectDb(connectionString) {
    try {
        await mongoose.connect(connectionString);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

connectDb(MONGO_URI);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})