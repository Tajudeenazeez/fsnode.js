const fetch = require('node-fetch');
let profile = fetch('https://jsonplaceholder.typicode.com/post')
  .then(response => response.json())
  .then(json => write(json));
// let profile = {user:'name', age:23};

const dataa = JSON.stringify(profile);
//request a server
const {createServer} = require("http");

//request a file system
const fs = require('fs');
//const { stringify } = require('node:querystring');

//write the json to post.json
fs.writeFile('result/post.json', dataa, 'utf8', function(error){
    if(error) {
        console.log('failed to write file: ' + error)
    } else {
        console.log('successful');
    }
})

// create a listening port
const port = 8000;


//make a call to the server

const server = createServer(function(request, response){
response.write('hello');
response.end();
});

// listen thru the created port
server.listen(port, function(error) {
if(error) {
    console.log('Server failed', + error)
} else {
    console.log('listening on port', + port)
}
});
