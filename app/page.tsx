import Banner from "./components/Banner";
import NavLayout from "./NavLayout";

export default function Home() {
  return (
    <>
      <NavLayout>
        <Banner margin={10} />
      </NavLayout>
    </>
  );
}
