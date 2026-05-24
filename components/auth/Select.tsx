import { useState } from "react";
import { PackagePlus, BaggageClaim, LucideCircleCheck } from "lucide-react";
import { Button } from "@heroui/react";

const Select = () => {
  const [type, setType] = useState<"sender" | "rider" | null>(null);

  return (
    <div className={"px-4 flex flex-col items-center justify-center"}>
      <div>
        <header className={"flex flex-col gap-4 mt-8 self-start"}>
          <h1 className={"font-bold text-3xl"}>
            به{" "}
            <span
              className={
                "text-3xl font-bold  bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              }
            >
              مستر چمدون
            </span>{" "}
            خوش آمدید
          </h1>
          <p className={"text-xs"}>
            حسابی که میخواهی را انتخاب کن بعدا هم میتونی تغییرش بدی!!!
          </p>
        </header>
        <div className={"flex gap-4 my-8 max-w-xl"}>
          <div
            role={"button"}
            onClick={() => setType("rider")}
            className={`${type === "rider" && "border-sky-500"} relative group flex flex-col items-center border border-border transition-all  hover:border-gray-400 hover:shadow-md rounded-xl py-18 pb-22 px-6 gap-4 cursor-pointer`}
          >
            <span
              className={`absolute top-3 right-3 text-sky-500 ${
                type === "rider"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50 pointer-events-none"
              }`}
            >
              <LucideCircleCheck />
            </span>
            <span
              className={`${type === "rider" && "text-sky-500"} text-gray-700  transition-colors  ease-in-out`}
            >
              <BaggageClaim size={55} />
            </span>
            <span
              className={`${type === "rider" && "text-sky-500"} font-semibold  transition-colors `}
            >
              مسافر
            </span>
            <p className={"text-xs leading-5 text-gray-700"}>
              "سفر کنید و بسته‌ها رو حمل کنید، در کنار سفر، درآمد هم داشته
              باشید!"
            </p>
          </div>
          <div
            role={"button"}
            onClick={() => setType("sender")}
            className={`${type === "sender" && "border-sky-500"} relative group flex flex-col items-center border border-border transition-all  hover:border-gray-400 hover:shadow-md rounded-xl py-18 pb-22 px-6 gap-4 cursor-pointer`}
          >
            <span
              className={`absolute top-3 right-3 text-sky-500 ${
                type === "sender"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50 pointer-events-none"
              }`}
            >
              <LucideCircleCheck />
            </span>
            <span
              className={`${type === "sender" && "text-sky-500"} text-gray-700  transition-colors  ease-in-out`}
            >
              <PackagePlus size={55} />
            </span>
            <span
              className={`${type === "sender" && "text-sky-500"} font-semibold`}
            >
              فرستنده
            </span>
            <p className={"text-xs leading-5 text-gray-700"}>
              "بسته ات را در هر زمان و مکان سریع ارسال کن حتی روز های تعطیل!"
            </p>
          </div>
        </div>
        <div className={"flex justify-center mt-8"}>
          <Button
            isDisabled={!type}
            size={"lg"}
            className={"rounded-[14px] w-42 h-10"}
          >
            ادامه
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Select;
