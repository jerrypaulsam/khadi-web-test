import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getKhadiSchemes } from '@/api/api_calls';

const Services = ({ isMalayalam }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetchData();

    }, []);

    async function fetchData() {

        const schemes = await getKhadiSchemes();
        if (schemes != null && schemes != []) {
            setData(schemes);
        }
        setLoading(false);
    }

    const servicesContent = {
        subtitle: isMalayalam ? 'ഞങ്ങളുടെ പ്രോഗ്രാമുകൾ' : 'Our Programs',
        title: isMalayalam ? 'സ്കീമുകളും പ്രോഗ്രാമുകളും' : 'Schemes & Programs',
        btn_text: isMalayalam ? '' : 'സ്കീമുകൾ',
        btn_link: isMalayalam ? '#' : '#'
    }

    return (
        <div className="services__one section-padding pt-40">
            <div className="container">
                <div className="row align-items-end mb-45">
                    <div className="col-xl-7 col-lg-8 lg-mb-30">
                        <div className="services__one-title lg-t-center">
                            <span className="subtitle-one">{servicesContent.subtitle}</span>
                            <h3>{servicesContent.title}</h3>
                        </div>
                    </div>
                    {/* <div className="col-xl-5 col-lg-4 t-right lg-t-center">
                        <Link className="btn-one" href={servicesContent.btn_link}>{servicesContent.btn_text}<i className="far fa-chevron-double-right"></i></Link>
                    </div> */}
                </div>
                <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                    {loading ? (
                        <div className="instagram-loader-container">
                            <div className="instagram-loader"></div>
                        </div>

                    ) : data != null && data.length > 0 && data?.map((item, id) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 mt-25" key={id} >
                            <div className="services__one-item">
                                <div className="services__one-item-icon">
                                    {/* {data.icon} */}
                                    <img src={item.image} style={{ borderRadius: "5px" }} alt="Kerala Khadi" />
                                </div>
                                <h4 style={{ textAlign: "center" }}><Link href={`${(item.file !== null && item.file !== "") ? item.file : item.link === "" ? "#" : item.link}`}>{isMalayalam ? item.title_mal : item.title_en}</Link></h4>
                                {/* <p>{data.description}</p> */}

                                {/* <Link className="simple-btn-2" href={`/services/${data.id}`}>Read More<i className="far fa-chevron-double-right"></i></Link> */}
                                <Link className="simple-btn-2 mt-10" href="#">{isMalayalam ? "വായിക്കുക" : "Read More"}<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;