import next from 'next'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { Message } from '@/types'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const httpServer = createServer(handler)
  const io = new Server(httpServer)

  io.on('connection', (socket) => {
    socket.on('message', (message: Message) => {
      socket.broadcast.emit('message', message)
    })
  })

  httpServer.listen(port)
})
