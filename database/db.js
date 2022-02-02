const mongoose = require('mongoose');

  mongoose.connect('mongodb+srv://root:root@cluster0.t7znx.mongodb.net/ProyectoFinalWeb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

