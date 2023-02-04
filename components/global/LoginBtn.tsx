import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../global/Button";
import placeholderImage from "../../public/heroImage.jpeg";
import Spinner from "./Spinner";

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
      <div className="flex items-center space-x-2">
        <Image
          src={session?.user?.image || placeholderImage}
          alt={session?.user?.name || "Login or Sign Up"}
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="flex items-center space-x-2"></div>
    </div>
  );
};
export default AuthBtn;
