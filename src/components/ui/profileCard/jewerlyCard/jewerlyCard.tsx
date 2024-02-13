import { ProfileCard } from "../profileCard";
import { JewerlyComponent } from "./jewerlyComponent/jewerlyComponent";
import yellow from "../../../../assets/images/yellow.png";
import lilac from "../../../../assets/images/lilac.png";
import blue from "../../../../assets/images/blue.png";


export const JewerlyCard: React.FC = () => {
  return (
    <ProfileCard title="Minhas jóias">
      <JewerlyComponent
        img={yellow}
        title="Joia da mente"
        jewerlyCount={2}
        description="O poder dessa joia está na possibilidade de transformar ideias em
          palavras, com assertividade na transmissão e receptividade das
          informações."
      />
      <JewerlyComponent
        img={lilac}
        title="Joia do Poder"
        jewerlyCount={1}
        description="Esta poderosa joia traz consigo alto nível de energia e empatia para lidar com colegas de trabalho, aquele que a possui demonstra a capacidade de lidar com diversos perfis, bem como proatividade e compartilhamento de informações."
      />
      <JewerlyComponent
        img={blue}
        title="Joia do espaço"
        jewerlyCount={3}
        description="Esta joia traz consigo a capacidade de se adaptar e estimula o interesse por mudanças, variedades de experiências e novas ideias.F"
      />
    </ProfileCard>
  );
};
