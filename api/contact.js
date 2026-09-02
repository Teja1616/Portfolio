const mongoose = require('mongoose');

let connected = false;
const Contact = mongoose.models.Contact || mongoose.model('Contact', new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
}));

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  if (!process.env.MONGODB_URI) return res.status(503).json({ message: 'Contact service is not configured yet.' });
  try {
    if (!connected) { await mongoose.connect(process.env.MONGODB_URI); connected = true; }
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) return res.status(400).json({ message: 'Name, email, and message are required.' });
    await Contact.create({ name, email, message });
    return res.status(201).json({ message: 'Thanks — your message was received.' });
  } catch (error) { return res.status(500).json({ message: 'Unable to send your message right now.' }); }
};
