import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./config_env";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const [authorized,setauthorized] = useState()
  const navigate = useNavigate();
  
  const loginAction = async (data) => {
    const postData = new FormData();
          postData.append('email',data.email)
          postData.append('password', data.password);
    try {
      console.log("Try fetch")
      const response = await fetch(`${BASE_URL}/api/post/userAuth.php`, {
        method: "POST",
        body: postData
      });
      const res = await response.json();
      if (res.transition && res.is_admin ) {        
        setUser(data);
        setToken(data.email);
        localStorage.setItem("site", data.email);
        navigate("/panel/dashboard");
      }

      
    } catch (err) {
      console.error(err);
    }

  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/panel/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut}}>
      {children}
    </AuthContext.Provider>
  );

};


export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};