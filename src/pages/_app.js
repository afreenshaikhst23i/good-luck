import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {

    if (router.pathname === '/404') {
        return <Component {...pageProps} />;
    }

    return (
        <>
        <Header></Header>
        <main className="content-main">
            <Component {...pageProps} />
        </main>
        <ScrollToTop />
        <Footer></Footer>
        </>
    );
}
