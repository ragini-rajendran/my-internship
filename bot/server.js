const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();
console.log('API Key from env:', process.env.GEMINI_API_KEY);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

const geminiApiKey = process.env.GEMINI_API_KEY;
const geminiApiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDawyNsDi8mPxmAHJPccmuXH6imDU5F_3U";

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!geminiApiKey) {
        console.error('GEMINI_API_KEY environment variable not set.');
        return res.status(500).json({ error: 'Internal server error' });
    }

    try {
        const response = await fetch(geminiApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userMessage }] }],
            }),
        });

        if (!response.ok) {
            console.error('Gemini API error:', response.status, response.statusText);
            const errorData = await response.json();
            console.error('Gemini API error details:', errorData);
            return res.status(500).json({ error: 'Error communicating with Gemini API' });
        }

        const data = await response.json();
        let botResponse = '';
        if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
            botResponse = data.candidates[0].content.parts[0].text;
        } else {
            botResponse = 'Sorry, I couldn\'t get a response from the AI.';
        }

        res.json({ response: botResponse });

    } catch (error) {
        console.error('Error calling Gemini API:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});