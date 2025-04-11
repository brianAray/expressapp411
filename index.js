const express = require('express');
const app = express();
const PORT = 3000;

const version = "1";


app.get('/', (req, res) => {
    res.send(`<html>
                <body>
                    <div style="position: fixed; top:50%;left:50%;transform:translate(-50%, -50%)">
                        <h2>I have been changed</h2>
                        <p>test</p>
                        <img src="https://picsum.photos/400/400?random=1">
                    </div>
                </body>
    </html>`);

    console.log(`[Version ${version}]: New Request => http://localhost:${PORT}`+req.url);
})

app.listen(PORT, () => {
    console.log(`[Version ${version}]: Server listening on http://localhost:${PORT}`);
})

