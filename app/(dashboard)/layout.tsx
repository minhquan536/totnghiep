import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { trpc } from "../(_trpc)/client";
import { useAuth } from "@clerk/nextjs";
import Chat from "@/components/chat/Chat";
// import Providers from "@/components/chat/Providers";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
      <div className="h-full relative">
      <div className="hidden h-full md:flex  md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>

      <main className="md:pl-72">
          <Navbar />
                <Chat />
          {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
