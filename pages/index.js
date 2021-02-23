import React, { useEffect, useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

import Manyetik from "../components/manyetik";
import Thymus from "../components/thymus";
import Level2 from "../components/level3";
import Level3 from "../components/level2";
import ButtonContainer from "../components/buttonContainer";
import SampleProduct from "../components/SampleProduct";

import config from "react-reveal/globals";

config({ ssrFadeout: true });
import { Fade } from "react-reveal";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <meta property="og:title" content="Anxiety necklaces" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://anxietynecklaces.com/klasik" />
        <meta
          property="og:image"
          content="https://anxietynecklaces.com/thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="Anxiety necklaces that has a story !"
        />

        <meta property="product:price:amount" content="20" />
        <meta property="product:price:currency" content="USD" />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Anxiety necklaces"></meta>

        <meta
          name="twitter:description"
          content="Anxiety necklaces that has a story !"
        ></meta>

        <meta
          name="twitter:image"
          content="https://anxietynecklaces.com/thumbnail.jpg"
        ></meta>

        <meta name="twitter:site" content="@magneticsand__"></meta>

        <meta name="twitter:creator" content="@magneticsand__"></meta>

        <title>Anxiety necklace | Stress relief necklace</title>
        <meta
          name="title"
          content="Anxiety necklace | Stress relief necklace"
        ></meta>
        <meta
          name="description"
          content="Anxiety necklaces Healing Crystal Bracelet - Rose Quartz, Aquamarine Opalite. Healing Gemstones. Spiritual Gifts for her. "
        ></meta>
      </Head>
      <main className={styles.main}>
        <Manyetik></Manyetik>

        <Fade duration={2000}>
          <h2 className="text-center wh text-6xl font-bold mb-32 shadow-lg"></h2>
        </Fade>
        <h3 className="text-center text-6xl font-bold mt220 ">
        we turned Magnetic sand into stone
        </h3>
        <h4 className="shadow-lg text-3xl contentful responsiveWidth">
        After long efforts, we made it into stone so that you can use it where your thymus gland is.You can use it as a necklace. Besides its benefits,
you can use it as a stylish accessory.
          <br></br>
          <span class="text-3xl font-bold text-black">
           Magnetic Sand Anxiety necklaces with art
          </span>
        </h4>

        <SampleProduct></SampleProduct>
        <ButtonContainer></ButtonContainer>
        <Thymus></Thymus>

        <Level2></Level2>
        <Level3></Level3>
        <h3 className="text-center text-6xl font-bold mt220 ">
        What is Magnetite Black Sand ?
        </h3>
        <h4 className="shadow-lg text-3xl contentful responsiveWidth">
        It is understood that magnetic black sand, which has been used by people for pain and different treatments since the 1900s, was used thousands of years ago, when looking at the past researches. It is stated that people came to Ünye in the past to find a solution to their pain, especially through the cities of Akkus, Niksar, Tokat, Sivas, which descends from Central Anatolia to the Black Sea and are called Silk Road, 
and they look for natural remedies by burying in the sand on the beach with black magnetic sand.

          <br></br>
          <p class="text-3xl font-bold text-black">
          Our elders were buried in the black sand to relieve their pain.
          </p>
        </h4>
       
        <h4 className="text-white">
        Lodestone Natural Magnetite for Attraction, Luck, Balancing Polarities, Manifestation, Grounding, Healing, Attraction, and Aura Alignment
          
        </h4>
        <h5 className="text-white">
        Lodestone and Lodestone food Orgone Magnetic Sand Pure Magnetite Authentic
        </h5>
        <p className="text-white">
        Needle felted mouse mice Mother’s Day Gift crochet flowers felt decoration
        1 Pound (Magnetite) DIY Orgonite sand Highest Quality lodestone food Orgone Magnetic Sand
        Custom Letter Necklace - Sideways Initials Necklace - Mother's Day Gift - Personalized Jewelry - Bridesmaid Gift - Mama Gift Necklace



        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text-center text-gray-500 text-1xl">
            &copy;2021 Ünye Manyetik Kumu All rights reserved.
          </p>
        </a>
        <a
          href="https://www.instagram.com/unye_manyetik_kumtasi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          instagram
        </a>

        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          twitter
        </a>
        <a
          href="https://www.pinterest.com/targaryengg15"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          pinterest
        </a>

        <a
          href="https://anxietynecklaces.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social text-sm "
        >
          website
        </a>
      </footer>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
