
import { useContext, createContext, useState } from "react";
import { signin as signinFn, fetchMe} from "../../services";

import { useNavigate } from "react-router-dom";
const AuthContext = createContext<any>(null);

interface AuthProviderProps{
  children:React.ReactNode;
}
export const AuthProvider = ({ children }:AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  const loginAction = async (data:{email:string,password:string}) => {
    try {
      const res = await signinFn(data);
      // console.log("res",res);
      if (res.data) {
        setUser(res.data);
        setToken(res.accessToken);
        localStorage.setItem("site", res.accessToken);
        navigate("/admin/dashboard");
        return;
      }
    } catch (err) {
      // throw new Error(res.message);
      console.error(err);
    }
  };

  const getInfo = async () => {
    try {
      const res = await fetchMe();
      // console.log("res",res);
      if (res) {
        return res;
      }
    } catch (err) {
      // throw new Error(res.message);
      console.error(err);
      return null;
    }
  };

  const logOut = () => {

    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, getInfo, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=() =>{  
  const context= useContext(AuthContext);
  return context;
};

