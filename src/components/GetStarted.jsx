import { LineChart, Settings, Users } from "lucide-react";

export default function GettingStarted() {
  return (
    <div id="getting-started" className="w-full py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900">Getting Started with TextFlow</h2>
      <p className="text-lg text-gray-500 mt-2">
        Learn how to sync your customer data, create your first automation, and track key analytics inside TextFlow.
      </p>

      <div className="mt-6 space-y-6">
        <div className="flex items-start gap-4">
          <Users className="w-8 h-8 text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">1. Sync Customer Data</h3>
            <p className="text-gray-700">
              Connect your store and import your existing customer list to start engaging with them seamlessly.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Settings className="w-8 h-8 text-green-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">2. Create Your First Automation</h3>
            <p className="text-gray-700">
              Set up your first SMS or email automation to nurture customers and drive sales on autopilot.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <LineChart className="w-8 h-8 text-purple-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">3. Review Analytics</h3>
            <p className="text-gray-700">
              Track campaign performance and optimize your strategy with real-time insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
