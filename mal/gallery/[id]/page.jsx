"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";
import photoSwipers from '@/components/data/photo-swipers';

import FullScreenImageGallery from "@/components/pages/gallery/fullscreen-gallery";


const AlbumView = () => {

    const images = photoSwipers?.images.map((image) => ({
        original: image,
        thumbnail: image
    })) || [];

    return (
        <>
            <SEO pageTitle={`Kerala Khadi - ${photoSwipers?.title}`} />
            <HeaderOne />
            <BreadCrumb title={`${photoSwipers?.title}`} innerTitle="Kerala Khadi & Village Industries Board" />
                <div className="container mt-20 mb-20">
                    <FullScreenImageGallery images={images} />
                </div> 
            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>
    );
};

export default AlbumView;