import Button from "@/app/components/Button";
import TextInput from "@/app/components/TextInput";
import { getCsrfToken } from "next-auth/react";

const LoginForm = async () => {
  const csrfToken = await getCsrfToken();

  return (
    <form method="post" action="/api/auth/signin/cognito/">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <TextInput className="mb-10 w-full" label="Email" name="email" />
      <TextInput
        type="password"
        className="mb-5 w-full"
        label="Password"
        name="password"
      />
      <span className="inline-block text-sm mb-7 cursor-pointer text-fw-darkgrey underline">
        Forgot Password?
      </span>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
