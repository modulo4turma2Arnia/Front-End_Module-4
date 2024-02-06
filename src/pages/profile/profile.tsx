import React, { useState } from "react";
import * as C from "./style/style";
import { Header } from "../../components/ui/header/Header";
import { ProfileMenu } from "../../components/ui/profileMenu/profileMenu";
import { IoDiamondOutline, IoExitOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { LuTicket } from "react-icons/lu";
import { Link } from "react-router-dom";

export const Profile: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  
  return (
    <>
      <Header textColor="#502B6B"/>
      <C.Menu>
        <ProfileMenu title="Meus dados" icon={<GoPerson size={33}/>} />
        <C.Bar></C.Bar>
        <ProfileMenu title="Meus resgates" icon={<LuTicket size={33}/>} />
        <C.Bar></C.Bar>
        <ProfileMenu title="Minhas Jóias" icon={<IoDiamondOutline size={33}/>} />
        <C.Bar></C.Bar>
        <Link to="/">
         <ProfileMenu title="Sair" icon={<IoExitOutline size={33}/>} />
        </Link>
      </C.Menu>
      
    </>
  );
};