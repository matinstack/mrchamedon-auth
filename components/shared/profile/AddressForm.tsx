// AddressForm.tsx
"use client";
import { useEffect } from "react";

interface AddressFormProps {
  onNext: (data: AuthStep2Data) => void;
  onPrev: () => void;
  defaultValues?: AuthStep2Data | null;
}
import CardWrapper from "@/components/shared/profile/CardWrapper";
import {
  Button,
  FieldError,
  Input,
  Label,
  Select,
  ListBox,
  TextField,
} from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthStep2Data, authStep2Schema } from "@/schema";

const provinces = [
  { id: "azarbaijan-sharghi", name: "آذربایجان شرقی" },
  { id: "azarbaijan-gharbi", name: "آذربایجان غربی" },
  { id: "ardabil", name: "اردبیل" },
  { id: "esfahan", name: "اصفهان" },
  { id: "alborz", name: "البرز" },
  { id: "ilam", name: "ایلام" },
  { id: "bushehr", name: "بوشهر" },
  { id: "tehran", name: "تهران" },
  { id: "chaharmahal-bakhtiari", name: "چهارمحال و بختیاری" },
  { id: "khorasan-jonubi", name: "خراسان جنوبی" },
  { id: "khorasan-razavi", name: "خراسان رضوی" },
  { id: "khorasan-shomali", name: "خراسان شمالی" },
  { id: "khuzestan", name: "خوزستان" },
  { id: "zanjan", name: "زنجان" },
  { id: "semnan", name: "سمنان" },
  { id: "sistan-baluchestan", name: "سیستان و بلوچستان" },
  { id: "fars", name: "فارس" },
  { id: "qazvin", name: "قزوین" },
  { id: "qom", name: "قم" },
  { id: "kordestan", name: "کردستان" },
  { id: "kerman", name: "کرمان" },
  { id: "kermanshah", name: "کرمانشاه" },
  { id: "kohgiluyeh-boyerahmad", name: "کهگیلویه و بویراحمد" },
  { id: "golestan", name: "گلستان" },
  { id: "gilan", name: "گیلان" },
  { id: "lorestan", name: "لرستان" },
  { id: "mazandaran", name: "مازندران" },
  { id: "markazi", name: "مرکزی" },
  { id: "hormozgan", name: "هرمزگان" },
  { id: "hamedan", name: "همدان" },
  { id: "yazd", name: "یزد" },
];

const AddressForm = ({ onNext, onPrev, defaultValues }: AddressFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AuthStep2Data>({
    resolver: zodResolver(authStep2Schema),
    defaultValues: defaultValues || {
      province: "",
      city: "",
      neighbor: "",
      address: "",
      postalCode: "",
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const onSubmit = (data: AuthStep2Data) => {
    console.log("Step 2 Data:", data);
    onNext(data);
  };

  return (
    <CardWrapper headerLabel={"آدرس"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 sm:px-11 pt-8 sm:pt-12 pb-6 sm:pb-10 mb-4 rounded-lg shadow-[-1px_-1px_4px_#57575717_inset,_1px_1px_4px_#57575717_inset]">
          <div className="flex flex-col md:flex-row gap-3 mb-4 sm:mb-6">
            <TextField className="gap-4 w-full" isInvalid={!!errors.province}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                استان
              </Label>
              <Controller
                name="province"
                control={control}
                render={({ field }) => (
                  <Select
                    className="w-full"
                    placeholder="انتخاب استان"
                    variant="secondary"
                    selectedKey={field.value}
                    onSelectionChange={(key) => field.onChange(key)}
                  >
                    <Select.Trigger className="rounded-lg border-border/60 text-right relative">
                      <span className="absolute top-[50%] left-10">
                        <Select.Indicator className="order-last" />
                      </span>
                      <Select.Value className="text-right w-full" />
                    </Select.Trigger>
                    <Select.Popover className="rounded-lg" dir="rtl">
                      <ListBox className="rounded-lg" dir="rtl">
                        {provinces.map((province) => (
                          <ListBox.Item
                            key={province.id}
                            className="rounded-lg"
                            id={province.id}
                            textValue={province.name}
                          >
                            {province.name}
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                )}
              />
              {errors.province && (
                <FieldError className="text-xs">
                  {errors.province.message}
                </FieldError>
              )}
            </TextField>

            <TextField className="gap-4 w-full" isInvalid={!!errors.city}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                شهر
              </Label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Select
                    className="w-full"
                    placeholder="انتخاب شهر"
                    variant="secondary"
                    selectedKey={field.value}
                    onSelectionChange={(key) => field.onChange(key)}
                  >
                    <Select.Trigger className="rounded-lg border-border/60 text-right relative">
                      <span className="absolute top-[50%] left-10">
                        <Select.Indicator className="order-last" />
                      </span>
                      <Select.Value className="text-right w-full" />
                    </Select.Trigger>
                    <Select.Popover className="rounded-lg" dir="rtl">
                      <ListBox className="rounded-lg" dir="rtl">
                        {provinces.map((province) => (
                          <ListBox.Item
                            key={province.id}
                            className="rounded-lg"
                            id={province.id}
                            textValue={province.name}
                          >
                            {province.name}
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                )}
              />
              {errors.city && (
                <FieldError className="text-xs">
                  {errors.city.message}
                </FieldError>
              )}
            </TextField>
          </div>

          {/* ردیف دوم - محله و کد پستی */}
          <div className="flex flex-col md:flex-row gap-3 mb-4 sm:mb-6">
            <TextField className="gap-4 w-full" isInvalid={!!errors.neighbor}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                محله
              </Label>
              <Input
                {...register("neighbor")}
                className="rounded-lg border-border/60"
                placeholder="محله"
                dir="rtl"
                variant="secondary"
                maxLength={10}
              />
              {errors.neighbor && (
                <FieldError className="text-xs">
                  {errors.neighbor.message}
                </FieldError>
              )}
            </TextField>

            <TextField className="gap-4 w-full" isInvalid={!!errors.postalCode}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                کد پستی
              </Label>
              <Input
                {...register("postalCode")}
                className="rounded-lg border-border/60"
                placeholder="۱۲۳۴۵۶۷۸۹۰"
                dir="ltr"
                variant="secondary"
                maxLength={10}
              />
              {errors.postalCode && (
                <FieldError className="text-xs">
                  {errors.postalCode.message}
                </FieldError>
              )}
            </TextField>
          </div>

          {/* ردیف سوم - آدرس دقیق */}
          <div className="flex flex-col gap-3">
            <TextField className="gap-4 w-full" isInvalid={!!errors.address}>
              <Label
                isRequired
                className="text-xs text-gray-600 text-start flex gap-2"
              >
                آدرس دقیق
              </Label>
              <Input
                {...register("address")}
                className="rounded-lg border-border/60"
                placeholder="خیابان، کوچه، پلاک، واحد"
                dir="rtl"
                variant="secondary"
              />
              {errors.address && (
                <FieldError className="text-xs">
                  {errors.address.message}
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
            isDisabled={isSubmitting}
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

export default AddressForm;
