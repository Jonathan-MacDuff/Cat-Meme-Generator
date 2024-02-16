
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

// Enable CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Adjust this to your needs for security
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static('public'));

app.get('/getInsult', async (req, res) => {
    try {
        const insultUrl = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
        const response = await fetch(insultUrl);
        const data = await response.json();
        res.json({ insult: data.insult });
    } catch (error) {
        console.error('Error fetching insult:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/getAffirmation', async (req, res) => {
    try {
        const affirmationUrl = 'https://www.affirmations.dev/';
        const response = await fetch(affirmationUrl);
        const data = await response.json();
        res.json({ affirmation: data.affirmation });
    } catch (error) {
        console.error('Error fetching affirmation:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});