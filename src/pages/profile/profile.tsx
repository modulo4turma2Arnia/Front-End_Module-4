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
import { UserDataProps } from "../../types/userProps/UserProps";


export const Profile: React.FC = () => {
  const [isActiveData, setIsActiveData] = React.useState(true);
  const [isActiveResc, setIsActiveResc] = React.useState(false);
  const [isActiveJewerly, setIsActiveJewerly] = React.useState(false);  
  const [data, setData] = React.useState<UserDataProps | null>(null)


React.useEffect(() => {
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
      <C.Menu>
        <ProfileMenu
          actionOpen={() => showMenuContentData()}
          title="Meus dados"
          icon={<GoPerson size={33} />}
        />
        {isActiveData && data && <DataCard dataUser={data}/>}
        <C.Bar></C.Bar>
        <ProfileMenu
          actionOpen={() => showMenuContentResc()}
          title="Meus resgates"
          icon={<LuTicket size={33} />}
        />
        {isActiveResc && data && <RescCard dataUser={data}/>}
        <C.Bar></C.Bar>
        <ProfileMenu
          actionOpen={() => showMenuContentJewerly()}
          title="Minhas jóias"
          icon={<IoDiamondOutline size={33} />}
        />
        {isActiveJewerly && data && <JewerlyCard dataUser={data}/>}
        <C.Bar></C.Bar>
        <Link to="/">
          <ProfileMenu title="Sair" icon={<IoExitOutline size={33}/>} />
        </Link>
      </C.Menu>
    </>
  )
}