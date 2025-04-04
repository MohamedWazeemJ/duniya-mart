import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Phone } from 'lucide-react';

export function ChatPage() {
  const { sellerId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    // Placeholder messages
    {
      id: 1,
      text: 'Hello! I am interested in your products.',
      sender: 'buyer',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: 2,
      text: 'Hi! Thank you for your interest. How can I help you today?',
      sender: 'seller',
      timestamp: new Date(Date.now() - 3500000).toISOString(),
    },
  ]);

  // Placeholder seller data
  const seller = {
    id: sellerId,
    name: 'Royal Foods Wholesale',
    avatar: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=100',
    online: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add the new message
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: message,
        sender: 'buyer',
        timestamp: new Date().toISOString(),
      },
    ]);

    // Clear the input
    setMessage('');

    // Simulate seller response after 1 second
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: 'Thank you for your message. I will get back to you shortly.',
          sender: 'seller',
          timestamp: new Date().toISOString(),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Chat Header */}
        <div className="bg-green-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={seller.avatar}
              alt={seller.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <div>
              <h2 className="font-semibold text-lg">{seller.name}</h2>
              <p className="text-sm flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${seller.online ? 'bg-green-300' : 'bg-gray-300'}`} />
                {seller.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <button className="p-2 hover:bg-green-700 rounded-full transition-colors">
            <Phone className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.sender === 'buyer'
                    ? 'bg-green-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>
                <p className="text-xs mt-1 opacity-75">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 