
import { useState, useEffect } from 'react';
import { MessageSquare, Sparkles, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIAssistant = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState('');

  const aiMessages = [
    "Hello, I'm Aria, your personal style curator.",
    "I can help you discover timeless pieces.",
    "Shall I analyze your aesthetic preferences?",
    "I've found some exquisite pieces for you.",
    "Ready to refine your signature style?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(aiMessages[Math.floor(Math.random() * aiMessages.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* AI Assistant Bubble */}
      <div className={`luxury-card max-w-sm mb-6 transition-all duration-700 ${isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'} rounded-2xl p-6`}>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-mocha to-bronze rounded-full flex items-center justify-center shadow-luxury animate-gentle-float">
            <Sparkles className="w-6 h-6 text-cream" />
          </div>
          <div className="flex-1">
            <p className="text-charcoal mb-4 leading-relaxed">{message}</p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="text-xs border-mocha/30 text-mocha hover:bg-mocha hover:text-cream rounded-full px-4 py-2 transition-all duration-300">
                Style Me
              </Button>
              <Button size="sm" variant="outline" className="text-xs border-bronze/30 text-bronze hover:bg-bronze hover:text-cream rounded-full px-4 py-2 transition-all duration-300">
                Trends
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Button */}
      <Button
        onClick={() => setIsActive(!isActive)}
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
