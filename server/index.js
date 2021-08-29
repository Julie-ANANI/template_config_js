require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(cors());

app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});