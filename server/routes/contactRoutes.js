const router = require('express').Router();
const Contact = require('../models/Contact');
router.post('/', async (req, res) => {
  try { const contact = await Contact.create(req.body); res.status(201).json({ id: contact.id, message: 'Thanks — your message was received.' }); }
  catch { res.status(400).json({ message: 'Please provide a name, email, and message.' }); }
});
module.exports = router;
