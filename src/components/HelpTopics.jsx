import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { UserPlus, ShoppingCart, MessageSquareText, HelpCircle } from "lucide-react"; 

export default function HelpTopics() {
  const navigate = useNavigate();

  const topics = [
    { id: "onboarding", title: "Onboarding", icon: <UserPlus className="w-8 h-8 text-blue-500" /> },
    { id: "ecommerce-integrations", title: "E-commerce Integrations", icon: <ShoppingCart className="w-8 h-8 text-green-500" /> },
    { id: "sms-marketing", title: "SMS Marketing", icon: <MessageSquareText className="w-8 h-8 text-purple-500" /> },
    { id: "faq", title: "FAQ", icon: <HelpCircle className="w-8 h-8 text-orange-500" /> },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 px-4 mb-10">      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card 
            key={topic.id} 
            className="cursor-pointer transition hover:shadow-lg"
            onClick={() => navigate(`/help/${topic.id}`)}
          >
            <CardHeader className="flex items-center gap-4">
              {topic.icon}
              <CardTitle className="text-xl font-semibold">{topic.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Learn more about {topic.title} and how to get started.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
