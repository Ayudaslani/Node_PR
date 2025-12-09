const express = require('express');
const port = 9000;

const server = express();
server.set('view engine', 'ejs');

server.listen(port, (req, res) => {
    console.log(`server start at http://localhost:${port}`);
})



let data = [
    {
        id: "1",
        title: "Complete Node.js Assignment",
        description: "Finish CRUD operations in To-Do List project before Friday.",
        status: "in-progress",
        createdAt: "2025-12-01T09:30:00Z",
        updatedAt: "2025-12-03T14:45:00Z",
        dueDate: "2025-12-06T00:00:00Z",
        priority: "high"
    },
    {
        id: "2",
        title: "Buy groceries",
        description: "Milk, bread, vegetables, and fruits for the week.",
        status: "pending",
        createdAt: "2025-12-04T10:00:00Z",
        updatedAt: "2025-12-04T10:00:00Z",
        dueDate: "2025-12-05T18:00:00Z",
        priority: "medium"
    },
    {
        id: "3",
        title: "Read React documentation",
        description: "Understand useEffect and useContext for next project.",
        status: "completed",
        createdAt: "2025-11-30T08:00:00Z",
        updatedAt: "2025-12-02T12:20:00Z",
        dueDate: "2025-12-02T00:00:00Z",
        priority: "low"
    },
];

server.get('/', (req, res) => {
    return res.render('index', { data });
})

server.use(express.urlencoded());
server.post('/add-task', (req, res) => {
    data.push(req.body);
    return res.redirect('/');
})

server.get('/delete-task/:id', (req, res) => {
    data = data.filter(task => task.id != req.params.id);
    return res.redirect('/');
})

server.get('/edit-task/:id', (req, res) => {
    let record = data.find(data => data.id == req.params.id)
    return res.render('edittask', { data: record });
})

server.post('/update-task', (req, res) => {
    let { dataId } = req.query;
    let update = data.map(data => {
        if (data.id == dataId) {
            return {
                ...req.body,
                id: dataId
            }
        } else {
            return data;
        }
    })
    data = update;
    return res.redirect('/')
})



