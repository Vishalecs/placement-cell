const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://vishalecs:Vishal123321@cluster0.ded7prj.mongodb.net/cell', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
