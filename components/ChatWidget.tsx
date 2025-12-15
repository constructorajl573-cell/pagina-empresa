import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './ChatWidget.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const CHAT_WEBHOOK_URL = 'https://constructorajl2004.app.n8n.cloud/webhook/f8faa5bd-3a87-444a-aee7-6bc5062943e2/chat';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: '¡Hola! Soy el asistente virtual de Constructora J&L. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generate a random session ID and persist it for the session lifetime
  const sessionIdRef = useRef<string>(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatInput: userMessage.text,
          sessionId: sessionIdRef.current,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Expected format based on user description: { response: "text" }
      const botText = data.response || "Lo siento, hubo un problema al procesar tu mensaje.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, no pude conectar con el servidor. Por favor, intenta más tarde.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end sm:bottom-10 sm:right-10 font-sans">
      {/* Chat Window */}
      <div
        className={`
          mb-4 w-[90vw] sm:w-[400px] h-[500px] max-h-[70vh]
          bg-white/95 dark:bg-card-dark/95 backdrop-blur-xl
          rounded-2xl shadow-2xl border border-white/20 dark:border-border-dark
          flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none absolute bottom-12 right-0'}
        `}
      >
        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Asistente J&L</h3>
              <div className="flex items-center text-primary-100 text-xs opacity-90">
                <span className="w-2 h-2 rounded-full bg-green-300 mr-2 animate-pulse"></span>
                En línea
              </div>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scroll bg-gray-50/50 dark:bg-black/20">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[80%] p-3 rounded-2xl shadow-sm relative text-sm leading-relaxed
                  ${msg.sender === 'user'
                    ? 'bg-primary text-white rounded-br-sm'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm border border-gray-100 dark:border-gray-700'}
                `}
              >
                <div className="text-sm leading-relaxed">
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`underline font-medium ${msg.sender === 'user' ? 'text-white' : 'text-primary hover:text-emerald-green'}`}
                        />
                      ),
                      p: ({ node, ...props }) => <p {...props} className="mb-1 last:mb-0" />,
                      ul: ({ node, ...props }) => <ul {...props} className="list-disc ml-4 mb-2 space-y-1" />,
                      ol: ({ node, ...props }) => <ol {...props} className="list-decimal ml-4 mb-2 space-y-1" />,
                      li: ({ node, ...props }) => <li {...props} />,
                      strong: ({ node, ...props }) => <strong {...props} className="font-bold" />,
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
                <div
                  className={`
                    text-[10px] mt-1 text-right opacity-70
                    ${msg.sender === 'user' ? 'text-primary-100' : 'text-gray-400'}
                  `}
                >
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-card-dark border-t border-gray-100 dark:border-border-dark shrink-0">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2 bg-gray-100 dark:bg-background-dark p-2 rounded-xl border border-transparent focus-within:border-primary/30 transition-all"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 px-2"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className={`
                p-2 rounded-lg flex items-center justify-center transition-all
                ${!inputValue.trim() || isLoading
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-primary text-white shadow-md hover:bg-emerald-green active:scale-95'}
              `}
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-gray-400 dark:text-gray-600">
              Impulsado por IA • Puede cometer errores
            </p>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`
          group relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
          transition-all duration-500 ease-in-out hover:scale-110 active:scale-95 z-50
          ${isOpen ? 'bg-red-500 rotate-90' : 'bg-primary hover:bg-emerald-green'}
        `}
      >
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        <span className="material-symbols-outlined text-white text-3xl transition-transform duration-300">
          {isOpen ? 'close' : 'chat_bubble'}
        </span>

        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
