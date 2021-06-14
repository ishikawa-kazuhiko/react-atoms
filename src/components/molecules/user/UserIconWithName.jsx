import { memo } from "react";
// import { memo, useContext } from "react";

import styled from "styled-components";
import { useRecoilValue } from "recoil";
// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);

  //userInfoがnullのとき、falseとして取得できる
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  // console.log(userInfo);
  return (
    <Scontainer>
      <SImage height={160} width={120} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </Scontainer>
  );
});

const Scontainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
