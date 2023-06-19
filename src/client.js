const axios = require('axios');


// Standard Get Requpest
// Bekommt json objekt zurück welches in data gespeichert ist
axios.get("http://localhost:3000/")
    .then((r) => {
        console.log("Standard GET Request für custom Status");
        console.log(r.data)
        console.log("\n");
    })

// Fragt den Status der anfrage ab, welche via .status() übergeben wird
axios.get("http://localhost:3000/")
    .then((r) => {
        console.log("Standard GET Request für REST Status");
        console.log(r.status)
        console.log("\n");
    })

// Get Anfrage mit übergebenen QUERY parametern
axios.get("http://localhost:3000/user?name=Arsch&age=25")
    .then((r) => {
        console.log("GET Request für QUERY parameter name und age");
        console.log(r.data);
        console.log("\n");
    });

// Get Anfrage mit übergebenen PARAMS parametern
axios.get("http://localhost:3000/user/1")
    .then((r) => {
        console.log("GET Request für PARAMS parameter userid");
        console.log(r.data);
        console.log("\n");
    });


// POST Anfrage mit übergebenen parametern welche in BODY stehen
axios.post("http://localhost:3000/", {
    name: "Dale",
    age: 20
}).then((r) => {
    console.log("POST Request für gesamten BODY eintrag -> JSON Object");
    console.log(r.data)
    console.log("\n");
})


axios.delete("http://localhost:3000/u?id=1")
    .then((r) => {
        console.log("DELETE Request für QUERY -> route /u?id=1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");
    })


axios.delete("http://localhost:3000/u/1")
    .then((r) => {
        console.log("DELETE Request für PARAMS -> route /u/1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");

    })

// Put und Patch ohne Body
axios.put("http://localhost:3000/u?id=5")
    .then((r) => {
        console.log("PUT Request für QUERY ohne body -> route /u?id=1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");
    })


axios.put("http://localhost:3000/u/5")
    .then((r) => {
        console.log("PUT Request für PARAMS ohne body -> route /u/1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");

    })

axios.patch("http://localhost:3000/u?id=10")
    .then((r) => {
        console.log("PATCH Request für QUERY ohne body -> route /u?id=1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");
    })


axios.patch("http://localhost:3000/u/10")
    .then((r) => {
        console.log("PATCH Request für PARAMS ohne body -> route /u/1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");

    })


// Put und Patch mit Body
axios.put("http://localhost:3000/ub?id=5", {
    newId: 6
})
    .then((r) => {
        console.log("PUT Request für QUERY mit body -> route /u?id=1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");
    })


axios.put("http://localhost:3000/ub/5", {
    newId: 6
})
    .then((r) => {
        console.log("PUT Request für PARAMS mit body -> route /u/1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");

    })

axios.patch("http://localhost:3000/ub?id=10", {
    newId: 11
})
    .then((r) => {
        console.log("PATCH Request für QUERY mit body -> route /u?id=1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");
    })


axios.patch("http://localhost:3000/ub/10", {
    newId: 11
})
    .then((r) => {
        console.log("PATCH Request für PARAMS mit body -> route /u/1 -> bekommt UserID");
        console.log(r.data)
        console.log("\n");

    })
