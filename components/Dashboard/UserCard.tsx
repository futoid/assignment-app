import { useState } from "react";
import NoUser from "../User/noUser";
import useUser from "../../hooks/useUser";
import User from "../User/User";

const UserCard = () => {

  const user = useUser();
  return (
    <div>
      {user.isOpen ? (
        <User/>
      ) : (
        <NoUser/>
      )}
    </div>
  );
}

export default UserCard;