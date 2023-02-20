import { Footer } from "@/components/common/Footer";
import Document, { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="description" content="Generated by create next app" /> */}
          <link rel="icon" href="/Logo.svg" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://dogs-of-mtg.bermeo.dev/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://dogs-of-mtg.bermeo.dev/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://dogs-of-mtg.bermeo.dev/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="mask-icon"
            href="https://dogs-of-mtg.bermeo.dev/icons/safari-pinned-tab.svg"
            color="#c0392b"
          />
          <meta name="msapplication-TileColor" content="#233140" />
          <meta name="theme-color" content="#233140" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Guide",
                about: "Magic of the Gathering",
                name: "The Goblins of Magic The Gathering",
                url: "https://goblins-of-mtg.bermeo.dev",
                text: "This tool was developed using the Static Site Generation (SSG) concept with Next.js in order to index all the dog type cards of the Magic The Gathering for a private collection. 🐶 The source code can be found on github and easily changed to any other parameter.",
                reviewAspect: ["Card", "Type", "Collection"],
                author: {
                  "@type": "Person",
                  name: "Guilherme Bermeo",
                  url: "https://www.bermeo.dev",
                  sameAs: [
                    "https://github.com/GMBermeo",
                    "https://www.linkedin.com/in/gmbermeo/",
                    "https://guilhermebermeo.com",
                    "https://gmbermeo.com",
                    "https://www.bermeo.com.br",
                    "https://open.spotify.com/artist/4cdJMNyV0fp9j3RjKosbFd",
                    "https://www.youtube.com/channel/UCSsc5f356wsiB8OlNcya3zA",
                    "https://www.instagram.com/guilherme.bermeo",
                    "https://www.deezer.com/artist/101164342?utm_source=deezer&utm_content=artist-101164342&utm_term=3783706082_1596109592&utm_medium=web",
                    "https://music.apple.com/br/artist/guilherme-bermeo/1522907458?uo=4&app=music",
                    "https://play.google.com/store/music/artist/Guilherme_Bermeo?id=Asdnaa4jt7s5g7sc24obfigamr4",
                    "https://guilhermebermeo.bandcamp.com/",
                    "https://www.behance.net/guilhermebermeo",
                    "https://music.163.com/#/artist?id=36028747",
                    "http://www.kuwo.cn/singer_detail/5532015",
                    "https://y.qq.com/n/yqq/singer/002TUXMq1927t7.html",
                  ],
                  email: "mailto:guilherme@bermeo.dev",
                  image: "https://dogs-of-mtg.bermeo.dev/Logo.svg",
                  jobTitle: "Front-end Developer",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Brasília",
                    addressRegion: "DF",
                  },
                },
              }),
            }}
          />
          <meta name="author" content="Guilherme Bermêo" />
          <link rel="canonical" href="https://goblins-of-mtg.bermeo.dev" />
          <meta name="language" content="English" />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, React, Next.js, Typescript, Front-end, Brasília, Roraima, Guilherme Bermêo, Bermeo, Vue.js, Tailwind CSS, Bootstrap"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          /> */}
          {/* <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
          </Script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="application/ld+json"></script>
        </body>
        <Footer />
      </Html>
    );
  }
}

export default MyDocument;
