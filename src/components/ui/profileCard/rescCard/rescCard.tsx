import * as C from "./style/style";
import { Cards } from "../../card/Card";
import { ProfileCard } from "../profileCard";
<<<<<<< HEAD
import { UserDataProps } from "../../../../types/userProps/UserProps";
import { CardProps } from "../../../../types/cardProps/CardProps";

export const RescCard = (data: any) => {
  const userInfo: UserDataProps = data.dataUser
=======
import { CardProps } from "../../../../types/cardProps/CardProps";
import { RescCardProps } from "../../../../types/rescCardProps/RescCardProps";
import { Month } from "../../../../utils";

export const RescCard: React.FC<RescCardProps> = ({ dataUser}) => {
  const userInfo = dataUser
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592

  function grupForDate(array: any){
    const grup:any = {}

    array.forEach((obj: any) => {
<<<<<<< HEAD
      const date: any = obj.createdAt.split('T')[0]
=======
      const date: any = obj.updatedAt.split('T')[0]
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
      if(!grup[date]){
        grup[date] = []
      }
      grup[date].push(obj)
    })

    return grup
  }

  function dateConvert(dateString: string) {
<<<<<<< HEAD
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const [age, month, day] = dateString.split('-');

    const monthName = monthNames[parseInt(month, 10) - 1];
=======
    
    const [_, month, day] = dateString.split('-');

    const monthName = Month[parseInt(month, 10) - 1];
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592

    return `${day} de ${monthName}`;
}

  const products = grupForDate(userInfo.products)
<<<<<<< HEAD
  console.log(products)
=======
const totalProducts = userInfo.products.length;
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592

  return (
    <>
    <ProfileCard title={`Meus Resgates (${totalProducts})`}>
        <C.Content>
          {
            Object.keys(products).map(data => (
              <>
                <C.DateResc>{dateConvert(data)}</C.DateResc>
                <C.ContainerCards>
                  {products[data].map((product: CardProps) => (
<<<<<<< HEAD
                    <Cards product={product}/>
=======
                    <Cards 
                      product={product}
                      isActive
                    />
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
                  ))}
                </C.ContainerCards>
              </>
            ))
          }
        </C.Content>
      </ProfileCard>
    </>
  )
}