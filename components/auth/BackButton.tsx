import Link from "next/link";

const BackButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href} className="text-xs">
      {label}
    </Link>
  );
};

export default BackButton;
