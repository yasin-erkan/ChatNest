# ChatNest - Language Learning Chat Application

A real-time chat application designed specifically for language learners to practice their target languages with native speakers.

![ChatNest Demo](ChatNest.gif)

## Features

- **Real-time Chat**: Instant messaging with WebSocket support
- **Language Learning Focus**: Connect with native speakers of your target language
- **User Profiles**: Showcase your language proficiency levels
- **Friend System**: Add and manage language learning partners
- **Modern UI**: Built with React, Tailwind CSS, and DaisyUI
- **Responsive Design**: Works on desktop and mobile devices

## Screenshots

![Chat Interface](https://github.com/yasin-erkan/ChatNest-Merstack-Project/blob/main/Chat.png)
![User Profile](https://github.com/yasin-erkan/ChatNest-Merstack-Project/blob/main/chat1.png)

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- DaisyUI
- React Query
- Zustand
- Stream Chat SDK

### Backend
- Node.js
- Express
- MongoDB
- Socket.IO
- JWT Authentication

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yasin-erkan/ChatNest.git
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
```bash
# Backend (.env)
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Frontend (.env)
VITE_API_URL=http://localhost:5000
VITE_STREAM_API_KEY=your_stream_api_key
```

4. Start the development servers:
```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd frontend
npm run dev
```

## Deployment

The application is deployed on Vercel:
- Frontend: [https://chatnest.vercel.app](https://chatnest.vercel.app)
- Backend: [https://chatnest-api.vercel.app](https://chatnest-api.vercel.app)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



Project Link: [https://github.com/yasin-erkan/ChatNest](https://github.com/yasin-erkan/ChatNest)
