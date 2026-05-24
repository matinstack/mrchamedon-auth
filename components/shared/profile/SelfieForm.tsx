// SelfieForm.tsx
"use client";

import CardWrapper from "@/components/shared/profile/CardWrapper";
import { Button, Label } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthStep4Data, authStep4Schema } from "@/schema";
import { useState } from "react";

interface SelfieFormProps {
  onPrev: () => void;
  onSubmit: (data: AuthStep4Data) => void;
  defaultValues?: AuthStep4Data | null;
}

const SelfieForm = ({ onPrev, onSubmit, defaultValues }: SelfieFormProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AuthStep4Data>({
    resolver: zodResolver(authStep4Schema),
    defaultValues: defaultValues || {
      selfieVideo: undefined,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue("selfieVideo", file);
    }
  };

  const handleFinalSubmit = (data: AuthStep4Data) => {
    console.log("Step 4 Data:", data);
    console.log("Selected file:", selectedFile);
    onSubmit(data);
  };

  return (
    <CardWrapper headerLabel={"هویت خود را با سلفی تأیید کنید!"}>
      <form onSubmit={handleSubmit(handleFinalSubmit)}>
        <div className="px-11 pt-12 pb-10 mb-4 rounded-lg shadow-[-1px_-1px_4px_#57575717_inset,_1px_1px_4px_#57575717_inset]">
          <div className="text-xs text-gray-500 leading-6">
            <p className="mb-4">
              برای اطمینان از امنیت حساب خود و جلوگیری از فعالیت‌های غیرقانونی،
              از شما تقاضا می‌شود هویت خود را با استفاده از یک سلفی تأیید کنید.
            </p>

            <ol className="mb-3 space-y-1">
              <li>1- دوربین خود را روشن کنید.</li>
              <li>
                2- صورت خود را در قاب دوربین قرار دهید تا به طور کامل قابل
                مشاهده باشد.
              </li>
              <li>3- اطمینان حاصل کنید که در مکانی با نور کافی هستید.</li>
              <li>
                4- به مدت{" "}
                <span className="font-semibold text-sm text-red-500">
                  5 ثانیه
                </span>{" "}
                از خود ویدئو سلفی ضبط کنید و بر روی دکمه ارسال کلیک کنید.
              </li>
            </ol>

            <h5 className="text-gray-800 text-sm font-semibold mt-4">نکات:</h5>
            <ul className="space-y-1">
              <li>
                - نتیجه بررسی احراز هویت شما تا نهایت 10 دقیقه بعد از ارسال
                ویدئو سلفی مشخص می‌شود.
              </li>
              <li>
                - از عینک آفتابی، کلاه یا سایر پوشش‌هایی که ممکن است چهره شما را
                پنهان کنند، استفاده نکنید.
              </li>
              <li>- در مکانی آرام و بدون سر و صدای زیاد باشید.</li>
              <li>- حجم ویدئو کمتر از 15 مگابایت باشد.</li>
              <li>- فرمت‌های مجاز: mp4 , mov</li>
            </ul>

            <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="video/mp4,video/mov"
                onChange={handleFileChange}
                className="hidden"
                id="video-upload"
              />

              {selectedFile ? (
                <div className="text-green-600">
                  <p className="font-semibold">{selectedFile.name}</p>
                  <p className="text-xs">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                  <Button
                    size="sm"
                    className="rounded-lg text-xs mt-2"
                    onClick={() =>
                      document.getElementById("video-upload")?.click()
                    }
                  >
                    تغییر فایل
                  </Button>
                </div>
              ) : (
                <Button
                  size="lg"
                  className="rounded-lg text-sm"
                  onClick={() =>
                    document.getElementById("video-upload")?.click()
                  }
                >
                  آپلود ویدئو
                </Button>
              )}

              {/* 👈 ارور رو ببر بیرون از شرط، اینجا */}
              {errors.selfieVideo && (
                <p className="text-red-500 text-xs mt-3">
                  {errors.selfieVideo.message?.toString() ||
                    "لطفاً ویدئو سلفی را آپلود کنید"}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            type="button"
            onClick={onPrev}
            size="lg"
            variant="tertiary"
            className="text-sm rounded-lg text-gray-500"
          >
            مرحله قبل
          </Button>
          <Button
            type="submit"
            size="lg"
            className="text-sm rounded-lg bg-green-600 text-white"
          >
            ثبت نهایی
          </Button>
        </div>
      </form>
    </CardWrapper>
  );
};

export default SelfieForm;
