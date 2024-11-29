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
            <main className="flex flex-col lg:flex-row">
                <aside className="w-full lg:w-1/5">
                    <Listing />
                </aside>
                <section className="w-full lg:w-4/5 px-4 mb-4">
                    {children}
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}