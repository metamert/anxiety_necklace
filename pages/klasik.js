import React from "react";
import Link from "next/link";
import Checkout from "../components/checkout";
import Head from "next/head";
function CardItem(props) {
  return (
    <div className="fullw  cards__item_ responsiveProduct">
      <Head>
        <title>Magnetite Lodeston necklace made by magnetic sand</title>
        <meta
          name="title"
          content="Magnetite Lodeston necklace made by magnetic sand"
        ></meta>
        <meta
          name="description"
          content="Magnetite Lodeston necklace made by magnetic sand for Attraction, Luck, Balancing Polarities, Manifestation, Grounding, Healing, Attraction"
        ></meta>

        <meta property="og:title" content="Ünye Manyetik Kumtaşı Klasik" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://anxietynecklaces/klasik" />
        <meta
          property="og:image"
          content="https://anxietynecklaces/thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="Magnetite Lodeston necklace made by magnetic sand for Attraction, Luck, Balancing Polarities, Manifestation, Grounding, Healing, Attraction "
        />

        <meta property="product:price:amount" content="25" />
        <meta property="product:price:currency" content="USD" />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Ünye Manyetik Kumtaşı"></meta>

        <meta
          name="twitter:description"
          content="Magnetite Lodeston necklace made by magnetic sand for Attraction, Luck, Balancing Polarities, Manifestation, Grounding, Healing, Attraction"
        ></meta>

        <meta
          name="twitter:image"
          content="https://anxietynecklaces/thumbnail.jpg"
        ></meta>

        <meta name="twitter:site" content="@magneticsand__"></meta>

        <meta name="twitter:creator" content="@magneticsand__"></meta>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/",
               "@type": "Product",
               "name": "Ünye Manyetik Kumtaşı",
               "image":["https://anxietynecklaces/pure.jpg"],
               "description": "Magnetite Lodeston necklace made by magnetic sand for Attraction, Luck, Balancing Polarities, Manifestation, Grounding, Healing, Attraction",
                   "offers": {
                 "@type": "Offer",
                 "url": "https://anxietynecklaces/klasik",
                 "priceCurrency": "USD",
                 "price": "25",
                
                 "availability": "https://schema.org/InStock"
         }
         
         } `,
          }}
        />
      </Head>
      <figure className="cards__item__pic-wrap" data-category={"new"}>
        <img
          src={"/pure.jpg"}
          alt="Gezi Imgae"
          className="cards__item__img cards__item__link"
          style={{ objectPosition: "bottom" }}
        />
      </figure>
      <div className="urun_acıklama cards__item__link ">
        <h1 className="urun_text">Magnetite Lodeston necklace made by magnetic sand</h1>
        <h2>Breathing Necklace - Breathing tool - Copper Necklace </h2>


        <h4></h4>
        <p className="urun__item__text mt30">
        After long efforts, we made magnetite sand into stone so that you can use it where your thymus gland is.You can use it as a necklace. Besides its benefits,
you can use it as a stylish accessory.
        </p>
        <h4 className="mt30">Payment</h4>
        <Checkout url="https://www.trendyol.com/unye-manyetik-kumtasi/unye-manyetik-kumu-kolye-p-85861149?merchantId=346017"></Checkout>
      </div>
    </div>
  );
}

export default CardItem;
