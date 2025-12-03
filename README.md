# OpenCode Web

A modern, responsive web interface for [OpenCode](https://github.com/sst/opencode) built with SolidJS, featuring real-time message streaming, virtual scrolling for optimal performance, and a simple UI.

<img width="2485" height="1555" alt="Screenshot 2025-10-21 at 12-22-58 OpenCode Web" src="https://github.com/user-attachments/assets/2a7f5e3c-de70-40ef-819b-44e86f1554bd" style="max-width: 100%; height: auto;" />

## Features

- **Session Management** - Create, rename, delete, and fork sessions
- **Real-time Messaging** - Live SSE streaming for instant message updates
- **High Performance** - Virtual scrolling handles thousands of messages smoothly
- **Model & Agent Selection** - Dynamic model and agent picker with session memory
- **Token & Cost Tracking** - Real-time display of tokens used and costs
- **Flexible Configuration** - Frontend-only or proxied-backend modes
- **Theme Customization** - Choose from 32 DaisyUI themes
- **Mobile Responsive** - Optimized for mobile devices with collapsible sidebar
- **Authentication** - Simple client-side password protection (default: `opencode`)

## Quick Start

### Frontend Mode
With "Frontend mode" the app runs as a static SPA. You're expected to have an OpenCode API server running somewhere accessible. You can start one using `opencode serve`.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173`

You can also use the [hosted frontend](https://opencode-web.pages.dev/).

### Proxied Mode
With "Proxied mode" OpenCode Web will auto start `opencode serve` (so it needs to be in your `$PATH`), proxy it under `/api`, and auto-configure the UI to use it. This mode isn't purely static and should be started from the device you're using `opencode` from.

To start this mode:
```bash
npm run dev:proxy
```

## Configuration

You can configure the application using environment variables:

- `VITE_ACCESS_PASSWORD`: The password for the login screen (default: `opencode`).
- `VITE_API_DEFAULT`: The default API endpoint (default: derived from proxy or empty).

## Development

### Running Tests
This project uses `vitest` for unit testing.

```bash
npm test
```

### Building for Production
```bash
npm run build
```

## License

MIT
