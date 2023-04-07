import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import BreadCrumb from "../BreadCrumb";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children?: React.ReactNode;
  title: string;
  description: string;
};

const Layout: React.FC<Props> = ({ children, title, description }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>Mercado Libre | {title}</title>
        <meta name="description" content={description} />
      </Helmet>
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
