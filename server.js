const  express = require('express');
const https = require('https');
const app = express();
const server = https.createServer({}, app);
const routes = require('./routes/routes');
const cors = require('cors');
const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {

res.send("Working");

});



app.use(express.json());
app.use(cors());
app.use('/app', routes);


app.listen(PORT, () => {
    console.log('server started running at ' + PORT);
})

