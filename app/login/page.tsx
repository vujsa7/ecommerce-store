import StoreLogo from "@/app/components/StoreLogo";
import LoginForm from "./LoginForm";

const page = () => {
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
