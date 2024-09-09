const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Charan_sai:darling_242726@cluster0.tr74xjt.mongodb.net/To-do-list', {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:',err));

const taskRoutes = require('./routes/Task_Router');
app.use('/api/task', taskRoutes);

const Port = process.env.Port || 4000;
app.listen(Port, () => console.log(`Server running on port ${Port}`));
