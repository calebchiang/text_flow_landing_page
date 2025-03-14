import { UserPlus } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function OnboardingPageWelcome() {
  return (
    <div className="w-full py-12 px-6 flex flex-col items-start text-left max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/help" className="text-gray-600 hover:underline">
              Help
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-black font-medium">
              Onboarding
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Onboarding Title */}
      <UserPlus className="w-16 h-16 text-blue-500 mt-10" />
      <h1 className="text-4xl font-bold text-gray-900 mt-4">Onboarding</h1>
      <p className="text-lg text-gray-500 mt-2">
        Learn how to get started with TextFlow
      </p>
    </div>
  );
}
