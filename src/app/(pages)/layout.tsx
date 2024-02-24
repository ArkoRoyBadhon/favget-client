import Navbar from "@/components/navbar";
import SideBar from "@/components/sideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="w-[300px] sticky top-0 h-full overflow-y-auto">
        <SideBar />
      </div>
      <div className="flex-grow w-full bg-black overflow-y-scroll">
        <Navbar />
        {children}
        </div>
    </div>
  );
};

export default MainLayout;
