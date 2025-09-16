# Shatranj

Shatranj is a realtime, multiplayer chess web app built with a React + Vite frontend and an Express + Socket.IO backend. It provides a playable chessboard, move rules enforcement, and real-time synchronization between players using WebSockets.

## Goals & Features

- Play chess in realtime against another player over the network.
- Interactive board with drag / click-to-move controls.
- Move validation (legal moves, captures, alternate turns).
- Game room creation and joining via unique game IDs.
- Realtime move broadcasting using Socket.IO.
- (Planned) User authentication, timers, move history, en passant, check/stalemate detection.

## Repository layout

- `Frontend/` — React + Vite app for the client UI. Contains components, assets (piece SVGs, sounds), and Tailwind setup.
- `Backend/` — Node.js + Express server that exposes minimal HTTP endpoints and a Socket.IO server for realtime communication.

## Quick start

Prerequisites: Node.js (16+), npm or yarn.

1) Install dependencies

Frontend:

# Shatranj

Shatranj is a realtime, multiplayer chess web application. It pairs a React + Vite frontend with an Express + Socket.IO backend to provide an interactive chessboard, realtime gameplay, and room-based matches.

## Key features

- Real-time two-player matches using Socket.IO.
- Interactive chessboard with piece movement and captures.
- Room creation and joining through generated game IDs.
- Client-side move validation and turn enforcement (black/white alternation).

## Repo structure

- `Frontend/` — React + Vite app, Tailwind CSS, UI components, assets (SVG pieces, sounds).
- `Backend/` — Express server with a Socket.IO server and simple HTTP endpoints.

## Quick start (local development)

Prerequisites: Node.js 16+ and npm (or yarn).

1) Install dependencies

Frontend

```bash
cd Frontend
npm install
```

Backend

```bash
cd Backend
npm install
```

2) Run the servers

Start the backend (Socket.IO server, default port 4000):

```bash
cd Backend
node index.js
# or for automatic reloads during development
npx nodemon index.js
```

Start the frontend (Vite dev server, default port 5173):

```bash
cd Frontend
npm run dev
```

Then open your browser to `http://localhost:5173`.

Note: the frontend expects the backend at `http://localhost:4000` by default. Adjust URLs in `Frontend/src/socket.js` if needed.

## Important endpoints & socket events

- HTTP
	- `GET /` — basic server health/welcome message in `Backend/index.js`.
	- `GET /create-game` — creates/returns a generated game ID.

- Socket events (implemented in `Backend/index.js`)
	- `create-game` — client requests a room join/create.
	- `join-game` — client attempts to join an existing room.
	- `return-members` — request room membership info.
	- `send-moves` — client sends move data to the server (server broadcasts `receive-moves`).

Review `Backend/index.js` for the exact event payloads and behavior.

## Mini contract

- Inputs: socket events carrying gameId and move payloads (board state or move coordinates).
- Outputs: broadcasted move events to other clients in the same room.
- Errors: Currently, joining a non-existent room logs to server console; consider returning error events for better UX.

## Known limitations and next improvements

- Authentication & user accounts: not implemented — consider integrating JWT or OAuth.
- Authoritative move validation: currently client-side. Add server-side validation to prevent tampering.
- Persistence: no database for game history or reconnection; add a store (Redis, Postgres) for resilience.
- Better UX on room errors and disconnects; add reconnection and game recovery flows.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Implement changes and add tests where applicable.
4. Open a pull request with a description of the change.

If you'd like, I can also:
- add a `contribute.md` with a developer checklist,
- add a small `npm` script that runs both frontend and backend concurrently (using `concurrently`), or
- add example env variables and a `.env.example`.

## License

MIT License
---
