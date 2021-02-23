import React from "react";

export default function Head({title,description}) {
  return (
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-179714695-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'UA-179714695-1');
                  `,
        }}
      />

      <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
      <meta name="p:domain_verify" content="f7ff4e16ee81b34b14d1d43bd2341086" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    
      <meta name="p:domain_verify" content="f7ff4e16ee81b34b14d1d43bd2341086" />
    

      <meta name="robots" content="index, follow" />

      <meta name="thumbnail" content="/thumbnail.jpg" />

      <meta property="og:type" content="website" />

      <meta
        name="og:title"
        property="og:title"
        content="Magnetic sand necklace , stress relief jewelry"
      ></meta>
      <meta name="og:url" property="og:type" content="product" />
      <meta
        property="og:image"
        content="https://magneticsand.net/thumbnail.jpg"
      />

      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
}
