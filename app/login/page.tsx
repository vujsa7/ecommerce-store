import Button from "@/components/Button";
import StoreLogo from "@/components/StoreLogo";
import TextInput from "@/components/TextInput";
import LoginForm from "./LoginForm";

const page = () => {
  // const onLogin = (): void => {
  //   console.log("clicked");
  // };

  return (
    <div className="flex w-full">
      <div className="w-1/4 h-screen bg-fw-blue"></div>
      <div className="w-3/4 h-screen flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col w-96">
          <StoreLogo className="mb-16 self-center" />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
