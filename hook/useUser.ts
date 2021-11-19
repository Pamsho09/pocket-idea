import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../firebase/config";
import { useRouter } from "next/router";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    console.log("useUser", user);
    if (router.pathname !== "/singin") {
      user === USER_STATES.NOT_LOGGED && router.push("/loging");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  

  return user;
}
