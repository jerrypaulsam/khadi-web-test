"use client"

import { useEffect, useState } from 'react';
import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/grama_soubhagya.jpg";

const RebateOnSale = () => {

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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ഖാദി റിബേറ്റ്" : "Kerala Khadi - Rebate on Khadi"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "ഖാദി റിബേറ്റ്" : "Rebate on Khadi"} innerTitle={isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Village Industries Board"} />

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
                                    <h3>{isMalayalam ? "ഖാദി റിബേറ്റ്" : "Rebate on Khadi"}</h3>
                                    <br />
                                    {isMalayalam
                                        ?
                                        <>
                                            <p>
                                                ഖാദി / ഹാൻഡ്‌ലൂം വസ്ത്രങ്ങളുടെ ജനപ്രിയീകരണത്തിനായി, സർക്കാർ വിധിച്ച സർക്കാർ ഓർഡർ അനുസരിച്ച്, എല്ലാ മലയാളീസുകളും, പ്രധാനമായി സർക്കാർ ജോലിക്ക് എംപ്ലോയീസുകളും, അധ്യാപകരും പൊതു ഉദ്യോഗസ്ഥരും വെവ്നസ്‌ഡേ എന്നിവരുടെയും എല്ലാ മലയാളീസുകളുടെയും ഖാദി വസ്ത്രങ്ങൾ ധരിക്കണം.
                                            </p>
                                            <br />
                                            <p>
                                                കേരളത്തിൽ ഖാദി സംസ്ഥാനം കൂടുതൽ മാറിയിട്ടുണ്ട്, ഖാദി വിനിയോഗം ഉത്പാദനം നടപ്പിലാക്കുന്നതിന് 40 പോലുള്ള ഖാദി സംഘങ്ങളും ഖാദി ബോർഡും ഉണ്ട്. ഖാദി ഫാബ്രിക്സ് സൃഷ്ടിക്കുന്നതിനായി വിവിധ ഖാദി ഫാബ്രിക്സുകൾ ഉത്പാദനത്തിലേക്ക് ചാലിക്കുന്നു. 1985നും ശക്തമായി സർക്കാർ പ്രദാനം ചെയ്യുന്നു. 10% റിബേറ്റ് ദിനം വേണ്ടി വർഷം വരെ നിലവിലുള്ളത് തീയതിയിൽ 1985 ലെ കേരള സർക്കാരം മുതൽ നിരന്തരം പ്രഖ്യാപിച്ചിരിക്കുന്നു. മറ്റൊരു സർക്കാർ കേരളത്തിൽ നിന്നും പാടുന്ന വിശേഷ റിബേറ്റ് 10% റിബേറ്റ് സ്പെഷൽ രാവിലെ 108 ദിവസത്തിലും രാജാക്കന്മാർക്കു പുറത്ത് നല്ല സമ്പ്രദായമുള്ള വിഭവങ്ങളുടെ സപ്പോർട്ട് നൽകാനായി ബജറ്റെടുക്കുന്നു. 2008-09 മുതൽ ഖാദി കുട്ടിക്കായി ആവിഷ്കരിച്ച റിബേറ്റ് പോളിസി സർക്കാർ റദ്ദാക്കി. മാർക്കറ്റിംഗ് ഡവലപ്മെന്റ് സഹായ പദ്ധതി നിരവധി ദിനങ്ങളിൽ ഗ്രാഹകരെ നൽകുന്ന നിലവാരം 10% റിബേറ്റ് കൂടുതൽ നൽകുന്നു.
                                            </p>
                                            <br /> <br />
                                            <h5 style={{ textAlign: "center" }}>
                                                വാരം വേണ്ടി സാധാരണ റിബേറ്റ്
                                            </h5>
                                            <br />
                                            <table className="officals-table">
                                                <thead>
                                                    <tr>
                                                        <th>ലളിത റിബേറ്റ്</th>
                                                        <th>സ്ഥിതി സർക്കാർ റിബേറ്റ്</th>
                                                        <th>MDA റിബേറ്റ്</th>
                                                        <th>ആകെ</th>
                                                    </tr>
                                                </thead>
                                                <tr>
                                                    <td>കോട്ടൺ ഖാദി</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>20%</td>
                                                </tr>
                                                <tr>
                                                    <td>സിൽക് ഖാദി (ഐ) റീൽഡ്</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>20%</td>
                                                </tr>
                                                <tr>
                                                    <td>സിൽക് ഖാദി (എം) സ്പൺ</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>20%</td>
                                                </tr>
                                                <tr>
                                                    <td>പോളിവാസ്ത്ര</td>
                                                    <td>&nbsp;</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                </tr>
                                                <tr>
                                                    <td>വൂൾന് ഖാദി</td>
                                                    <td>&nbsp;</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                </tr>
                                            </table>
                                            <br />
                                            <p>
                                                സാധാരണ റിബേറ്റും താഴെ പറയുന്നവയിൽ തിരഞ്ഞെടുത്തവയിലെ വിശേഷ റിബേറ്റും വിപുലീകരിക്കുന്നു.
                                            </p>
                                            <br />
                                            <h5 style={{ textAlign: "center" }}>
                                                തിരഞ്ഞെടുത്ത ദിവസങ്ങൾക്ക് വിശേഷ റിബേറ്റ്
                                            </h5>
                                            <br />
                                            <table className="officals-table">
                                                <thead>
                                                    <tr>
                                                        <th>ലളിത റിബേറ്റ്</th>
                                                        <th>സ്ഥിതി സർക്കാർ റിബേറ്റ്</th>
                                                        <th>സ്ഥിതി സർക്കാർ റിബേറ്റ്</th>
                                                        <th>MDA റിബേറ്റ്</th>
                                                        <th>ആകെ</th>
                                                    </tr>
                                                </thead>
                                                <tr>
                                                    <td>കോട്ടൺ ഖാദി</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>30%</td>
                                                </tr>
                                                <tr>
                                                    <td>സിൽക് ഖാദി (ഐ) റീൽഡ്</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>30%</td>
                                                </tr>
                                                <tr>
                                                    <td>സിൽക് ഖാദി (എം) സ്പൺ</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>30%</td>
                                                </tr>
                                                <tr>
                                                    <td>പോളിവാസ്ത്ര</td>
                                                    <td>&nbsp;</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>20%</td>
                                                </tr>
                                                <tr>
                                                    <td>വൂൾന് ഖാദി</td>
                                                    <td>&nbsp;</td>
                                                    <td>10%</td>
                                                    <td>10%</td>
                                                    <td>20%</td>
                                                </tr>
                                            </table>
                                            <br />
                                        </>
                                        :
                                        <>
                                            <p>
                                                As part of popularisation of Khadi / Handloom clothes,the Government had issued the Government order with a solicition to the effect that all Malayalees especially government employees, teachers and public sector workers should wear Khadi clothes in every wednes day.
                                            </p>
                                            <br />
                                            <p>
                                                In Kerala there are around 40 Khadi Institutions besides Khadi Board are running the Khadi Production activity producing various Khadi Fabrics such as Cotton, Silk & polyvastra. . Since the year 1985 the Governement of Kerala has permenentaly declared 10% rebate throught the year for the Retail sale on Cotton Khadi, Silk, Spun Silk Khadi Varieties. Apart from this the Government of Kerala has provided the budgetery support for giving the Special rebate 10 % for 108 dyas various spells in various festivals and occassions. The Khadi and Village Industries Commission discontinued the rebate policy from the year 2008-09 and introduced the Marketing Development Assistance Scheme. By utilizing the funds received from the MDA scheme 10% rebate more giving to the customers in every days.
                                            </p>
                                            <br />
                                            <h4 style={{ textAlign: "center" }}>Normal Rebate Throughout the Year</h4>
                                            <table className="officals-table">
                                                <thead>
                                                    <tr>
                                                        <th>Sl.No.</th>
                                                        <th>Item</th>
                                                        <th>State Govt Rebate</th>
                                                        <th>MDA Rebate</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Cotton Khadi</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>20%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Silk Khadi</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>20%</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>(i) Reeled</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>20%</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>(ii) Spun</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>20%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Polyvastra</td>
                                                        <td></td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Woollen Khadi</td>
                                                        <td></td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <br />
                                            <p>Normal rebate as well as special rebate on retail sale on Khadi i selected items as per details given below. </p>
                                            <br />
                                            <h4 style={{ textAlign: "center" }}>Special Rebate on Selected Days</h4>
                                            <table className="officals-table">
                                                <thead>
                                                    <tr>
                                                        <th>Sl.No.</th>
                                                        <th>Item</th>
                                                        <th>State Govt: Usual Rebate</th>
                                                        <th>State Govt: Special Rebate</th>
                                                        <th>MDA Rebate</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Cotton Khadi</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>30%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Silk Khadi</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>30%</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>(i) Reeled</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>30%</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>(ii) Spun</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>30%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Polyvastra</td>
                                                        <td></td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>20%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Woollen Khadi</td>
                                                        <td></td>
                                                        <td>10%</td>
                                                        <td>10%</td>
                                                        <td>20%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <br />
                                        </>

                                    }



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

export default RebateOnSale;