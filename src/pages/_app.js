import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import Script from "next/script";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import { getCanonicalUrl } from "../../utils/getCanonicalUrl";
import { useRouter } from "next/router";


export default function App({ Component, pageProps, router }) {

    const nextRouter = useRouter();
    const [canonical, setCanonical] = useState("");

    useEffect(() => {
        setCanonical(getCanonicalUrl(nextRouter.asPath));
    }, [nextRouter.asPath]);

    if (router.pathname === '/404') {
        return <Component {...pageProps} />;
    }

    return (
        <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-PMME4E64CH`} />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-PMME4E64CH', {
                    page_path: window.location.pathname,
                });
                `}
            </Script>

            {canonical && (
                <Head>
                    <link rel="canonical" href={canonical} />
                </Head>
            )}

            <Header />
            <main className="content-main">
                <Component {...pageProps} />
            </main>
            <ScrollToTop />
            <Footer />
        </>
    );
}
