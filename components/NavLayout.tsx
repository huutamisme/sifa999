import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Listing from "./Listing";
import Banner from "./Banner";

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
                <aside className="w-1/5">
                    <Listing />
                </aside>
                <section className="w-4/5">
                    {children}
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}