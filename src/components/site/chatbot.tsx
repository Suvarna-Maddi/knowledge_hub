import { useState, useRef, useEffect } from "react";
import { Send, Minus } from "lucide-react";
import { getChatbotResponse } from "@/lib/chatbot-knowledge";
import { Button } from "@/components/ui/button";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
  options?: string[];
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! I'm the Knowledge Hub AI Assistant. How can I help you today?",
      options: ["What courses do you offer?", "Where are you located?", "Contact details"]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate network delay to feel like a real AI
    setTimeout(() => {
      const response = getChatbotResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: response.text,
        options: response.options
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay
  };

  return (
    <>
      {/* AI Chatbot Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)} 
        className={`group relative flex items-center justify-center h-16 w-16 hover:scale-110 transition-all duration-500 ease-out z-40 ${isOpen ? 'scale-0 opacity-0 absolute' : 'scale-100 opacity-100'}`}
        aria-label="Open Chatbot"
      >
        <div className="absolute inset-1 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-400/50 transition-colors duration-500 -z-10"></div>
        <img 
          src="/chatbot-icon.png" 
          alt="AI Assistant" 
          className="w-full h-full object-contain drop-shadow-2xl z-10 scale-[1.25]" 
        />
        <span className="absolute right-full mr-4 whitespace-nowrap rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-800 shadow-xl opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none translate-x-3 group-hover:translate-x-0 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Ask AI Assistant
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-white/90"></div>
        </span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-[200] w-full sm:w-[380px] h-[100dvh] sm:h-[600px] sm:max-h-[85vh] flex flex-col bg-white sm:rounded-2xl shadow-2xl overflow-hidden border border-slate-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] p-4 flex items-center justify-between text-white shadow-md relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <img src="/chatbot-icon.png" alt="Bot" className="w-8 h-8 object-contain scale-[1.2]" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#1E3A8A]"></span>
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight text-blue-50">Knowledge Hub AI</h3>
              <p className="text-xs text-blue-200/80">Typically replies instantly</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-blue-100 hover:text-white">
            <Minus className="size-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div 
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13.5px] leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-sm shadow-md shadow-blue-600/20' 
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-sm shadow-sm'
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </div>
              
              {/* Options */}
              {msg.options && (
                <div className="flex flex-wrap gap-1.5 mt-2 ml-1">
                  {msg.options.map((opt, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(opt)}
                      className="text-[12px] font-medium bg-white text-blue-700 border border-blue-200/60 rounded-full px-3 py-1.5 hover:bg-blue-50 hover:border-blue-300 transition-colors shadow-sm"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1 items-center h-[38px]">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-slate-100 relative z-10">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-2"
          >
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-slate-100 text-[13.5px] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all border-none"
            />
            <Button 
              type="submit" 
              size="icon"
              disabled={!input.trim() || isTyping}
              className="rounded-full bg-blue-600 hover:bg-blue-700 h-[38px] w-[38px] shrink-0 shadow-md shadow-blue-600/20 disabled:opacity-50 disabled:shadow-none"
            >
              <Send className="size-4 ml-0.5" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
