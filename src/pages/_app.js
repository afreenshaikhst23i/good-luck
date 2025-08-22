import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
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
