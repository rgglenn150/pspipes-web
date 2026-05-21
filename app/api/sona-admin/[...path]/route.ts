import { NextRequest } from 'next/server';

// Get Hermes URL from environment variable or use default
const HERMES_API_BASE = process.env.HERMES_API_URL || 'https://pspipes.net/api';

export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const pathString = path.join('/');
  const url = `${HERMES_API_BASE}/${pathString}`;

  console.log('Proxying GET to:', url);

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Hermes API error', status: response.status, message: response.statusText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy error:', error);
    return Response.json(
      { error: 'Failed to connect to Hermes', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const pathString = path.join('/');
  const url = `${HERMES_API_BASE}/${pathString}`;
  const body = await request.json();

  console.log('Proxying POST to:', url);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Hermes API error', status: response.status, message: response.statusText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy error:', error);
    return Response.json(
      { error: 'Failed to connect to Hermes', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const pathString = path.join('/');
  const url = `${HERMES_API_BASE}/${pathString}`;

  console.log('Proxying DELETE to:', url);

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Hermes API error', status: response.status, message: response.statusText },
        { status: response.status }
      );
    }

    const data = await response.text();
    return new Response(data, { status: response.status });
  } catch (error) {
    console.error('Proxy error:', error);
    return Response.json(
      { error: 'Failed to connect to Hermes', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}