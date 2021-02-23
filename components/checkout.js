import React from 'react'
import { Fade } from "react-reveal";
import { useRouter } from 'next/router'
export default function checkout() {
  const router = useRouter()

    const handleClick = (e,href) => {
        e.preventDefault()
        router.push(href)
      }
    return (
        <div className=" flex flex-row items-center justify-center fullw mt30">
          <Fade bottom>
            <div
              onClick={(e) => handleClick(e, "/iletisim")}
              className="card flex-colum center justify-center"
            >
              <div>
              <h2 className="">İletişim</h2>
              <p className="urun__item__text">Havale olarak yapmak isterseniz iletişime geçebilirsiniz</p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div
              onClick={(e) =>
                handleClick(
                  e,
                  "https://www.trendyol.com/unye-manyetik-kumtasi/unye-manyetik-kumu-kolye-p-85861149?boutiqueId=61&merchantId=346017"
                )
              }
              className="card  center justify-center"
            >
              <div className="centerColumn">
                <h2 style={{textAlign:"start"}}>Trendyol</h2>
                <p className="text-center" >
                  Trendyol sitesinden  güvenli bir şekilde ödeme  yapabilirsiniz
                </p>
                <div className="new_but ">trendyol</div>
              </div>
             
            </div>
          </Fade>
        </div>
    )
}
