import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from '../components/auth/config';

const initApp = initializeApp(firebaseConfig);
const auth = getAuth(initApp);

type AuthProviderProps = {
  children: React.ReactNode;
};
type userType = { email: string | null; accessToken: string } | null;
type AuthContextType = {
  token: string;
  user: userType;
  loginAction: (email: string, password: string) => Promise<any>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<userType>({ email: localStorage.getItem("email"), accessToken: "" });
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async (email: string, password: string): Promise<any> => {

    await signInWithEmailAndPassword(auth, email, password).then(async (result) => {
      console.log("success", result)
      const resEmail = result.user.email;
      const resToken = await result.user.getIdToken();
      if (resEmail) {
        setUser({ email: resEmail, accessToken: resToken });
        setToken(resToken);
        localStorage.setItem("site", resToken);
        localStorage.setItem("email", resEmail?.toString());
        navigate("/");
      }
      return;
    }).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      return;
    });
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
    setToken("");
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logout }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = (): any => {
  return useContext(AuthContext);
};