import Logo from "@/components/ui/Logo";

const Header = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col items-center gap-y-3 mb-6">
      <div className=" pb-3 w-[50%]  border-border flex justify-center">
        <Logo />
      </div>
      <h1 className={"self-start font-bold text-lg"}>{label}</h1>
    </div>
  );
};

export default Header;
