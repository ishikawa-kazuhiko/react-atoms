import { createContext, useState } from "react";

//初期化は空のオブジェクトを与える
export const UserContext = createContext({});

//最初はわかりづらいので、お決まりとして考える
export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
