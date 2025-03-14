import { useNavigate } from "react-router-dom";

export default function HelpPageWelcome() {
  const navigate = useNavigate();

  return (
    <div 
      className="relative w-full py-10 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundColor: "#f7f1ff", 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height=' 40' viewBox='0 0 20 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d3b7ff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="flex flex-col items-start max-w-4xl mx-auto space-y-6">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src="/text_flow_logo.png" alt="TextFlow Logo" className="h-40" />
        </div>

        {/* Left-Aligned Welcome Message */}
        <h1 className="text-4xl font-bold text-orange-700">Welcome to the Help Center</h1>
        <p className="text-lg text-gray-700">
          Here you'll find everything you need to get started with TextFlow. Learn how to sync customers, 
          create automations, and track insights effortlessly.
        </p>
      </div>
    </div>
  );
}
