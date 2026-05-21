'use client';

import { useState, useEffect } from 'react';

interface ModelInfo {
  id: string;
  object: string;
  created: number;
  owned_by: string;
}

interface ChatMessage {
  role: string;
  content: string;
}

export default function SonaAdmin() {
  const [models, setModels] = useState<ModelInfo[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [hermesUrl, setHermesUrl] = useState('https://pspipes.net');

  // Fetch models on mount
  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      const response = await fetch(`${hermesUrl}/api/sona-admin/v1/models`);
      const data = await response.json();
      setModels(data.data || []);
    } catch (error) {
      console.error('Failed to fetch models:', error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    setLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: newMessage }]);

    try {
      const response = await fetch(`${hermesUrl}/api/sona-admin/v1/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'glm-4.7',
          messages: [...messages, { role: 'user', content: newMessage }],
        }),
      });

      const data = await response.json();
      const assistantMessage = data.choices?.[0]?.message?.content || 'No response';

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: Failed to communicate with Hermes' }]);
    } finally {
      setLoading(false);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <span className="text-4xl">🤖</span>
            Sona Admin
          </h1>
          <p className="text-gray-400">Hermes Agent Management Dashboard</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Models Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📦</span> Available Models
              </h2>
              {models.length > 0 ? (
                <ul className="space-y-2">
                  {models.map(model => (
                    <li
                      key={model.id}
                      className={`p-3 rounded-lg border ${
                        model.id === 'glm-4.7'
                          ? 'bg-blue-900/30 border-blue-500'
                          : 'bg-gray-700/50 border-gray-600'
                      }`}
                    >
                      <div className="font-mono text-sm font-medium">{model.id}</div>
                      <div className="text-xs text-gray-400 mt-1">{model.owned_by}</div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-gray-400 text-sm p-4 bg-gray-700/30 rounded-lg">
                  Loading models...
                </div>
              )}
            </div>
          </div>

          {/* Chat Panel */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur rounded-lg border border-gray-700 h-[600px] flex flex-col">
              <div className="p-4 border-b border-gray-700 bg-gray-800">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span>💬</span> Chat with Hermes
                </h2>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-gray-400 text-center py-12">
                    <p className="text-4xl mb-4">👋</p>
                    <p>Start a conversation with Hermes</p>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-700 text-gray-100'
                        }`}
                      >
                        <div className="text-xs text-gray-400 mb-1 capitalize">{message.role}</div>
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                      </div>
                    </div>
                  ))
                )}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-700 bg-gray-800">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    disabled={loading}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={loading || !newMessage.trim()}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="mt-6 bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>⚙️</span> Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Hermes API URL
              </label>
              <input
                type="text"
                value={hermesUrl}
                onChange={(e) => setHermesUrl(e.target.value)}
                placeholder="https://pspipes.net"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <p className="text-xs text-gray-400 mt-1">
                This is the server where Hermes API is hosted
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Status
              </label>
              <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm">Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}