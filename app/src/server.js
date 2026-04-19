const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
    res.json({
        system: "Mega DevOps Platform",
        status: "Active",
        cloud: "AWS ap-south-1",
        version: "1.0.0"
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`DevOps Platform Server is running on port ${PORT}`);
});