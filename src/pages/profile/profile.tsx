import React, { useState } from "react";
import * as C from "./style/style";
import { Header } from "../../components/ui/header/Header";
import { ProfileMenu } from "../../components/ui/profileMenu/profileMenu";
import { IoDiamondOutline, IoExitOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { LuTicket } from "react-icons/lu";
import { Link } from "react-router-dom";
import { DataCard } from "../../components/ui/profileCard/dataCard/dataCard";
import { RescCard } from "../../components/ui/profileCard/rescCard/rescCard";
import { JewerlyCard } from "../../components/ui/profileCard/jewerlyCard/jewerlyCard";

export const Profile = () => {
  const [isActiveData, setIsActiveData] = useState(true);
  const [isActiveResc, setIsActiveResc] = useState(false);
  const [isActiveJewerly, setIsActiveJewerly] = useState(false);

  const showMenuContentData = () => {
    setIsActiveJewerly(false);
    setIsActiveResc(false);
    setIsActiveData(true);
  };

  const showMenuContentResc = () => {
    setIsActiveData(false);
    setIsActiveJewerly(false);
    setIsActiveResc(true);
  };

  const showMenuContentJewerly = () => {
    setIsActiveData(false);
    setIsActiveResc(false);
    setIsActiveJewerly(true);
  };

  return (
    <>
      <Header textColor="#502B6B" />
      <C.Menu>
        <ProfileMenu
          action={() => showMenuContentData()}
          title="Meus dados"
          icon={<GoPerson size={33} />}
        />
        {isActiveData && <DataCard />}
        <C.Bar></C.Bar>
        <ProfileMenu
          action={() => showMenuContentResc()}
          title="Meus resgates"
          icon={<LuTicket size={33} />}
        />
        {isActiveResc && <RescCard />}
        <C.Bar></C.Bar>
        <ProfileMenu
          action={() => showMenuContentJewerly()}
          title="Minhas jóias"
          icon={<IoDiamondOutline size={33} />}
        />
        {isActiveJewerly && <JewerlyCard />}
        <C.Bar></C.Bar>
        <Link to="/">
        <ProfileMenu title="Sair" icon={<IoExitOutline size={33}/>} />
        </Link>
      </C.Menu>
    </>
  );
};
