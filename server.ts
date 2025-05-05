import next from 'next'
import { createServer } from 'http'
import { Server } from 'socket.io'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const httpServer = createServer(handler)
  const io = new Server(httpServer)

  io.on('connection', (socket) => {
    socket.on('joinRoom', (roomId) => {
      socket.join(roomId)
      socket.data.roomId = roomId
    })
    socket.on('message', (message) => {
      const { roomId } = socket.data
      socket.broadcast.to(roomId).emit('message', message)
    })
  })

  httpServer.listen(port)
})
