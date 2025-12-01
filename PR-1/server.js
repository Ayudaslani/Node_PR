const http = require('http');
const fs = require('fs');
const server = http.createServer(
    (req, res) => {
        // let data = fs.readFileSync('./index.html', 'utf-8')
        // res.end(data);

        let filePath = " ";
        switch (req.url) {
            case '/':
                filePath = "./index.html"
                break;
            case '/about':
                filePath = "./about.html"
                break;
            case '/events':
                filePath = "./events.html"
                break;
            case '/contact':
                filePath = "./contact.html"
                break;
            default:
                filePath = "./not-found.html"
                break;
        }
        let data = fs.readFileSync(filePath, 'utf-8')
        res.end(data);
    }
);
server.listen(8000, () => {
    console.log('server start At http://localhost:8000');
})