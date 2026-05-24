import { Button } from "@heroui/react";
import Link from "next/link";

const MainPAge = () => {
  return (
    <div>
      <Link href={"/select"}>
        <Button>ثبت نام</Button>
      </Link>
      Hello mrchamedon
    </div>
  );
};

export default MainPAge;
