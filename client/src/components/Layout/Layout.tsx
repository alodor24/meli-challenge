import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <main className="container">
        {pathname !== "/" && <BreadCrumb />}
        <section className="layout-section">{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
