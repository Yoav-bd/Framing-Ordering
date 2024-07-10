import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/proxy', async (req, res) => {
    try {
        const response = await fetch('https://api.monday.com/v2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM4MTEzNjM0OSwiYWFpIjoxMSwidWlkIjo2MTI1MzU0MCwiaWFkIjoiMjAyNC0wNy0wN1QwNzowNjoyNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTU5NjkyNCwicmduIjoidXNlMSJ9.tSTtRMuZt05ZCBDTVg5H289Esi7JtUZe1IxJXbdgMrM' // Replace with your integration API token
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
