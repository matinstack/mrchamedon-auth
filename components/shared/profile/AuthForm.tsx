"use client";
import CardWrapper from "@/components/shared/profile/CardWrapper";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { DatePickerField } from "@/components/ui/DatePickerField";
import { Controller, useForm } from "react-hook-form";
import { AuthStep1Data, authStep1Schema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

interface AuthFormProps {
  onNext: (data: AuthStep1Data) => void;
  defaultValues?: AuthStep1Data | null;
}

const AuthForm = ({ onNext, defaultValues }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AuthStep1Data>({
    resolver: zodResolver(authStep1Schema),
    defaultValues: defaultValues || {
      name: "",
      lastName: "",
      phone: "09139760021",
      email: "",
      gender: undefined,
      birthDate: "",
    },
  });

  const onSubmit = (data: AuthStep1Data) => {
    console.log("Step 1 Data:", data);
    onNext(data);
  };

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <CardWrapper headerLabel={"اطلاعات فردی"}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={
            "px-4 sm:px-11 pt-8 sm:pt-12 pb-6 sm:pb-10 mb-4 rounded-lg shadow-[-1px_-1px_4px_#57575717_inset,_1px_1px_4px_#57575717_inset]"
          }
        >
          {/* ردیف اول - اطلاعات شخصی */}
          <div className={"flex flex-col md:flex-row gap-3 mb-4  sm:mb-6"}>
            <TextField className={"gap-4 w-full"} isInvalid={!!errors.name}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                نام
              </Label>
              <Input
                {...register("name")}
                id="name"
                autoFocus
                className="rounded-lg border-border/60"
                placeholder="ابراهیم"
                autoComplete="tel"
                dir="rtl"
                variant={"secondary"}
              />
              {errors.name && (
                <FieldError className="text-xs">
                  {errors.name.message}
                </FieldError>
              )}
            </TextField>

            <TextField className={"gap-4 w-full"} isInvalid={!!errors.lastName}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                نام خانوادگی
              </Label>
              <Input
                {...register("lastName")}
                id="lastName"
                className="rounded-lg border-border/60"
                placeholder="هادی"
                autoComplete="tel"
                dir="rtl"
                variant={"secondary"}
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <FieldError className="text-xs">
                  {errors.lastName.message}
                </FieldError>
              )}
            </TextField>

            <TextField className={"gap-4 w-full"}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                شماره تلفن همراه
              </Label>
              <Input
                {...register("phone")}
                id="phone"
                className="rounded-lg border-border/60 disabled:cursor-not-allowed bg-gray-50"
                placeholder="09139760021"
                value={"09139760021"}
                autoComplete="tel"
                dir="ltr"
                variant={"secondary"}
                disabled
              />
            </TextField>
          </div>

          <div className={"flex flex-col md:flex-row gap-3"}>
            <TextField className={"gap-4 w-full"} isInvalid={!!errors.email}>
              <Label className="text-xs text-gray-600 text-start flex gap-2">
                ایمیل
              </Label>
              <Input
                {...register("email")}
                id="email"
                className="rounded-lg border-border/60"
                placeholder="hello@example.com"
                autoComplete="tel"
                dir="ltr"
                variant={"secondary"}
              />
              {errors.email && (
                <FieldError className="text-xs">
                  {errors.email.message}
                </FieldError>
              )}
            </TextField>

            <TextField className={"gap-4 w-full"} isInvalid={!!errors.gender}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                جنسیت
              </Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    className="w-full"
                    placeholder="انتخاب جنسیت"
                    variant="secondary"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <Select.Trigger className="rounded-lg border-border/60 text-right relative">
                      <span className={"absolute top-[50%] left-10"}>
                        <Select.Indicator className="order-last " />
                      </span>
                      <Select.Value className="text-right w-full" />
                    </Select.Trigger>
                    <Select.Popover className="rounded-lg" dir="rtl">
                      <ListBox className="rounded-lg" dir="rtl">
                        <ListBox.Item
                          className="rounded-lg"
                          id="male"
                          textValue="مرد"
                        >
                          مرد
                        </ListBox.Item>
                        <ListBox.Item
                          className="rounded-lg"
                          id="female"
                          textValue="زن"
                        >
                          زن
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                )}
              />
              {errors.gender && (
                <span className="text-red-500 text-xs">
                  {errors.gender.message}
                </span>
              )}
            </TextField>

            <TextField className="gap-4 w-full" isInvalid={!!errors.birthDate}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                تاریخ تولد
              </Label>
              <Controller
                name="birthDate"
                control={control}
                render={({ field }) => (
                  <DatePickerField
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.birthDate && (
                <FieldError className="text-xs">
                  {errors.birthDate.message}
                </FieldError>
              )}
            </TextField>
          </div>
        </div>

        <div className={"flex justify-between px-4 sm:px-0"}>
          <Button
            type={"reset"}
            size={"lg"}
            variant={"tertiary"}
            className={"text-sm rounded-lg text-gray-500"}
          >
            لغو
          </Button>
          <Button
            type={"submit"}
            size={"lg"}
            className={
              "text-sm rounded-lg bg-sky-500 hover:bg-sky-600 text-white"
            }
          >
            ثبت و ادامه
          </Button>
        </div>
      </Form>
    </CardWrapper>
  );
};

export default AuthForm;
