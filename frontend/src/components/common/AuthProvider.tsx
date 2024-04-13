
import { useContext, createContext, useState } from "react";
import { signin as signinFn} from "../../services";

import { useNavigate } from "react-router-dom";
const AuthContext = createContext<any>(null);

interface AuthProviderProps{
  children:React.ReactNode;
}
export const AuthProvider = ({ children }:AuthProviderProps) => {
  const [user, setUser] = useState(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user") as string):null);
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
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/admin/dashboard");
        return;
      }
    } catch (err) {
      // throw new Error(res.message);
      console.error(err);
    }
  };

  const logOut = () => {

    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=() =>{  
  const context= useContext(AuthContext);
  return context;
};

