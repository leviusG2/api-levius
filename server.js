const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRouter = require('./routes/user')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000

mongoose.connect('mongodb+srv://Levius810:TVgdomSNt9OXKfC2@leviushrm.lyiej.mongodb.net/CRUD?retryWrites=true&w=majority', (err) => {
    if (err) throw err
    console.log('Database is connected!')
});

app.use('/api', userRouter)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});
