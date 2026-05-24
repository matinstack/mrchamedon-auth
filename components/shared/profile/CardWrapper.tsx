import Header from "@/components/shared/profile/Header";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
};

const CardWrapper = ({ children, headerLabel }: CardWrapperProps) => {
  return (
    <div className={"py-8 px-8 "}>
      <Header label={headerLabel} />
      {children}
    </div>
  );
};

export default CardWrapper;
