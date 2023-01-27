import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import placeholderImage from "../public/heroImage.jpeg";
import { Button } from "./Button";
import Spinner from "./Spinner";
import { useRouter } from "next/router";

const AuthBtn = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Spinner />;
  }
  if (status === "unauthenticated") {
    return (
      <div className="auth-btn">
        <Button
          onClick={() => router.push("/auth/signin")}
          className="text-sm text-white"
        >
          Login
        </Button>
      </div>
    );
  }
  return (
    <div className="flex h-8">
      <div className="flex pr-2 items-center space-x-2">
        <Image
          src={session?.user?.image || placeholderImage}
          alt={session?.user?.name || "Login or Sign Up"}
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Button onClick={() => signOut()} className="text-sm text-white">
          Logout
        </Button>
      </div>
    </div>
  );
};
export default AuthBtn;
