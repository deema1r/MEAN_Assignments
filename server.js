const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("Hello Express");
});
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/cats", function(request, response){
    response.render('cats');
})

app.get("/cars", function(request, response){
    response.render('cars');
})

app.get("/cars/new", function(request, response){
    response.render('form');
})