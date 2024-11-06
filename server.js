const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');  // Serve the HTML form
});
//Keep the data after submitted
app.post('/submit-form', (req, res) => {
    //Get the data from request
    const { username, email } = req.body;  // Extract username and email from the request body
    console.log('Submitted Data:', { username, email });

    // Respond to user
    res.json({
        message: 'Submitted!' 
    });
});
//Starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
