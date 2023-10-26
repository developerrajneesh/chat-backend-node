const mongoose = require('mongoose');

const url = `mongodb+srv://developerrajneeshshukla:YTbwccj0vq5eao2M@cluster0.iqphbir.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))