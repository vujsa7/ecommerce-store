"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import StoreLogo from "../components/StoreLogo";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex w-full">
      <div className="h-screen bg-fw-blue w-1/5 p-11">
        <StoreLogo />
      </div>
      
      {/* <button
        onClick={() =>
          signOut({ redirect: false }).then(() => {
            router.push("/");
          })
        }
      >
        Sign out
      </button> */}
    </div>
  );
};

export default Home;
