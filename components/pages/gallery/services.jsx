"use client"
import { useEffect, useState } from "react";

import Link from 'next/link';
import { getAlbums } from "@/api/api_calls";

const PhotoAlbums = ({ isMalayalam }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetchData();

    }, []);

    async function fetchData() {

        const albums = await getAlbums();
        if (albums != null && albums != []) {
            setData(albums);
        }

        setLoading(false);
    }

    return (
        <>
            <div className="services__page section-padding-two">
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <div className="instagram-loader-container">
                                <div className="instagram-loader"></div>
                            </div>

                        ) : data.length === 0 ? <p> No Albums </p>  : data !== null && data.length > 0 && data?.map((item, id) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 mt-25" key={id}>
                                <Link href={`/en/gallery/${item.slug}`}>
                                    <div className="services__three-item page">
                                        <img src={item.cover} alt="Kerala Khadi Photo Gallery" />
                                        <div className="services__three-item-content page">
                                            <h4>{isMalayalam ? item.title_mal : item.title_en}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoAlbums;