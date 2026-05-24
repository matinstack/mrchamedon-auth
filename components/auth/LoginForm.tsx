import Header from "@/components/auth/Header";
import CardWrapper from "@/components/auth/CardWrapper";
import { Form, Input, Label, TextField } from "@heroui/react";

const LoginForm = () => {
  return (
    <>
      <CardWrapper
        backButtonHref={"/register"}
        BackButtonLabel={"در سایت اکانت دارید؟"}
        headerLabel={"ثبت نام"}
      >
        <Form>
          <TextField>
            <Label isRequired className="text-xs text-start flex gap-2">
              شماره تلفن همراه
            </Label>
            <Input
              id="phone"
              className="rounded-full border-border/60"
              placeholder="09117355608"
              autoComplete="tel"
              dir="ltr"
              // disabled={isSubmitting}
            />
            {/*{errors.phone && (*/}
            {/*  <FieldError className="text-xs">*/}
            {/*    {errors.phone.message}*/}
            {/*  </FieldError>*/}
            {/*)}*/}
          </TextField>
          <TextField>
            <Label isRequired className="text-sm text-start flex gap-2">
              شماره تماس
            </Label>
            <Input
              id="phone"
              className="rounded-full border-border/60"
              placeholder="09117355608"
              autoComplete="tel"
              dir="ltr"
              // disabled={isSubmitting}
            />
            {/*{errors.phone && (*/}
            {/*  <FieldError className="text-xs">*/}
            {/*    {errors.phone.message}*/}
            {/*  </FieldError>*/}
            {/*)}*/}
          </TextField>
        </Form>
      </CardWrapper>
    </>
  );
};

export default LoginForm;
