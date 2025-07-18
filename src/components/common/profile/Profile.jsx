import { Avatar } from "flowbite-react";
import { useState } from "react";

export const UserAvatar = () => {

    const [name, setName ] = useState('Usman Alkali Baba')
    const [email, setEmail] = useState('Neilsonmike14@gmail.com')
  return (
    <div className="flex gap-4">
        <Avatar
          img="/images/avatar.svg"
          rounded
          alt="User profile"
        />
        <div>
            <h2 className="text-p-black font-semibold text-[14px]">{name}</h2>
            <p className="text-p-primary-text font-normal text-[12px]">{email}</p>
        </div>
    </div>
  );
};
