import React from "react";
import UserList from "../components/UserList";
import userAvatar1 from "../../assets/images/user/1.png";
import userAvatar2 from "../../assets/images/user/2.png";
import userAvatar3 from "../../assets/images/user/3.png";
const Users = () => {
  const users = [
    { id: "u1", image: userAvatar1, name: "Max", places: 3 },
    { id: "u2", image: userAvatar2, name: "Jon", places: 3 },
    { id: "u3", image: userAvatar3, name: "Smith", places: 3 },
  ];

  return <UserList items={users} />;
};

export default Users;
