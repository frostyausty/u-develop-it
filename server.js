const express = require('express');
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();

//Grabs index file from apiRoutes
const apiRoutes = require('./routes/apiRoutes');

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
    //starts express.js server on port 3001
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
