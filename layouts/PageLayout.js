import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import './PageLayout.scss'

const PageLayout = ({ children, title = "Applied Action Consulting" }) => (
  <div className="Layout">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />

    <page className="PageLayoutContent">{children}</page>

    <Footer>Footer</Footer>
    
  </div>
);

export default PageLayout;
