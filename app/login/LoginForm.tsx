"use client";

import Button from "@/app/components/Button";
import TextInput from "@/app/components/TextInput";

const LoginForm = () => {
  return (
    <div>
      <TextInput className="mb-10 w-full" label="Email" />
      <TextInput type="password" className="mb-5 w-full" label="Password" />
      <span className="inline-block text-sm mb-7 cursor-pointer text-fw-darkgrey underline">
        Forgot Password?
      </span>
      <Button className="w-full" onClick={() => {}}>
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
