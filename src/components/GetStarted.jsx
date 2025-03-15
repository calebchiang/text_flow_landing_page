import { 
    LineChart, 
    Settings, 
    Users, 
    ShoppingCart, 
    Zap, 
    PlaneTakeoff, 
    CircleCheckBig,
    Star,
    Percent,
    HandCoins,
    UserPlus,
} from "lucide-react";

export default function GettingStarted() {
  return (
    <div id="getting-started" className="w-full py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Getting Started with TextFlow</h2>
      <p className="text-lg text-gray-500 mt-2">
        Learn how to sync your customer data, create your first automation, and track key analytics inside TextFlow.
      </p>

      <div className="mt-8 space-y-6">
        <div id="sync-customer-data" className="flex items-start gap-4">
          <Users className="w-8 h-8 text-blue-500" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">1. Sync Customer Data</h3>
            <p className="text-gray-700">
              Connect your store and import your existing customer list to start engaging with them seamlessly.
            </p>
          </div>
        </div>

        <div className="mt-8">
            <p className="text-gray-700">
            When you first install TextFlow, you'll be greeted with the <strong>Getting Started</strong> page, guiding you through the initial setup. 
            At the bottom of this page, you'll find a <strong>Sync Customers</strong> button, allowing you to import your customer data seamlessly. 
            Simply click the Sync Customers button, and TextFlow will automatically import all available customer data.
            </p>

            <p className="text-gray-700 mt-8">
              Once imported, you can use these customer records to create personalized <strong>SMS campaigns</strong> and 
              <strong> automated workflows</strong>. This ensures that your audience is always up-to-date with your latest promotions and updates.
            </p>
            <div className="mt-8">
              <img 
                src="/sync_customers.png" 
                alt="Sync customers in TextFlow" 
                className="w-full rounded-lg shadow-md border"
              />
              <p className="text-sm text-gray-500 mt-2 mb-10">
                Screenshot: Clicking the "Sync Customers" button to import customer data from your store.
              </p>
            </div>
          </div>
        </div>
        
        <div id="create-first-automation" className="flex items-start gap-4">
          <Settings className="w-8 h-8 text-green-500" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">2. Create Your First Automation</h3>
            <p className="text-gray-700">
              Set up your first SMS or email automation to nurture customers and drive sales on autopilot.
            </p>
          </div>
        </div>

        {/* Choosing a Trigger */}
      <div className="mt-10">
        <h4 className="text-xl font-semibold text-gray-900">Choosing Your Trigger</h4>
        <p className="text-gray-700 mt-2">
          Every automation in TextFlow starts with a <strong>trigger</strong>. A trigger determines when and why a workflow starts. 
          Choosing the right trigger ensures that your customers receive messages at the right time.
        </p>

        {/* Screenshot for Trigger Selection */}
        <div className="mt-8">
          <img 
            src="/triggers.png" 
            alt="Trigger Selection Modal" 
            className="w-3/4 rounded-lg shadow-md border"
          />
          <p className="text-sm text-gray-500 mt-2 mb-10">
            Screenshot: Selecting a trigger for your automation.
          </p>
        </div>

        {/* Explaining Each Trigger */}
        <h4 className="text-xl font-semibold text-gray-900">Understanding Triggers</h4>
        <p className="text-gray-700 mt-2">
          Below are the different triggers you can choose from and what they do:
        </p>

        <div className="mt-10 space-y-6 mb-20">
          <TriggerCard
            icon={<ShoppingCart className="w-8 h-8 text-blue-500" />}
            title="Abandoned Cart"
            description="Send a reminder to customers who added items to their cart but didn’t complete the purchase."
          />
          
          <TriggerCard
            icon={<CircleCheckBig className="w-8 h-8 text-green-500" />}
            title="Order Confirmation"
            description="Notify customers that their order has been successfully placed."
          />

          <TriggerCard
            icon={<PlaneTakeoff className="w-8 h-8 text-purple-500" />}
            title="Order Shipped"
            description="Inform customers when their order has been shipped along with tracking details."
          />

          <TriggerCard
            icon={<Star className="w-8 h-8 text-yellow-500" />}
            title="Review Request"
            description="Follow up with customers after a purchase, encouraging them to leave a review."
          />

          <TriggerCard
            icon={<Percent className="w-8 h-8 text-red-500" />}
            title="Limited-Time Promotion"
            description="Promote special offers or discounts to selected customers via SMS."
          />

          <TriggerCard
            icon={<HandCoins className="w-8 h-8 text-indigo-500" />}
            title="Customer’s First Purchase"
            description="Welcome new customers with a thank-you message or an exclusive discount."
          />

          <TriggerCard
            icon={<UserPlus className="w-8 h-8 text-orange-500" />}
            title="Win-Back Campaign"
            description="Re-engage customers who haven’t made a purchase in a while with a special offer."
          />
        </div>
      </div>

        <div id="review-analytics" className="flex items-start gap-4">
          <LineChart className="w-8 h-8 text-purple-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">3. Review Analytics</h3>
            <p className="text-gray-700">
              Track campaign performance and optimize your strategy with real-time insights.
            </p>
          </div>
        </div>
      </div>
  );
}

/* Reusable TriggerCard Component */
function TriggerCard({ icon, title, description }) {
    return (
      <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
        {icon}
        <div>
          <h5 className="text-lg font-semibold text-gray-900">{title}</h5>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  }