'use client';

import { useState } from 'react';

export default function SonaAdmin() {
  const [view, setView] = useState<'dashboard' | 'custom'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span>🤖</span> Sona Admin
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setView('dashboard')}
              className={`px-4 py-2 rounded ${
                view === 'dashboard'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Native Dashboard
            </button>
            <button
              onClick={() => setView('custom')}
              className={`px-4 py-2 rounded ${
                view === 'custom'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Custom Interface
            </button>
          </div>
        </div>
      </nav>

      {view === 'dashboard' ? (
        <iframe
          src="/sona-admin-dashboard/"
          className="w-full h-[calc(100vh-73px)] border-0"
          title="Hermes Dashboard"
        />
      ) : (
        <div className="max-w-6xl mx-auto p-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Custom Interface</h2>
            <p className="text-gray-400">
              Build your custom admin interface here. This will use the Hermes API Server
              to provide full control over sessions, models, and agent runs.
            </p>
            <div className="mt-6 p-4 bg-gray-700 rounded">
              <h3 className="font-semibold mb-2">Available API Endpoints:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li><code>POST /api/sona-admin/v1/chat/completions</code> - Send messages</li>
                <li><code>GET /api/sona-admin/v1/models</code> - List models</li>
                <li><code>POST /api/sona-admin/v1/runs</code> - Start a run</li>
                <li><code>GET /api/sona-admin/v1/runs/:id</code> - Get run status</li>
                <li><code>GET /api/sona-admin/v1/runs/:id/events</code> - SSE stream</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}