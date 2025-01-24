import React, { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! Welcome to FalHABIT. I'm here to help you with subscriptions, nutrition plans, bulk orders, and more. How can I assist you today?", isBot: true },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const responseSystem = {
    subscription: {
      patterns: ["subscribe", "subscription", "plans", "fruit box"],
      responses: [
        "Our subscription plans include:\n- Daily Fruit Bowls: ₹299/week\n- Personalized Nutrition Plans: ₹599/month\n- Workout Subscriptions: ₹399/month\nWould you like to subscribe?",
      ],
    },
    nutrition: {
      patterns: ["nutrition", "diet", "acidity", "health"],
      responses: [
        "We offer AI-powered diet tracking and personalized recommendations. Would you like help creating a custom nutrition plan?",
        "If you’re experiencing acidity issues, we can help suggest fruits to include in your diet. Would you like to learn more?",
      ],
    },
    bulk: {
      patterns: ["bulk", "corporate", "events"],
      responses: [
        "We provide fresh fruit arrangements for corporate and social events. Let us know the event details, and we’ll assist you with pricing and customization.",
      ],
    },
    general: {
      patterns: ["what is FalHABIT", "about", "who are you"],
      responses: [
        "FalHABIT is India’s first D2C fresh fruit brand. We offer subscription-based fruit bowls, nutrition plans, and corporate catering. Our mission is to make healthy living accessible and enjoyable.",
      ],
    },
    greeting: {
      patterns: ["hello", "hi", "hey"],
      responses: [
        "Hello! How can I help you today? Feel free to ask about subscriptions, nutrition plans, or anything else.",
      ],
    },
  };

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    for (const category in responseSystem) {
      if (responseSystem[category].patterns.some((pattern) => lowerMessage.includes(pattern))) {
        const responses = responseSystem[category].responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }

    return "I'm not sure I understand. Could you provide more details about your query?";
  };

  const handleSend = () => {
    if (inputMessage.trim() === "") return;

    const newMessages = [...messages, { text: inputMessage, isBot: false }];
    setMessages(newMessages);
    setInputMessage("");

    setTimeout(() => {
      const botResponse = findResponse(inputMessage);
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, isBot: true }]);
    }, 500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="default"
        size="lg"
        className={`fixed bottom-4 right-4 rounded-full shadow-lg ${isOpen ? "hidden" : ""}`}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="flex justify-between items-center">
              <CardTitle>FalHABIT Assistant</CardTitle>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
            </CardHeader>

            <CardContent className="h-[400px] overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.isBot ? "bg-gray-100 text-gray-900" : "bg-blue-500 text-white"
                    }`}
                  >
                    {message.text.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>

            <CardFooter className="space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
              />
              <Button onClick={handleSend}>
                <Send className="w-5 h-5" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatWidget;