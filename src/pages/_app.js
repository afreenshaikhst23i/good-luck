import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import Script from "next/script";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {

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
            <Header></Header>
            <main className="content-main">
                <Component {...pageProps} />
            </main>
            <ScrollToTop />
            <Footer></Footer>
        </>
    );
}
