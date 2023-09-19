var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//var dbUrl = 'mongodb://amkurian:amkurian1@ds257981.mlab.com:57981/simple-chat'

app.get('/messages', (req, res) => {
io.emit('message', req.body);
  
})


app.get('/messages/:user', (req, res) => {
io.emit('message', req.body);
  
})


app.post('/messages', async (req, res) => {
io.emit('message', req.body);
  
})



io.on('connection', () =>{
  console.log('a user is connected')
})

var server = http.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});
