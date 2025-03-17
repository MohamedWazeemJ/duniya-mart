import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Image as ImageIcon } from 'lucide-react';

export function ChatWindow({ sellerId, sellerName }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'seller',
      text: 'Hello! How can I help you today?',
      timestamp: new Date(Date.now() - 3600000).toISOString()
    },
    {
      id: 2,
      sender: 'user',
      text: 'Hi, I\'m interested in your products',
      timestamp: new Date(Date.now() - 1800000).toISOString()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isAttaching, setIsAttaching] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'user',
        text: newMessage.trim(),
        timestamp: new Date().toISOString()
      }]);
      setNewMessage('');
    }
  };

  const handleAttachment = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle file upload logic here
      console.log('File selected:', file);
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">{sellerName}</h2>
        <p className="text-sm text-gray-600">Online</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Attachment Preview */}
      {isAttaching && (
        <div className="px-6 py-2 border-t">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <ImageIcon className="h-4 w-4" />
            <span>image.jpg</span>
          </div>
        </div>
      )}

      {/* Message Input */}
      <div className="px-6 py-4 border-t">
        <form onSubmit={handleSend} className="flex space-x-4">
          <button
            type="button"
            onClick={handleAttachment}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
          >
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*,.pdf,.doc,.docx"
          />
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
} 