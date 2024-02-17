import * as C from "./style/style";
import { Cards } from "../../card/Card";
import { ProfileCard } from "../profileCard";
import { UserDataProps } from "../../../../types/userProps/UserProps";
import { CardProps } from "../../../../types/cardProps/CardProps";

export const RescCard = (data: any) => {
  const userInfo: UserDataProps = data.dataUser

  function grupForDate(array: any){
    const grup:any = {}

    array.forEach((obj: any) => {
      const date: any = obj.createdAt.split('T')[0]
      if(!grup[date]){
        grup[date] = []
      }
      grup[date].push(obj)
    })

    return grup
  }

  function dateConvert(dateString: string) {
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const [age, month, day] = dateString.split('-');

    const monthName = monthNames[parseInt(month, 10) - 1];

    return `${day} de ${monthName}`;
}

  const products = grupForDate(userInfo.products)
  console.log(products)

  return (
    <>
      <ProfileCard title="Meus Resgates">
        <C.Content>
          {
            Object.keys(products).map(data => (
              <>
                <C.DateResc>{dateConvert(data)}</C.DateResc>
                <C.ContainerCards>
                  {products[data].map((product: CardProps) => (
                    <Cards product={product}/>
                  ))}
                </C.ContainerCards>
              </>
            ))
          }
        </C.Content>
      </ProfileCard>
    </>
  );
};
