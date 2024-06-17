'use client'

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const FlagShipProgram = () => {

    const [isMalayalam, setIsMalayalam] = useState(false);

    useEffect(() => {
        let language = localStorage.getItem("language");
        if ((language === null && language === undefined) || language === "eng") {
            setIsMalayalam(false)
        } else {
            setIsMalayalam(true)
        }

    }, [isMalayalam]);

    return (
        <>
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ഫ്ലാഗ്ഷിപ്പ് പ്രോഗ്രാം" : "Kerala Khadi - Flagship Program"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "ഫ്ലാഗ്ഷിപ്പ് പ്രോഗ്രാം" : "Flagship Program"} innerTitle={isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Village Industries Board"} />

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
                                    <h3>{isMalayalam ? "ഫ്ലാഗ്ഷിപ്പ് പ്രോഗ്രാം" : "Flagship Program"}</h3>
                                    <br />
                                    <h5>{isMalayalam ? "നവീകരണവും കംപ്യൂട്ടറൈസേഷനും" : "Renovation & Computerisation of Existing sales outlets and Modernisation of Godowns of Khadi Board"}</h5>
                                    <p>
                                        {isMalayalam ? "ഈ പദ്ധതി ഖാദി ബോർഡിന്റെ വില്പന കേന്ദ്രങ്ങളുടെ അടിസ്ഥാന സൗകര്യങ്ങൾ മെച്ചപ്പെടുത്തുന്നതിന് ഉദ്ദേശിച്ചതാണ്, അതിലൂടെ ജനങ്ങളെ ആകർഷിച്ച് ഖാദി, ഗ്രാമീണ വ്യവസായ ഉൽപ്പന്നങ്ങളുടെ വിൽപ്പന വർദ്ധിപ്പിക്കാനാണ്. നിലവിലെ ഖാദി ബോർഡ് വില്പന കേന്ദ്രങ്ങളുടെ നവീകരണം, ഖാദി ബോർഡ് വില്പന കേന്ദ്രങ്ങളുടെ കംപ്യൂട്ടറൈസേഷൻ, നിലവിലുള്ള ഗോഡൗണുകളുടെ സുസജ്ജീകരണം എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു." : "This scheme is intended to improve the infrastructure facilities of the sales outlets so as to attract the public and thereby boost the sale of Khadi and Village Industries products. Renovation of existing sales outlets of Khadi Board, Computerisation of sales outlets of Khadi Board, Modernisation of existing Godowns etc. come under this head."}
                                    </p>
                                    <br />
                                    <h5>{isMalayalam ? "ഖാദി സഹകരണ സംഘം പുനരുജ്ജീവനം" : "Revitalisation of Khadi Co-operatives"}</h5>
                                    <p>
                                        {isMalayalam ? "ഖാദി വ്യവസായത്തിന്റെ കീഴിൽ തൊഴിൽ സൃഷ്ടി നേടാൻ കഴിയുന്ന രീതിയിൽ നിലച്ചുപോയ ഖാദി സഹകരണ സമിതികളെ പുനരുജ്ജീവിപ്പിക്കാനുള്ള ഉദ്ദേശ്യത്തോടെ ഈ പദ്ധതി അവതരിപ്പിച്ചിരിക്കുന്നു. പഴയ ചരക്കുകളും നൂലുവൃത്തികളും പുനസ്ഥാപിക്കൽ, പ്രവൃത്തി മൂലധനം, പരിശീലനം എന്നിവയ്ക്കായി ധനസഹായം നൽകും. ഖാദി സഹകരണ സമിതികൾക്ക് പുനരുജ്ജീവനത്തിനായി പ്രോജക്ട് റിപ്പോർട്ട് സമർപ്പിക്കണം." : "This scheme is introduced with a view to revive defunct Khadi co-operative societies so that employment generation can be achieved under the Khadi industry. Financial assistance will be extended for Replacement of Old Charkhas and Looms, Working Capital, Training etc. Khadi co-operative societies have to submit project report for the revival."}
                                    </p>
                                    <strong>{isMalayalam ? "സഹായത്തിന്റെ നിരക്ക്:- ‘A’, ‘B’ വിഭാഗങ്ങൾക്കായി 75 % ഗ്രാന്റ്, ‘C’, ‘D’ വിഭാഗങ്ങൾക്കായി 100 % ഗ്രാന്റ്" : "Rate of Assistance:- 75 % grant for ‘A’, ‘B’ categories, 100 % grant for ‘C’, ‘D’ categories"}</strong>
                                    <p></p>
                                    <br />
                                    <h5>{isMalayalam ? "മറ്റു ഖാദി സ്ഥാപനങ്ങൾക്ക് ധനസഹായം" : "Financial Assistance to Other Khadi institutions"}</h5>
                                    <p>
                                        {isMalayalam ? "പട്ടണക്കാരുടെ തൊഴിൽ സൃഷ്ടി ലക്ഷ്യമാക്കി രജിസ്റ്റർ ചെയ്ത സ്ഥാപനങ്ങളെ പുനരുജ്ജീവിപ്പിക്കാനാണ് ഈ പദ്ധതി അവതരിപ്പിച്ചിരിക്കുന്നത്. പഴയ ചരക്കുകളും നൂലുവൃത്തികളും പുനസ്ഥാപിക്കൽ, പ്രവൃത്തി മൂലധനം, പരിശീലനം എന്നിവയ്ക്കായി ധനസഹായം നൽകും. ഖാദി സ്ഥാപനങ്ങൾക്ക് പുനരുജ്ജീവനത്തിനായി പ്രോജക്ട് റിപ്പോർട്ട് സമർപ്പിക്കണം." : "This scheme is introduced for reviving registered institutions under Khadi so as to generate employment to the rural artisans. Financial assistance will be extended for Replacement of Old Charkhas and Looms, Working Capital, Training etc. Khadi institutions will have to submit project report for the revival."}
                                    </p>
                                    <p><strong>{isMalayalam ? "സഹായത്തിന്റെ നിരക്ക്:- ‘A’, ‘B’ വിഭാഗങ്ങൾക്കായി 75 % ഗ്രാന്റ്, ‘C’, ‘D’ വിഭാഗങ്ങൾക്കായി 100 % ഗ്രാന്റ്" : "Rate of Assistance:- 75 % grant for ‘A’, ‘B’ categories, 100 % grant for ‘C’, ‘D’ categories"}</strong></p>

                                    <br />

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

export default FlagShipProgram;