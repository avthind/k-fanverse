require('dotenv').config();
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
