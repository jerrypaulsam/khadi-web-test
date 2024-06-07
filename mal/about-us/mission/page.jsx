import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../../../components/pages/common/breadcrumb";
import AboutMain from "../../../../components/pages/about/about";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../../../components/pages/common/scroll/scroll-to-top";
import WhoWeAre from "../../../../components/pages/about/who-we-are";
import History from "../../../../components/pages/about/history";

const Mission = () => {
    return (
      <>
        <SEO pageTitle="Kerala Khadi - Mission & Vision" />
        <HeaderOne />
        <BreadCrumb title="Mission & Vision" innerTitle="Kerala Khadi Board's Mission" />
       
        <History />
        <div className='all-footer'>
            <FooterOne />
        </div>
            <ScrollToTop />
      </> 
    );
};

export default Mission;