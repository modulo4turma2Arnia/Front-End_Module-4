import { ProfileCard } from "../profileCard";
import { JewerlyComponent } from "./jewerlyComponent/jewerlyComponent";
<<<<<<< HEAD
import { UserDataProps } from "../../../../types/userProps/UserProps";
=======
import { JewelyCardProps } from "../../../../types/jewelyCardProps/JewelyCardProps";
import { JewelrieType } from "../../../../types/jewelrieType/JewelrieType";
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592

export const JewerlyCard: React.FC<JewelyCardProps> = ({ dataUser }) => {
  const userInfo = dataUser
  const jewelriesList: JewelrieType[] | null  = userInfo.jewelries

<<<<<<< HEAD
export const JewerlyCard: React.FC = (data: any) => {
  const userInfo: UserDataProps = data.dataUser
  const jewelriesList: [] = userInfo.jewelries

  return (
    <ProfileCard title="Minhas jóias">
        {jewelriesList.map((jewelrie: any) => 
            <JewerlyComponent
            img={jewelrie.image}
            title={jewelrie.type}
            // jewerlyCount={2}
=======
  return (
    <ProfileCard title="Minhas jóias">
        {jewelriesList && jewelriesList.map((jewelrie: any) => 
            <JewerlyComponent
            img={jewelrie.image}
            title={jewelrie.type}
            jewerlyCount={2}
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
            description={jewelrie.habilities}
            />
        )}
    </ProfileCard>
<<<<<<< HEAD
  );
};

=======
  )
}
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
