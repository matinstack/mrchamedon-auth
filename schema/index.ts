import { z } from "zod";

export const authStep1Schema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
  lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل نامعتبر است"),
  email: z.email("ایمیل نامعتبر است").optional().or(z.literal("")),
  gender: z.enum(["male", "female"], "جنسیت را انتخاب کنید"),
  birthDate: z.string().min(1, "تاریخ تولد را انتخاب کنید"),
});

const persianRegex = /^[\u0600-\u06FF\s]+$/;

export const authStep2Schema = z.object({
  province: z.string().min(1, "فیلد استان الزامی است"),
  city: z.string().min(1, "فیلد شهر الزامی است"),
  neighbor: z
    .string()
    .min(1, "فیلد محله الزامی است")
    .regex(persianRegex, "محله باید فارسی باشد"),
  postalCode: z
    .string()
    .length(10, "کد پستی باید ۱۰ رقمی باشد")
    .regex(/^\d+$/, "کد پستی فقط باید عدد باشد"),
  address: z
    .string()
    .min(10, "آدرس باید حداقل ۱۰ کاراکتر باشد")
    .regex(persianRegex, " نام آدرس باید فارسی باشد"),
});

export const authStep3Schema = z.object({
  nationalCode: z.string().length(10, "کد ملی باید ۱۰ رقمی باشد"),
  nationalCodeSerial: z.string().length(10, "سریال کارت ملی الزامی است"),
});

export const authStep4Schema = z.object({
  selfieVideo: z.any().refine((val) => val !== undefined && val !== null, {
    message: "آپلود ویدئو سلفی الزامی است",
  }),
});
export type AuthStep1Data = z.infer<typeof authStep1Schema>;
export type AuthStep2Data = z.infer<typeof authStep2Schema>;
export type AuthStep3Data = z.infer<typeof authStep3Schema>;
export type AuthStep4Data = z.infer<typeof authStep4Schema>;
