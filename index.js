//1 import json server
const jsonServer = require('json-server')

//2 create a server for media app using json-server
const MediaApp = jsonServer.create()

//3 create a middleware used by jsonserver
const middleware = jsonServer.defaults()

//4 set up routes for db.json
const route  = jsonServer.router('db.json')

//5 set up port for running server
const PORT = 3000 || process.env.PORT 

MediaApp.use(middleware)
MediaApp.use(route)

//run the server
MediaApp.listen(PORT,()=>{
    console.log("MediaApp server running on port " + PORT);
})