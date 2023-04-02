import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="layout-section">{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
