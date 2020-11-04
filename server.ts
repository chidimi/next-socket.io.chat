const app = require('express')()
const server = require('http').createServer(app)
const options = {}
const io = require('socket.io')(server, options)

io.on('connection', socket => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })

})

server.listen(3000)