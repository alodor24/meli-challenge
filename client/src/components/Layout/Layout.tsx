import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children?: React.ReactNode;
  title: string;
  description: string;
};

const Layout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mercado Libre | {title}</title>
          <meta name="description" content={description} />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <main className="container">
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
