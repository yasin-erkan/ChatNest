# ChatNest 🚀

A modern, real-time chat application with video calling capabilities, built with the MERN stack.

![ChatNest Preview](https://i.imgur.com/your-preview-image.png)

## ✨ Features

- 💬 Real-time messaging using Stream Chat
- 📹 Video calling functionality
- 🔐 Secure authentication
- 👥 User profiles and friend system
- 🌙 Dark/Light mode support
- 📱 Responsive design
- 🔍 User search and discovery
- 🤝 Friend request system

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Stream Chat React SDK
- React Query
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stream Chat API
- Socket.io

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Stream Chat account
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yasin-erkan/ChatNest
cd ChatNest
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables

Create `.env` files in both frontend and backend directories:

Backend `.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

Frontend `.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_STREAM_API_KEY=your_stream_api_key
```

4. Start the development servers

```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm run dev
```

## 📝 API Documentation

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Chat
- `GET /api/chat/token` - Get Stream chat token
- `POST /api/chat/user` - Create Stream user
- `GET /api/chat/user/:userId` - Get user details

### Users
- `GET /api/users` - Get recommended users
- `GET /api/users/friends` - Get user's friends
- `POST /api/users/friend-request/:userId` - Send friend request
- `GET /api/users/friend-requests` - Get friend requests
- `PUT /api/users/friend-request/:requestId/accept` - Accept friend request

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Stream Chat](https://getstream.io/chat/) for the chat functionality
- [Tailwind CSS](https://tailwindcss.com/) for the styling
- [React Query](https://tanstack.com/query) for data fetching
