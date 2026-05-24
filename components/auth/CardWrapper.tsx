import Header from "@/components/auth/Header";
import BackButton from "@/components/auth/BackButton";

type CardWrapperProps = {
  children: React.ReactNode;
  backButtonHref: string;
  BackButtonLabel: string;
  showSocial?: boolean;
  headerLabel: string;
};
const CardWrapper = ({
  children,
  backButtonHref,
  BackButtonLabel,
  showSocial,
  headerLabel,
}: CardWrapperProps) => {
  return (
    <div className={"flex justify-center mt-12"}>
      <div
        className={
          "bg-white flex flex-col w-120 rounded-lg shadow-md py-10 px-8"
        }
      >
        <Header label={headerLabel} />
        {children}
        <BackButton href={backButtonHref} label={BackButtonLabel} />
      </div>
    </div>
  );
};

export default CardWrapper;
