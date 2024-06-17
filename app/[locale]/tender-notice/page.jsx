"use client"

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";
import { getTenderNotices } from '@/api/api_calls';

const TenderNotice = () => {
    const [isMalayalam, setIsMalayalam] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        let language = localStorage.getItem("language");
        if ((language === null && language === undefined) || language === "eng") {
            setIsMalayalam(false)
        } else {
            setIsMalayalam(true)
        }

        fetchData();


    }, [isMalayalam]);

    async function fetchData() {

        const notices = await getTenderNotices();
        if (notices != null && notices != []) {
            setData(notices);
        }

        setLoading(false);
    }

    return (
        <>
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ടെണ്ടർ നോട്ടീസ്" : "Kerala Khadi - Tender Notice"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "ടെണ്ടർ നോട്ടീസ്" : "Tender Notice"} innerTitle={isMalayalam ? "കേരള ഖാദി & ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Industries Board"} />

            <div className="team__single section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 lg-mb-30">
                            <div className="team__single-left">
                                <div className="team__single-left-thumb dark__image">
                                    <img src={image1.src} alt="image" />

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team__single-right">
                                <div className="team__single-right-experience">
                                    <h3>{isMalayalam ? "ടെണ്ടർ നോട്ടീസ്" : "Tender Notice"}</h3>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>{isMalayalam ? "ടെണ്ടർ അറിയിപ്പ് ഐഡി നമ്പറും തീയതിയും" : "Tender Notice ID No & Date"}</th>
                                                <th>{isMalayalam ? "ടെണ്ടർ/ക്വട്ടേഷൻ നോട്ടീസിൻ്റെ വിവരണം" : "Description of the Tender/Quotation Notice"}</th>
                                                <th>{isMalayalam ? "അവസാനിക്കുന്ന തീയതി" : "Date of Closing"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data === null || data?.length === 0
                                                    ? <p className='mt-10' style={{textAlign: "center"}}>{isMalayalam ? "സജീവ ടെൻഡർ ഇല്ല" : "No Active Tender"}</p>
                                                    : data?.map((item, id) => (
                                                        <tr key={id}>
                                                            <td>{item.notice_id}</td>
                                                            <td>
                                                                {isMalayalam ? item.description_mal : item.description_en}
                                                            </td>
                                                            <td>{item.closing_date}</td>
                                                        </tr>
                                                    ))

                                            }

                                        </tbody>
                                    </table>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-footer'>
                <FooterOne isMalayalam={isMalayalam} />
            </div>
            <ScrollToTop />
        </>

    );
};

export default TenderNotice;