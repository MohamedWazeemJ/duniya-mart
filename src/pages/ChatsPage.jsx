import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Send, MessageCircle } from 'lucide-react';

export function ChatsPage() {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');

  // Placeholder data - replace with actual API calls
  const chats = [
    {
      id: 1,
      seller: {
        id: 1,
        name: 'Royal Foods Wholesale',
        image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        verified: true,
      },
      lastMessage: 'Thank you for your order!',
      timestamp: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      seller: {
        id: 2,
        name: 'Spice Masters Trading',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        verified: true,
      },
      lastMessage: 'Your order has been shipped.',
      timestamp: '1 day ago',
      unread: false,
    },
    {
      id: 3,
      seller: {
        id: 3,
        name: 'Green Fields Trading',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        verified: true,
      },
      lastMessage: 'Would you like to place a bulk order?',
      timestamp: '2 days ago',
      unread: true,
    },
  ];

  const filteredChats = chats.filter(chat =>
    chat.seller.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // TODO: Implement message sending
      setMessageInput('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Messages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chat List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Chat List */}
            <div className="divide-y divide-gray-200">
              {filteredChats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`w-full p-4 flex items-start space-x-3 hover:bg-gray-50 ${
                    selectedChat?.id === chat.id ? 'bg-green-50' : ''
                  }`}
                >
                  <img
                    src={chat.seller.image}
                    alt={chat.seller.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-sm truncate">
                        {chat.seller.name}
                      </h3>
                      {chat.unread && (
                        <span className="bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          1
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {chat.lastMessage}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {chat.timestamp}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            {selectedChat ? (
              <div className="h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
                  <img
                    src={selectedChat.seller.image}
                    alt={selectedChat.seller.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{selectedChat.seller.name}</h3>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Placeholder messages - replace with actual messages */}
                  <div className="flex justify-end">
                    <div className="bg-green-500 text-white rounded-lg py-2 px-4 max-w-xs">
                      <p>Hello! I'm interested in your products.</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg py-2 px-4 max-w-xs">
                      <p>Hi! Thank you for your interest. How can I help you today?</p>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className="flex-1 border rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="h-[600px] flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                  <p>Select a conversation to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 