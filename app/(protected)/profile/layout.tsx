import Sidebar from "@/components/shared/profile/Sidebar";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"bg-gray-50 min-h-dvh flex gap-3"}>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className={"w-full"}>{children}</div>
    </div>
  );
};
export default ProfileLayout;
