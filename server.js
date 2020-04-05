const express =require('express');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');

const items = require('./back-end/routes/api/items');

const app = express();

app.use(bodyParser.json());

const db = require('./back-end/config/keys').mongoURI;

mongoose
    .connect(db,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use('/api/items', items );
app.use('/api/card', require('./back-end/routes/api/card.routes'))
app.use('/api/item', require('./back-end/routes/api/card.items.routes'))

const port =process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));