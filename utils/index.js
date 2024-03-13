require('dotenv').config();
const express = require("express");
const cors = require('cors')
const ProfileRouter = require('./routers/Profile/ProfileRouter');
const { logger } = require('./middleware/logger');
const app = express();

//middleware
app.use(cors())
app.use(logger)

// api/v1
app.use('/api', ProfileRouter)

//listen 
app.listen(process.env.PORT, ()=> console.log(`server started.....\nhttp://localhost:${process.env.PORT}`))