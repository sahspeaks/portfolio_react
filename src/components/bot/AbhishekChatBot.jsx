import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  Bot,
  User,
  Settings,
  RefreshCw,
  MessageCircle,
  Github,
  Linkedin,
  Globe,
  X,
} from "lucide-react";

import ME from "../../assets/me3.png";
import { BASE_URL } from "../../server/BaseUrl";

console.log("Base URL:", BASE_URL);
const TONE_OPTIONS = {
  default: { label: "Natural", desc: "Balanced conversation", emoji: "💬" },
  technical: { label: "Technical", desc: "Tech-focused insights", emoji: "⚡" },
  mentor: { label: "Mentor", desc: "Guidance & advice", emoji: "🎯" },
  casual: { label: "Casual", desc: "Relaxed & fun", emoji: "😄" },
  corporate: { label: "Corporate", desc: "Professional tone", emoji: "💼" },
};

const QUICK_MESSAGES = [
  { text: "Tell me about your work at TCS", tone: "default" },
  {
    text: "How do you implement microservices with Spring Boot?",
    tone: "technical",
  },
  { text: "I'm a fresher, any career advice?", tone: "mentor" },
  { text: "Yaar, React Native app banani hai. Help kar na!", tone: "casual" },
  { text: "What enterprise patterns do you follow?", tone: "corporate" },
];

const AbhishekChatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState("");
  const [currentTone, setCurrentTone] = useState("casual");
  const [showSettings, setShowSettings] = useState(false);
  const [persona, setPersona] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);

  // Check API health and load persona info
  useEffect(() => {
    if (isOpen) {
      console.log("Checking API health...", BASE_URL);
      checkApiHealth();
      loadPersonaInfo();
    }
  }, [isOpen]);
  console.log("API health checked", isConnected);

  const checkApiHealth = async () => {
    try {
      const response = await fetch(`${BASE_URL}/health`);
      if (response.ok) {
        setIsConnected(true);
      } else {
        // API responded but with error status
        setIsConnected(false);
        // Set demo mode message
        setMessages([
          {
            role: "assistant",
            content:
              "Hey! I'm Abhishek's AI assistant. Ask me about his work, skills, or projects! (Demo mode - API not connected)",
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } catch (error) {
      setIsConnected(false); // Keep this as false!
      console.error("API connection failed:", error);
      // Set demo mode message without changing connection status
      setMessages([
        {
          role: "assistant",
          content:
            "Hey! I'm Abhishek's AI assistant. Ask me about his work, skills, or projects! (Demo mode - API not connected)",
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  };

  const loadPersonaInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/persona`);
      if (response.ok) {
        const data = await response.json();
        setPersona(data.data.persona);
      }
    } catch (error) {
      console.error("Failed to load persona:", error);
      // Fallback persona data
      setPersona({
        socialLinks: {
          website: "https://sahspeaks.com",
          github: "https://github.com/sahspeaks",
          linkedin: "https://linkedin.com/in/sahspeaks",
        },
      });
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startNewConversation = async (tone = currentTone) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/api/conversations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tone }),
      });

      if (response.ok) {
        const data = await response.json();
        setConversationId(data.data.conversationId);
        setCurrentTone(tone);
        setMessages([
          {
            role: "assistant",
            content: data.data.message,
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } catch (error) {
      console.error("Failed to start conversation:", error);
      // Demo fallback
      setConversationId("demo-" + Date.now());
      setCurrentTone(tone);
      setMessages([
        {
          role: "assistant",
          content: `Hey! I'm Abhishek's AI assistant (${TONE_OPTIONS[tone].label} mode). Ask me about his work, skills, or projects!`,
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim() || isLoading) return;

    if (!conversationId) {
      await startNewConversation();
      return;
    }

    const userMessage = {
      role: "user",
      content: messageText,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/chat/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          conversationId,
          tone: currentTone,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage = {
          role: "assistant",
          content: data.data.message,
          timestamp: data.data.timestamp,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);

      // Demo responses based on message content
      let demoResponse =
        "Thanks for your question! I'm in demo mode right now.";

      if (messageText.toLowerCase().includes("skills")) {
        demoResponse =
          "Abhishek is skilled in React, Node.js, MongoDB, Express, JavaScript, Spring Boot, and mobile app development with React Native!";
      } else if (
        messageText.toLowerCase().includes("experience") ||
        messageText.toLowerCase().includes("tcs")
      ) {
        demoResponse =
          "Abhishek has 1+ years of experience as a Full-Stack Developer at TCS and has worked on 15+ projects including e-commerce platforms and mobile apps.";
      } else if (messageText.toLowerCase().includes("project")) {
        demoResponse =
          "Some notable projects include MY STB E-commerce, HomeMade Haven, Edumindz, and several React Native mobile apps. Check out the portfolio section!";
      } else if (messageText.toLowerCase().includes("contact")) {
        demoResponse =
          "You can reach Abhishek at sahspeaks@gmail.com or connect on LinkedIn!";
      } else if (
        messageText.toLowerCase().includes("microservices") ||
        messageText.toLowerCase().includes("spring boot")
      ) {
        demoResponse =
          "Great question about microservices! Abhishek uses Spring Boot for building scalable microservices with proper service discovery, API gateways, and distributed configurations.";
      } else if (
        messageText.toLowerCase().includes("career") ||
        messageText.toLowerCase().includes("advice")
      ) {
        demoResponse =
          "For freshers, I'd suggest focusing on fundamentals first - master one language well, build projects, contribute to open source, and never stop learning. Practice coding regularly!";
      }

      const errorMessage = {
        role: "assistant",
        content: demoResponse,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const changeTone = async (newTone) => {
    if (!conversationId) {
      setCurrentTone(newTone);
      return;
    }

    try {
      const response = await fetch(
        `${BASE_URL}/api/conversations/${conversationId}/tone`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tone: newTone }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCurrentTone(newTone);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.data.message,
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } catch (error) {
      console.error("Failed to change tone:", error);
      setCurrentTone(newTone);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Switched to ${TONE_OPTIONS[newTone].label} mode! ${TONE_OPTIONS[newTone].emoji}`,
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  };

  const resetConversation = async () => {
    if (!conversationId) return;

    try {
      const response = await fetch(
        `${BASE_URL}/api/conversations/${conversationId}/reset`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessages([
          {
            role: "assistant",
            content: data.data.message,
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } catch (error) {
      console.error("Failed to reset conversation:", error);
      setMessages([
        {
          role: "assistant",
          content: `Hey! Starting fresh. I'm Abhishek's AI assistant (${TONE_OPTIONS[currentTone].label} mode). Ask me anything!`,
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickMessage = (message, tone) => {
    if (tone !== currentTone) {
      changeTone(tone).then(() => {
        setTimeout(() => sendMessage(message), 500);
      });
    } else {
      sendMessage(message);
    }
  };

  // Initialize conversation on mount
  useEffect(() => {
    if (isOpen && isConnected && !conversationId) {
      startNewConversation();
    }
  }, [isOpen, isConnected]);

  if (!isOpen) return null;

  return (
    <>
      <div className="chatbot-container">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <img src={ME} alt="Abhishek Kumar" />
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3>Abhishek Kumar</h3>
              <div className="status-container">
                <span
                  className={`status-dot ${
                    isConnected ? "connected" : "disconnected"
                  }`}
                ></span>
                <span className="status-text">
                  {isConnected ? "Software Engineer at TCS" : "Connecting..."}
                </span>
              </div>
            </div>
          </div>

          <div className="header-actions">
            {persona?.social && (
              <div className="social-links">
                <a
                  href={persona.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={persona.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={persona.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            )}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="settings-btn"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button onClick={onClose} className="chatbot-close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="settings-panel">
            <div className="settings-header">
              <h3>Conversation Settings</h3>
              <div className="settings-actions">
                <button
                  onClick={resetConversation}
                  className="action-btn reset-btn"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
                <button
                  onClick={() => startNewConversation()}
                  className="action-btn new-chat-btn"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>New Chat</span>
                </button>
              </div>
            </div>

            <div className="tone-options">
              {Object.entries(TONE_OPTIONS).map(([key, option]) => (
                <button
                  key={key}
                  onClick={() => changeTone(key)}
                  className={`tone-btn ${currentTone === key ? "active" : ""}`}
                >
                  <span>{option.emoji}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.length === 0 && !isLoading && (
            <div className="welcome-message">
              <Bot className="welcome-icon" />
              <h2>Welcome to Abhishek's AI Chat!</h2>
              <p>
                Start a conversation or try one of the quick messages above.
              </p>
            </div>
          )}

          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-content">
                <div className="message-avatar">
                  {message.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div className="message-bubble">
                  <p>{message.content}</p>
                  <span className="message-time">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="message assistant">
              <div className="message-content">
                <div className="message-avatar">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="message-bubble">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input">
          {/* Quick Messages */}
          <div className="quick-messages">
            <div className="quick-messages-scroll">
              {QUICK_MESSAGES.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(msg.text, msg.tone)}
                  className="quick-message-btn"
                >
                  {TONE_OPTIONS[msg.tone].emoji} {msg.text}
                </button>
              ))}
            </div>
          </div>
          <div className="input-container">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message Abhishek... (${TONE_OPTIONS[currentTone].label} tone)`}
              className="message-input"
              rows="1"
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height =
                  Math.min(e.target.scrollHeight, 120) + "px";
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="send-btn"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          <div className="input-status">
            <p>
              Current mode: {TONE_OPTIONS[currentTone].emoji}{" "}
              {TONE_OPTIONS[currentTone].label} -{" "}
              {TONE_OPTIONS[currentTone].desc}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 82px;
          right: 20px;
          width: 480px;
          height: 600px;
          background: #141b10;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
          border: 1px solid rgba(144, 190, 109, 0.3);
        }

        .chatbot-header {
          background: linear-gradient(135deg, #90be6d, #141b10);
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(144, 190, 109, 0.3);
        }

        .chatbot-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chatbot-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chatbot-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .status-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-dot.connected {
          background: #4ade80;
        }

        .status-dot.disconnected {
          background: #ef4444;
        }

        .status-text {
          font-size: 12px;
          opacity: 0.8;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .social-links {
          display: flex;
          gap: 4px;
        }

        .social-link {
          padding: 8px;
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.2s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .settings-btn,
        .chatbot-close {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: background 0.2s ease;
        }

        .settings-btn:hover,
        .chatbot-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .settings-panel {
          background: #1a2414;
          border-bottom: 1px solid rgba(144, 190, 109, 0.3);
          padding: 16px;
        }

        .settings-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .settings-header h3 {
          color: white;
          font-size: 14px;
          font-weight: 600;
          margin: 0;
        }

        .settings-actions {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .reset-btn {
          background: rgba(255, 193, 7, 0.2);
          color: #ffc107;
        }

        .reset-btn:hover {
          background: rgba(255, 193, 7, 0.3);
        }

        .new-chat-btn {
          background: rgba(144, 190, 109, 0.4);
          color: #90be6d;
        }

        .new-chat-btn:hover {
          background: rgba(144, 190, 109, 0.5);
        }

        .tone-options {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tone-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 12px;
          border: 1px solid rgba(144, 190, 109, 0.4);
          background: rgba(144, 190, 109, 0.1);
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tone-btn:hover {
          background: rgba(144, 190, 109, 0.2);
        }

        .tone-btn.active {
          background: #90be6d;
          color: #141b10;
          border-color: #90be6d;
        }

        .quick-messages {
          padding: 0px;
          margin-bottom: 4px;
        }

        .quick-messages-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
        }

        .quick-messages-scroll::-webkit-scrollbar {
          height: 4px;
        }

        .quick-messages-scroll::-webkit-scrollbar-track {
          background: rgba(144, 190, 109, 0.1);
          border-radius: 2px;
        }

        .quick-messages-scroll::-webkit-scrollbar-thumb {
          background: rgba(144, 190, 109, 0.3);
          border-radius: 2px;
        }

        .quick-message-btn {
          flex-shrink: 0;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 10px;
          border: 1px solid rgba(144, 190, 109, 0.4);
          color: #90be6d;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .quick-message-btn:hover {
          background: rgba(144, 190, 109, 0.2);
        }

        .chatbot-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chatbot-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chatbot-messages::-webkit-scrollbar-track {
          background: rgba(144, 190, 109, 0.1);
          border-radius: 3px;
        }

        .chatbot-messages::-webkit-scrollbar-thumb {
          background: rgba(144, 190, 109, 0.3);
          border-radius: 3px;
        }

        .welcome-message {
          text-align: center;
          padding: 40px 20px;
        }

        .welcome-icon {
          width: 48px;
          height: 48px;
          color: rgba(255, 255, 255, 0.4);
          margin: 0 auto 16px;
        }

        .welcome-message h2 {
          color: white;
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .welcome-message p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .message {
          display: flex;
        }

        .message.user {
          justify-content: flex-end;
        }

        .message.assistant {
          justify-content: flex-start;
        }

        .message-content {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          max-width: 85%;
        }

        .message.user .message-content {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
        }

        .message.user .message-avatar {
          background: #90be6d;
        }

        .message.assistant .message-avatar {
          background: linear-gradient(135deg, #90be6d, #7aa356);
        }

        .message-bubble {
          padding: 12px 16px;
          border-radius: 18px;
          position: relative;
        }

        .message.user .message-bubble {
          background: #90be6d;
          color: #141b10;
          border-bottom-right-radius: 6px;
        }

        .message.assistant .message-bubble {
          background: #1e2a17;
          color: white;
          border: 1px solid rgba(144, 190, 109, 0.3);
          border-bottom-left-radius: 6px;
        }

        .message-bubble p {
          margin: 0 0 4px 0;
          line-height: 1.4;
          white-space: pre-wrap;
        }

        .message-time {
          font-size: 10px;
          opacity: 0.7;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .typing-indicator span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #90be6d;
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-8px);
          }
        }

        .chatbot-input {
          background: #1e2a17;
          border-top: 1px solid rgba(144, 190, 109, 0.3);
          padding: 16px;
        }

        .input-container {
          display: flex;
          gap: 12px;
          align-items: flex-end;
        }

        .message-input {
          flex: 1;
          background: #141b10;
          border: 1px solid rgba(144, 190, 109, 0.4);
          border-radius: 20px;
          padding: 12px 16px;
          color: white;
          font-size: 14px;
          resize: none;
          min-height: 44px;
          max-height: 120px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .message-input:focus {
          border-color: #90be6d;
        }

        .message-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #90be6d, #7aa356);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(144, 190, 109, 0.4);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .input-status {
          text-align: center;
          margin-top: 8px;
        }

        .input-status p {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .chatbot-container {
            bottom: 20px;
            right: 20px;
            left: 20px;
            width: auto;
            height: 70vh;
            max-height: 600px;
          }

          .social-links {
            display: none;
          }

          .quick-messages-scroll {
            gap: 6px;
          }

          .quick-message-btn {
            font-size: 11px;
            padding: 6px 10px;
          }
        }

        @media (max-width: 480px) {
          .chatbot-container {
            height: 80vh;
            border-radius: 15px;
          }

          .chatbot-header {
            padding: 12px;
          }

          .chatbot-messages {
            padding: 12px;
          }

          .chatbot-input {
            padding: 12px;
          }

          .message-content {
            max-width: 90%;
          }

          .tone-options {
            gap: 6px;
          }

          .tone-btn {
            font-size: 11px;
            padding: 6px 10px;
          }
        }
      `}</style>
    </>
  );
};
export default AbhishekChatbot;
