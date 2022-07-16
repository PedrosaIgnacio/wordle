import React, { ReactElement, ReactNode, useEffect } from "react";
import { createContext, useState } from "react";
import { SyncLoader } from "react-spinners";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

interface IUserContextValues {
  email: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
}

interface IUserProviderValues {
  children: ReactNode;
}

const UserContext = createContext<IUserContextValues>({
  email: "",
  login: async () => {},
  logout: async () => {},
  loading: true,
  signUp: async () => {},
});

const UserProvider = ({ children }: IUserProviderValues): ReactElement => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth();

  useEffect(() => {
    const eventChange = onAuthStateChanged(auth, (state) => {
      if (state !== null && state.email !== null) {
        setEmail(state.email);
      }
      setLoading(false);
    });
    return () => {
      eventChange();
    };
  }, [auth]);

  const signUp = async (email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user && res.user.email != null) {
        setEmail(res.user.email);
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        if (error.code === "auth/email-already-exists") {
          throw new Error("Email already exist");
        } else if (error.code === "auth/invalid-email") {
          throw new Error("Invalid Email");
        }
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user && res.user.email != null) {
        setEmail(res.user.email);
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        if (error.code === "auth/user-not-found") {
          throw new Error("Email doesn't exist");
        } else if (error.code === "auth/invalid-email") {
          throw new Error("Invalid Email");
        }
      }
    }
  };

  const logout = async () => {
    setEmail("");
    await signOut(auth);
  };

  return (
    <UserContext.Provider
      value={{ email: email, login, logout, loading, signUp }}
    >
      {!loading ? (
        children
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <SyncLoader />
        </div>
      )}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };
