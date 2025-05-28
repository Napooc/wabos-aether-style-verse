
import { useState, useEffect } from 'react';
import { MessageSquare, Sparkles, Send, X, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiResponses = [
    "I'd be delighted to help you curate the perfect luxury pieces for your wardrobe. What style aesthetic speaks to you?",
    "Based on your refined taste, I recommend exploring our artisanal collection. These pieces embody timeless elegance.",
    "Your style profile suggests you appreciate quality craftsmanship. Let me show you some exquisite pieces from our heritage collection.",
    "I notice you have an eye for sophistication. Our sustainable luxury line would complement your values beautifully.",
    "For someone with your discerning taste, I suggest focusing on investment pieces that will elevate your wardrobe for years to come.",
    "Your aesthetic preference aligns perfectly with our minimalist luxury collection. Shall I curate some options for you?",
    "I can help you build a capsule wardrobe with carefully selected pieces that reflect your unique style DNA.",
    "Based on our conversation, I believe you'd appreciate the artistry in our limited edition pieces.",
    "Your style journey is fascinating. Let me recommend some pieces that would enhance your signature look.",
    "I'm here to help you discover fashion that not only looks beautiful but tells your story."
  ];

  const greetingMessage: Message = {
    id: '1',
    text: "Hello! I'm Aria, your personal luxury fashion curator. I'm here to help you discover pieces that perfectly complement your refined taste. How may I assist you today?",
    sender: 'ai',
    timestamp: new Date()
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([greetingMessage]);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="luxury-card mb-6 w-96 h-[500px] rounded-2xl flex flex-col shadow-luxury-lg">
          {/* Header */}
          <div className="bg-gradient-to-r from-mocha to-bronze p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cream" />
              </div>
              <div>
                <h3 className="text-cream font-semibold">Aria</h3>
                <p className="text-cream/80 text-xs">Your Style Curator</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-cream hover:bg-white/20 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-pearl/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-mocha text-cream' 
                      : 'bg-gradient-to-br from-bronze to-gold text-cream'
                  }`}>
                    {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-mocha text-cream'
                      : 'bg-white border border-sand/30 text-charcoal'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-bronze to-gold rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-cream" />
                  </div>
                  <div className="bg-white border border-sand/30 text-charcoal p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-mocha/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-mocha/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-mocha/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-sand/20">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about style, trends, or recommendations..."
                className="flex-1 px-4 py-3 bg-white border border-sand/30 rounded-full text-charcoal placeholder-mocha/60 focus:outline-none focus:border-mocha/50 focus:ring-2 focus:ring-mocha/20 transition-all duration-300"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha rounded-full w-12 h-12"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* AI Assistant Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-mocha to-bronze hover:from-bronze hover:to-mocha luxury-hover shadow-luxury-lg"
      >
        <div className="relative">
          <MessageSquare className="w-7 h-7 text-cream" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full animate-gentle-float"></div>
        </div>
      </Button>
    </div>
  );
};

export default AIAssistant;
