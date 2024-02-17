import { ProfileCard } from "../profileCard";
import { JewerlyComponent } from "./jewerlyComponent/jewerlyComponent";
import { UserDataProps } from "../../../../types/userProps/UserProps";


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
            description={jewelrie.habilities}
            />
        )}
    </ProfileCard>
  );
};

