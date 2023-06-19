const express = require("express");
const app = express();

const PORT = 3000;

// Middleware die überprüft, ob Anfrage ankommt
app.use("/", (req, res, next) => {
    console.log("API Connected")
    next();
});

// Middleware um POST anfragen verarbeiten zu können
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Standard Get Endpoint welche ein json object (in .data gespeichert) zurückschickt und den status auf 200 setzt
app.get("/", (req, res) => {
    res.json({
        status: "Erfolg!",
        server: "OK"
    }).status(200)
})

// Get Endpoint welche ein json object zurückschickt und den status auf 200 setzt. Parameter werden von QUERY ausgelesen (STEHT IN DER URL)
app.get("/user", (req, res) => {
    res.json({
        name: req.query.name, 
        age: req.query.age
    }).status(200)
})


// Get Endpoint welche die userid aus den PARAMS zurückschickt
app.get("/user/:id", (req, res) => {
    res.json({
        userid: req.params.id
    })
});


// Post Endpoint welche die übergebenen Variablen im BODY zurückschickt und den status auf 200 setzt
app.post("/", (req, res) => {
    res.json({
        name: req.body?.name,
        age: req.body?.age
    }).status(200)
})

app.delete("/u/:id", (req, res) => {
    res.json({
        userid: req.params.id
    })
});

app.delete("/u", (req, res) => {
    res.json({
        userid: req.query.id
    })
});

// Put und Patch ohne Body
app.put("/u/:id", (req, res) => {
    res.json({
        userid: req.params.id
    })
});

app.put("/u", (req, res) => {
    res.json({
        userid: req.query.id
    })
});

app.patch("/u/:id", (req, res) => {
    res.json({
        userid: req.params.id
    })
});

app.patch("/u", (req, res) => {
    res.json({
        userid: req.query.id
    })
});


// Put und Patch mit Body
app.put("/ub/:id", (req, res) => {
    const {newId} = req.body;
    res.json({
        paramsId: req.params.id,
        bodyId: newId
    })
});

app.put("/ub", (req, res) => {
    const {newId} = req.body;
    res.json({
        queryId: req.query.id,
        bodyId: newId
    })
});

app.patch("/ub/:id", (req, res) => {
    const {newId} = req.body;
    res.json({
        paramsId: req.params.id,
        bodyId: newId
    })
});

app.patch("/ub", (req, res) => {
    const {newId} = req.body;
    res.json({
        queryId: req.query.id,
        bodyId: newId
    })
});

// Server hört auf Port 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

