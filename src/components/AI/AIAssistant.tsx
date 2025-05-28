
import { useState, useEffect } from 'react';
import { MessageSquare, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIAssistant = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState('');

  const aiMessages = [
    "Hi! I'm Aria, your AI fashion consultant.",
    "I can help you find the perfect outfit!",
    "Want me to analyze your style preferences?",
    "I've found some trending items just for you!",
    "Ready to create your signature look?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(aiMessages[Math.floor(Math.random() * aiMessages.length)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* AI Assistant Bubble */}
      <div className={`cyber-card max-w-xs mb-4 transition-all duration-500 ${isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center animate-pulse-neon">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-white/90">{message}</p>
            <div className="flex space-x-2 mt-2">
              <Button size="sm" variant="outline" className="text-xs border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                Style Me
              </Button>
              <Button size="sm" variant="outline" className="text-xs border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white">
                Trends
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Button */}
      <Button
        onClick={() => setIsActive(!isActive)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan hover:scale-110 transition-all duration-300 shadow-lg animate-float"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-rose rounded-full animate-pulse"></div>
        </div>
      </Button>
    </div>
  );
};

export default AIAssistant;
