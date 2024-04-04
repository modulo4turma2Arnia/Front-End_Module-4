<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
import * as C from "./style/style";
import * as React from "react";
import { Header } from "../../components/ui/header/Header";
import { ProfileMenu } from "../../components/ui/profileMenu/profileMenu";
import { IoDiamondOutline, IoExitOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { LuTicket } from "react-icons/lu";
import { Link } from "react-router-dom";
import { DataCard } from "../../components/ui/profileCard/dataCard/dataCard";
import { RescCard } from "../../components/ui/profileCard/rescCard/rescCard";
import { JewerlyCard } from "../../components/ui/profileCard/jewerlyCard/jewerlyCard";
import { GetDataUser } from "../../requests/profile";
<<<<<<< HEAD
=======
import { UserDataProps } from "../../types/userProps/UserProps";
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592


export const Profile: React.FC = () => {
  const [isActiveData, setIsActiveData] = React.useState(true);
  const [isActiveResc, setIsActiveResc] = React.useState(false);
  const [isActiveJewerly, setIsActiveJewerly] = React.useState(false);  
<<<<<<< HEAD
  const [data,setData] = useState({})


useEffect(() => {
=======
  const [data, setData] = React.useState<UserDataProps | null>(null)


React.useEffect(() => {
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
  const userInfoData = async () => {
    try {
      const userData = await GetDataUser()
      setData(userData)
    } catch (err) {
      if(err instanceof Error){
        console.error(err.message)
      }
    }
  }
  userInfoData()
},[])

  const showMenuContentData = () => {
    setIsActiveJewerly(false)
    setIsActiveResc(false)
    setIsActiveData(true)
  }

  const showMenuContentResc = () => {
    setIsActiveData(false)
    setIsActiveJewerly(false)
    setIsActiveResc(true)
  }

  const showMenuContentJewerly = () => {
    setIsActiveData(false)
    setIsActiveResc(false)
    setIsActiveJewerly(true)
  };

  return (
    <>
      <Header textColor="#502B6B" />
      {/* <button onClick={hendleData}>TESTE</button> */}
      <C.Menu>
        <ProfileMenu
          actionOpen={() => showMenuContentData()}
          title="Meus dados"
          icon={<GoPerson size={33} />}
        />
<<<<<<< HEAD
        {isActiveData && <DataCard dataUser={data}/>}
=======
        {isActiveData && data && <DataCard dataUser={data}/>}
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
        <C.Bar></C.Bar>
        <ProfileMenu
          actionOpen={() => showMenuContentResc()}
          title="Meus resgates"
          icon={<LuTicket size={33} />}
        />
<<<<<<< HEAD
        {isActiveResc && <RescCard dataUser={data}/>}
=======
        {isActiveResc && data && <RescCard dataUser={data}/>}
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
        <C.Bar></C.Bar>
        <ProfileMenu
          actionOpen={() => showMenuContentJewerly()}
          title="Minhas jóias"
          icon={<IoDiamondOutline size={33} />}
        />
<<<<<<< HEAD
        {isActiveJewerly && <JewerlyCard dataUser={data}/>}
=======
        {isActiveJewerly && data && <JewerlyCard dataUser={data}/>}
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
        <C.Bar></C.Bar>
        <Link to="/">
          <ProfileMenu title="Sair" icon={<IoExitOutline size={33}/>} />
        </Link>
      </C.Menu>
    </>
  )
}