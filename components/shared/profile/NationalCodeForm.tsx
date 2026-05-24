// NationalCodeForm.tsx
"use client";

import CardWrapper from "@/components/shared/profile/CardWrapper";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthStep3Data, authStep3Schema } from "@/schema";
import { useEffect } from "react";

interface NationalCodeFormProps {
  onNext: (data: AuthStep3Data) => void;
  onPrev: () => void;
  defaultValues?: AuthStep3Data | null;
}

const NationalCodeForm = ({
  onNext,
  onPrev,
  defaultValues,
}: NationalCodeFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthStep3Data>({
    resolver: zodResolver(authStep3Schema),
    defaultValues: defaultValues || {
      nationalCode: "",
      nationalCodeSerial: "",
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const onSubmit = (data: AuthStep3Data) => {
    console.log("Step 3 Data:", data);
    onNext(data);
  };

  return (
    <CardWrapper headerLabel={"اطلاعات هویتی"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 sm:px-11 pt-8 sm:pt-12 pb-6 sm:pb-10 mb-4 rounded-lg shadow-[-1px_-1px_4px_#57575717_inset,_1px_1px_4px_#57575717_inset]">
          <div className="flex flex-col md:flex-row gap-3 mb-4 sm:mb-6">
            <TextField
              className="gap-4 w-full"
              isInvalid={!!errors.nationalCode}
            >
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                کد ملی
              </Label>
              <Input
                {...register("nationalCode")}
                className="rounded-lg border-border/60"
                placeholder="۱۲۳۴۵۶۷۸۹۰"
                dir="ltr"
                autoFocus
                variant="secondary"
                maxLength={10}
              />
              {errors.nationalCode && (
                <FieldError className="text-xs">
                  {errors.nationalCode.message}
                </FieldError>
              )}
            </TextField>

            <TextField
              className="gap-4 w-full"
              isInvalid={!!errors.nationalCodeSerial}
            >
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                سریال کارت ملی
              </Label>
              <Input
                {...register("nationalCodeSerial")}
                className="rounded-lg border-border/60"
                placeholder="۱۲۳۴۵۶۷۸۹۰"
                dir="ltr"
                variant="secondary"
                maxLength={10}
              />
              {errors.nationalCodeSerial && (
                <FieldError className="text-xs">
                  {errors.nationalCodeSerial.message}
                </FieldError>
              )}
            </TextField>
          </div>
        </div>

        <div className="flex justify-between px-4 sm:px-0">
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
            className="text-sm rounded-lg bg-sky-500 hover:bg-sky-600 text-white"
          >
            ثبت و ادامه
          </Button>
        </div>
      </form>
    </CardWrapper>
  );
};

export default NationalCodeForm;
