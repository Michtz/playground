'use client';

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface ChatMessage {
  message: string;
  timestamp: number;
}

const Chat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const initSocket = async () => {
      await fetch('/api/socket');
      const newSocket = io({
        path: '/api/socket/io',
      });

      newSocket.on('connect', () => {
        console.log('Connected to Socket.IO');
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    };

    initSocket();
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('chat message', (msg: ChatMessage) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, [socket]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && socket) {
      const messageData: ChatMessage = {
        message: message.trim(),
        timestamp: Date.now(),
      };
      socket.emit('chat message', messageData);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-2xl mx-auto border rounded-lg">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2 p-2 bg-gray-100 rounded">
            <p className="text-gray-800">{msg.message}</p>
            <span className="text-xs text-gray-500">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-3 py-2 border rounded"
            placeholder="Schreibe eine Nachricht..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Senden
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
