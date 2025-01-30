import { Server as NetServer } from 'http';
import { NextRequest } from 'next/server';
import { Server as ServerIO } from 'socket.io';

export const dynamic = 'force-dynamic';

if (!global.io) {
  global.io = new ServerIO(global.server);
}

export async function GET(req: NextRequest) {
  if (!global.io) {
    console.log('Socket.io server starting...');
    global.io = new ServerIO(global.server, {
      path: '/api/socket/io',
      addTrailingSlash: false,
    });

    global.io.on('connection', (socket) => {
      console.log('Client connected');

      socket.on('chat message', (msg) => {
        global.io.emit('chat message', msg);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

  return new Response('Socket.io server running');
}
