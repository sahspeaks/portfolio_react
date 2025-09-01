import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { About } from "./components/about/About";
import { Experience } from "./components/experience/Experience";
import { Service } from "./components/services/Service";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { ContributedWebsites } from "./components/portfolio/ContributedWebsites";
import { MessageCircle, X } from "lucide-react";
import AbhishekChatbot from "./components/bot/AbhishekChatBot";
function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };
  return (
    <div style={{ position: "relative" }}>
      {" "}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <ContributedWebsites />
      <Portfolio />
      <Contact />
      <Footer />
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className="chatbot-toggle"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #90be6d, #141b10)",
          border: "none",
          cursor: "pointer",
          zIndex: 1001,
          boxShadow: "0 8px 25px rgba(144, 190, 109, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
      >
        {isChatbotOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
      {/* Enhanced Chatbot Component */}
      <AbhishekChatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />
      <style jsx>{`
        .chatbot-toggle:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 35px rgba(144, 190, 109, 0.4) !important;
        }

        .chatbot-toggle:active {
          transform: scale(0.95);
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .chatbot-toggle {
            width: 55px !important;
            height: 55px !important;
            bottom: 15px !important;
            right: 15px !important;
          }
        }

        /* Ensure chatbot doesn't interfere with navigation */
        @media (max-width: 768px) {
          nav {
            bottom: 80px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
