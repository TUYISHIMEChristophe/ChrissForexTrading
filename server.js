const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Sample trading signals endpoint
app.get('/api/trading-signals', (req, res) => {
    const signals = [
        { id: 1, currency: 'EUR/USD', signal: 'BUY', strength: 'High' },
        { id: 2, currency: 'GBP/USD', signal: 'SELL', strength: 'Medium' },
    ];
    res.json(signals);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
