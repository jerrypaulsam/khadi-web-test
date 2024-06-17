"use client"

import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";
import photoSwipers from '@/components/data/photo-swipers';

import FullScreenImageGallery from "@/components/pages/gallery/fullscreen-gallery";
import { getAlbumPhotos } from "@/api/api_calls";


const AlbumView = () => {
    const { slug } = useParams();
    const [isMalayalam, setIsMalayalam] = useState(false);
    const [data, setData] = useState([]);
    // const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let language = localStorage.getItem("language");
        if ((language === null && language === undefined) || language === "eng") {
            setIsMalayalam(false)
        } else {
            setIsMalayalam(true)
        }

        if (slug) {
            fetchData(slug);
        }

    }, [slug, isMalayalam]);

    async function fetchData(slug) {

        const photos = await getAlbumPhotos(slug);
        if (photos != null && photos != []) {
            setData(photos);

          }

        setLoading(false);
    }

    const images = (data?.map((item) => ({
        original: item.image,
        thumbnail: item.image
    })) || []);

    return (
        <>
            <SEO pageTitle={isMalayalam ? `Kerala Khadi - ${data[0]?.title_mal}` : `Kerala Khadi - ${data[0]?.title_en}`} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? `Kerala Khadi - ${data[0]?.title_mal}` : `Kerala Khadi - ${data[0]?.title_en}`} innerTitle={isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Village Industries Board"} />
            <div className="container mt-20 mb-20">
                {
                    loading
                        ? (
                            <div className="instagram-loader-container">
                                <div className="instagram-loader"></div>
                            </div>

                        ) : images.length === 0 ? <p style={{ textAlign: "center" }}><strong>Album is Empty</strong></p>
                            : <FullScreenImageGallery images={images} />
                }

            </div>
            <div className='all-footer'>
                <FooterOne isMalayalam={isMalayalam} />
            </div>
            <ScrollToTop />
        </>
    );
};

export default AlbumView;