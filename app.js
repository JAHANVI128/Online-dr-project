const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

const userRoutes = require('./routes/UserRoutes');
const roleRoutes = require('./routes/RoleRoutes');
const drRoutes = require('./routes/DoctorRoutes');

app.use('/user',userRoutes);
app.use('/role',roleRoutes);
app.use('/doctor',drRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/online-dr",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

const PORT = 3001
app.listen(PORT,() => {
    console.log("server is running on port ",PORT);
})