require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/contact', contactRoutes);

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/teja_portfolio')
  .then(() => app.listen(port, () => console.log(`API listening on ${port}`)))
  .catch(error => { console.error('MongoDB connection failed:', error.message); process.exit(1); });
