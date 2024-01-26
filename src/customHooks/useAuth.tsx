import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { ApplicationStatus, auth } from "../firebase/firebaseAuth";
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { driverDataCollection } from "../firebase/firebaseConfig";

interface AuthContextValue {
  currentUser: User | null;
  signin: (credentials: { email: string; password: string }) => Promise<void>;
  signup: (credentials: {
    email: string;
    password: string;
    userName: string;
  }) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface SignupProps {
  email: string;
  password: string;
  userName: string;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async ({
    email,
    password,
    userName,
  }: SignupProps): Promise<void> => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential: UserCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: userName });
        const specificId = user?.uid;
        const specificDocRef = doc(driverDataCollection, specificId);
        setDoc(specificDocRef, { status: ApplicationStatus.NotApplied });
      }
    );
  };

  const logout = () => {
    return signOut(auth);
  };

  const authValue: AuthContextValue = {
    currentUser,
    signin,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
