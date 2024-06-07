"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";
import PhotoAlbums from "@/components/pages/gallery/services";

const PhotoGallery = () => {
    return (
        <>
            <SEO pageTitle="Kerala Khadi - Photo Gallery" />
            <HeaderOne />
            <BreadCrumb title="Photo Gallery" innerTitle="Kerala Khadi & Village Industries Board" />
            <PhotoAlbums />
            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>
    );
};

export default PhotoGallery;