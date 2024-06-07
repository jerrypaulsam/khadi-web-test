'use client'

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../../../components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../../../components/pages/common/scroll/scroll-to-top";

import image1 from "../../../../public/assets/img/about/objectives.jpg";
import { useEffect, useState } from 'react';

const Objectives = () => {
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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ലക്ഷ്യങ്ങൾ" : "Kerala Khadi - Objectives"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "ലക്ഷ്യങ്ങൾ" : "Objectives"} innerTitle={isMalayalam ? "കേരള ഖാദി ബോർഡിൻ്റെ ലക്ഷ്യങ്ങൾ" : "Kerala Khadi Board's Objectives" }/>

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
                                    <h3>{isMalayalam ? "ലക്ഷ്യങ്ങൾ" : "Objectives"}</h3>
                                    <p>{isMalayalam ? "1957-ലെ നിയമം അനുസരിച്ച് രൂപീകരിച്ച ഒരു നിയമാനുസൃത സ്ഥാപനമാണ് കേരള ഖാദി ആൻഡ് വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്, സംസ്ഥാനത്ത് ഖാദി, ഗ്രാമ വ്യവസായങ്ങൾ സംഘടിപ്പിക്കുന്നതിനും പ്രോത്സാഹിപ്പിക്കുന്നതിനുമുള്ള ഉത്തരവാദിത്തം നിക്ഷിപ്തമാണ്. കേരള ഗവൺമെൻ്റ്, ഖാദി കമ്മീഷൻ, ദേശസാൽകൃത ബാങ്കുകൾ എന്നിവയിൽ നിന്ന് സഹായം ലഭ്യമാക്കി/ ലഭ്യമാക്കിക്കൊണ്ട് സഹകരണ, രജിസ്റ്റർ ചെയ്ത സ്ഥാപനങ്ങൾ, വ്യക്തികൾ, വകുപ്പുതല യൂണിറ്റുകൾ എന്നിവ വഴിയാണ് ബോർഡ് പരിപാടികൾ നടപ്പിലാക്കുന്നത്." : "Kerala Khadi and Village Industries Board is a statutory body constituted by the Act of 1957, vested with the responsibility of organizing and promoting Khadi and Village Industries in the State. The Board implements the programmes through co-operative, registered institutions, individuals and departmental units by imparting/ availing assistance from Government of Kerala, Khadi Commission and Nationalized Banks."}</p>
                                    <br />
                                    <p style={{ fontWeight: "bold" }}>
                                        <li style={{ fontWeight: "bold" }}>{isMalayalam ? "ഖാദി, ഗ്രാമ വ്യവസായങ്ങളുടെ പ്രോത്സാഹനം." : "Promotion of Khadi and Village Industries."}</li>
                                        <li style={{ fontWeight: "bold" }}>{isMalayalam ? "ഖാദി, ഗ്രാമ വ്യവസായ സംരംഭകർക്ക് സമഗ്രമായ പിന്തുണ" : "Comprehensive range of support to Khadi and village industry entrepreneurs"}</li>
                                        <li style={{ fontWeight: "bold" }}>{isMalayalam ? "ബോർഡിൻ്റെ ഗുണഭോക്തൃ യൂണിറ്റുകൾക്ക് മാർക്കറ്റിംഗ് പിന്തുണ." : "Marketing support to the beneficiary units of the Board."}</li>
                                        <li style={{ fontWeight: "bold" }}>{isMalayalam ? "ബോർഡിൻ്റെ സഹായത്തോടെ കേരളത്തിൽ നിലവിൽ വന്ന 25000 യൂണിറ്റുകളുടെ ഏകോപനവും നിരീക്ഷണവും." : "Co-ordination and monitoring of around 25000 units, which have, came up in Kerala with the assistance of Board."}</li>
                                        <li style={{ fontWeight: "bold" }}>{isMalayalam ? "നെയ്ത്ത്, നൂൽ നൂൽപ്പ്, മൺപാത്ര നിർമ്മാണം, തേനീച്ച വളർത്തൽ, മറ്റ് നിരവധി പ്രവർത്തനങ്ങൾ തുടങ്ങി വിവിധ മേഖലകളിൽ സാധ്യതയുള്ള സംരംഭകർക്ക് പരിശീലനം നൽകുന്നു." : "Providing training to potential entrepreneurs in various sectors including weaving and spinning, pottery, bee keeping and a host of other activities."}</li>
                                        <li style={{ fontWeight: "bold" }}>{isMalayalam ? "രോഗാതുരമായ വ്യവസായങ്ങളുടെയും യൂണിറ്റുകളുടെയും പുനരുജ്ജീവനത്തിനായി കേന്ദ്രീകൃത പരിപാടികളുടെയും പദ്ധതികളുടെയും രൂപീകരണവും നടപ്പാക്കലും." : "Formulation and implementation of focused programmes and schemes for the revival of sick industries and units."}</li>
                                        <li style={{ fontWeight: "bold" }}>{isMalayalam ? "വരാനിരിക്കുന്ന യൂണിറ്റുകൾക്ക് സാങ്കേതിക സഹായം നൽകുന്നു." : "Providing technical assistance to the upcoming units."}</li>
                                    </p>
                                    <br />

                                    <p>{isMalayalam ? "ലക്ഷ്യങ്ങൾ സാക്ഷാത്കരിക്കുന്നതിന്, ബോർഡ് വിവിധ പദ്ധതികൾ ആവിഷ്കരിക്കുകയും വിജയകരമായി നടപ്പിലാക്കുകയും ചെയ്തിട്ടുണ്ട്." : "In order to materialize the objectives, Board has formulated various schemes and implemented them successfully."}</p>

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

export default Objectives;