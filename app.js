const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const app  = express();
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,     // ✅ use new URL parser
  useUnifiedTopology: true   // ✅ use the new Server Discovery and Monitoring engine
})
.then(function() {
  console.log("✅ Server connected to MongoDB Atlas");
})
.catch(function(err) {
  console.error("❌ Mongoose connection error:", err);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.render("index");
});



app.listen(process.env.PORT || 3001, process.env.IP || '0.0.0.0', function(){
    console.log("Express app is running...");
});