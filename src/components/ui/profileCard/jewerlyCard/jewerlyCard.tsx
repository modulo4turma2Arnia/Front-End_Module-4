import { ProfileCard } from "../profileCard";
import { JewerlyComponent } from "./jewerlyComponent/jewerlyComponent";
import { JewelyCardProps } from "../../../../types/jewelyCardProps/JewelyCardProps";
import { JewelrieType } from "../../../../types/jewelrieType/JewelrieType";

export const JewerlyCard: React.FC<JewelyCardProps> = ({ dataUser }) => {
  const userInfo = dataUser
  const jewelriesList: JewelrieType[] | null  = userInfo.jewelries

  return (
    <ProfileCard title="Minhas jóias">
        {jewelriesList && jewelriesList.map((jewelrie: any) => 
            <JewerlyComponent
            img={jewelrie.image}
            title={jewelrie.type}
            jewerlyCount={2}
            description={jewelrie.habilities}
            />
        )}
    </ProfileCard>
  )
}