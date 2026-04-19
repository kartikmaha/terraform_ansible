const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Pathing logic: __dirname is /app/src, so we go up to /app then down to /public
const publicPath = path.join(__dirname, '..', 'public');

// Serve static files
app.use(express.static(publicPath));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});