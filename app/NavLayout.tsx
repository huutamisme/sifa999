import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listing from "./components/Listing";
import Banner from "./components/Banner";

export default function NavLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <header>
                <Header />
                <Navbar />
            </header>
            <aside>
                <Banner margin={10} />
            </aside>
            <main className="flex">
                <aside>
                    <Listing />
                </aside>
                <section>
                    {children}
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}