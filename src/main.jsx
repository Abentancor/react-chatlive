import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ChatProvider from './Context/ChatContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>,
)
