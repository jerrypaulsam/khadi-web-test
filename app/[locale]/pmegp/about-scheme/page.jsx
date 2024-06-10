"use client"

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/pages/PMEGP.jpg";

const AboutPMEGP = () => {
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
            <SEO pageTitle={isMalayalam ? 'കേരള ഖാദി - പി.എം.ഇ.ജി.പി പദ്ധതി' : 'Kerala Khadi - PMEGP Scheme'} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? 'പി.എം.ഇ.ജി.പി പദ്ധതി' : 'PMEGP Scheme'} innerTitle={isMalayalam ? 'കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്' : 'Kerala Khadi & Village Industries Board'} />

            <div className="team__single section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 lg-mb-30">
                            <div className="team__single-left">
                                <div className="team__single-left-thumb dark__image">
                                    <img src={image1.src} alt="PMEGP Scheme" />

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team__single-right">
                                <div className="team__single-right-experience">
                                    <h3>{isMalayalam ? "പി.എം.ഇ.ജി.പി പദ്ധതി" : "PMEGP Scheme"}</h3>
                                    <br />
                                    <h5>{isMalayalam ? "കുറിപ്പ്" : "About"}</h5>
                                    <br />
                                    <p>
                                        {isMalayalam ? "പ്രധാനമന്ത്രിയുടെ ഉദ്യോഗ പീഡന പദ്ധതി (പിഎംഇജിപി) 2008 ആഗസ്റ്റ് 15-ന് ഭാരതത്തിന്റെ പ്രധാനമന്ത്രി റെഡ് ഫോർട്ട് നിന്നുള്ള അഭിപ്രായത്തിൽ പ്രഖ്യാപിച്ചു." : "Prime Minister’s Employment Generation Programme (PMEGP) scheme announced by Hon’ble Prime Minister of India on 15th August, 2008 in his address from Red Fort."}

                                        {isMalayalam ? "ഇത് ഭാരതത്തിന്റെ സർക്കാർ പരിഷ്കരണം പിന്തുടർന്ന് മാനദണ്ഡങ്ങൾക്കുള്ള സാഹചര്യങ്ങൾ എന്നതിൽ രാജ്യത്തിന്റെ സാധാരണ തിരിച്ചറിയിൽ സജീവമായിരിക്കുന്ന തിരുവാതിര അക്ഷരത്തിന് പാടുകളിൽ ലിങ്ക് ചെയ്ത സ്കീം." : "This is credit linked Scheme of Govt. of India by merging erstwhile REGP and PMRY scheme. KVIC is the Nodal Agency at National Level"}
                                    </p>
                                    <br />
                                    <h5>{isMalayalam ? "ലക്ഷ്യങ്ങൾ" : "Objectives"}</h5>
                                    <br />
                                    <p>
                                        {isMalayalam ? "രാജ്യത്തിന്റെ ഗ്രാമീണ പ്രദേശങ്ങളിലും നഗരങ്ങളിലും തുടര്‍ന്നും സുസ്ഥിരമായ ജോലി സാധ്യതകള്‍ സൃഷ്ടിക്കുക." : "To generate continuous and sustainable employment opportunities in Rural and Urban areas of the country."}

                                        {isMalayalam ? "രാജ്യത്തിലെ അടിസ്ഥാന ഔദ്യോഗിക ജോലിക്ക് സാധാരണയായി ആണുപയോഗിക്കാറുള്ള വിഭവകളിലും, ഗ്രാമീണ വാര്‍ത്താവാഹികളുടെയും, നഗരത്തുള്ള നിരീക്ഷണക്കൂട്ടുകളുടെയും സ്ഥായിയായ ജോലി നൽകുക." : "To provide continuous and sustainable employment to a large segment of traditional and prospective artisans, rural and urban unemployed youth in the country through setting up of micro enterprises."}

                                        {isMalayalam ? "സാമൂഹ്യം സംഘടനകളും ദാനധർമ്മിക നിധികളും" : "To facilitate participation of financial institutions for higher credit flow to micro sector"}
                                    </p>
                                    <br />

                                    <h5>{isMalayalam ? "പിന്നെയും" : "Background"}</h5>
                                    <br />
                                    <p>
                                        {isMalayalam ? "18 വയസ്സിന് മേല്‍ ആളുകള്‍" : "Individuals above 18 years of age."}

                                        {isMalayalam ? "നിര്‍മാണം മുതല്‍ സര്‍വ്വിസ് സെക്റ്ററില്‍ പദ്ധതിയുടെ മേല്‍ രൂ. 25.00 ലക്ഷംകൊണ്ട് VIII ക്ലാസിന് പിന്മാറ്റം ആവശ്യമാണ്, നിര്‍മാണം മുതല്‍ സര്‍വ്വിസ് സെക്റ്ററില്‍ പദ്ധതിയുടെ മേല്‍ രൂ. 10.00 ലക്ഷംകൊണ്ട് മേല്‍ക്കും." : "VIII Std. pass required for project above Rs.25.00 lakhs in manufacturing and above Rs. 10.00 lakhs for Service Sector."}

                                        {isMalayalam ? "സ്വയംസഹായ ഗ്രൂപ്പുകളും ദാനധർമ്മിക വിശ്വാസം ഉള്ളവരും" : "Self Help Groups and Charitable Trusts."}

                                        {isMalayalam ? "സംഘടനകള്‍ രജിസ്റ്റര്‍ ചെയ്തവരും" : "Institutions Registered under Societies Registration Act- 1860."}

                                        {isMalayalam ? "ഉത്പന്ന ആധാരിത സഹകരണ സംഘങ്ങള്‍" : "Production based Co-operative Societies."}
                                    </p>
                                    <br />

                                    <h5>{isMalayalam ? "ലക്ഷ്യങ്ങളുടെ പ്രധാന ലക്ഷണങ്ങൾ" : "Salient Features"}</h5>
                                    <br />
                                    <p>
                                        {isMalayalam ? "പ്രൊജക്റ്റ് ലക്ഷ്യങ്ങൾ സ്ഥാപിക്കാൻ ലഭ്യമായ സ്വതന്ത്ര സഹായം ഒഴിവാക്കുക" : "The Scheme is implemented through KVIC and State/UT Khadi & V.I. Boards in Rural areas and through District Industries Centres in Urban and Rural areas in ratio of 30:30:40 between KVIC / KVIB / DIC respectively."}

                                        {isMalayalam ? "പ്രൊജക്റ്റുകള്‍ സ്ഥാപിക്കാൻ നിര്‍മാണം നിയമം കാരണം പഴയ യൂണിറ്റുകള്‍ അല്ലെങ്കില്‍ നിലവിലെ രാജ്യ/കേന്ദ്ര സര്‍ക്കാര സഹായം എടുത്തിരുന്നതും അവസാനം പ്രാപിച്ചിരുന്നതും." : "Assistance under the Scheme is available only to new units to be established."}

                                        {isMalayalam ? "നിര്‍മാണം നിയമം കാരണം പഴയ യൂണിറ്റുകള്‍ അല്ലെങ്കില്‍ നിലവിലെ രാജ്യ/കേന്ദ്ര സര്‍ക്കാര സഹായം എടുത്തിരുന്നതും അവസാനം പ്രാപിച്ചിരുന്നതും." : "Existing units or units already availed any Govt. Subsidy either under State/Central Govt. Schemes are not eligible.."}

                                        {isMalayalam ? "ഇനി ആണ്ടുള്ള സാധാരണയായ റിബേറ്റ് കളിലും പ്രത്യേക റിബേറ്റ് പദ്ധതികളിലും കോടതികളില്‍ കൂട്ടുകയാണ്." : "Any industry including Coir Based projects excluding those mentioned in the negative list."}

                                        {isMalayalam ? "പേര് വ്യക്തിഗത നിശ്ചിത സാമൂഹിക തിരിച്ചറിയൽ ചെയ്ത സംഘങ്ങളും" : "Per capita investment should not exceed Rs. 1.00 lakhs in plain areas and Rs. 1.50 lakhs in Hilly areas."}

                                        {isMalayalam ? "നിര്‍മാണം നിയമം കാരണം പഴയ യൂണിറ്റുകള്‍ അല്ലെങ്കില്‍ നിലവിലെ രാജ്യ/കേന്ദ്ര സര്‍ക്കാര സഹായം എടുത്തിരുന്നതും അവസാനം പ്രാപിച്ചിരുന്നതും." : "Maximum project cost of Rs. 25.00 lakhs in manufacturing sector and Rs. 10.00 lakhs in Service Sector."}
                                    </p>
                                    <br />

                                    <h5>{isMalayalam ? "പ്രവൃത്തിക്കായി പ്രദേശം" : "Area of Operation"}</h5>
                                    <br />
                                    <p>
                                        {isMalayalam ? "ഗ്രാമീണ പ്രദേശം - ക്വിക് താലുകൾ എന്നിവയിലൂടെ പരിപാലിക്കപ്പെടുന്നു." : "Rural Area as declared under KVIC Act 2006 - Scheme to be implemented by KVIC, KVIB and DIC."}

                                        {isMalayalam ? "നഗരം - പ്രാദേശിക ഔദ്യോഗിക കേന്ദ്രങ്ങളില്‍" : "Urban area - Only DIC"}
                                    </p>
                                    <br />

                                    <h5>{isMalayalam ? "നെഗറ്റീവ് ലിസ്റ്റ്" : "Negative List of Activities"}</h5>
                                    <br />
                                    <p>
                                        {isMalayalam ? "മാംസം അല്ലെങ്കില്‍ മദ്യപ്പെട്ട വസ്ത്രങ്ങളും വിപണിയില്‍ പ്രവര്‍ത്തനം ചെയ്യുന്ന ബിസിനസ് / സംവിധാനങ്ങള്‍ കണക്കിനാല്‍ ചെയ്യുന്നതാണ് നെഗറ്റീവ് ലിസ്റ്റ്." : "Industry / Business connected with productions / processing / sale of meat or intoxicant items like Beedi / Pan / Cigar / Cigarette etc."}

                                        {isMalayalam ? "വള്ളിയും നിലവിലുള്ള വസ്ത്രങ്ങളും മുതല്‍" : "Industry / Business connected with cultivation, sericulture, horticulture, floriculture."}

                                        {isMalayalam ? "പഴുപ്പിക്കുകയും പുനരചികാരം ചെയ്യുന്നതും" : "Manufacture of Polythene carry bags of less than 20 microns / containers of recycled plastic."}

                                        {isMalayalam ? "പാഷ്മീന പശ്മിന പരിശീലനം അല്ലെങ്കില്‍ ഖാദി സർട്ടിഫിക്കേഷന്‍ വ്യവസ്ഥയുടെ അടിയന്തിരപ്പിടത്തിലെ ഉത്പന്നങ്ങളുമായി ബന്ധപ്പെട്ട ഉദ്യോഗം" : "Processing of Pashmina Wool and products involving hand spinning and hand weaving coming under purview of Khadi Certification Rule."}

                                        {isMalayalam ? "രൂരൽ ഗതാഗതം (സ്വന്തം റിക്ഷയില്‍, ഹൗസ് ബോട്ട്, ടൂറിസ്റ്റ് ബോട്ട് എന്നിവ)" : "Rural Transport (except Auto rickshaw, House boat, tourist boat in A & N Islands and except house boat, Shikara & Tourist Boats in Jammu & Kashmir and Cycle Rickshaw.)"}

                                        {isMalayalam ? "സി.എൻ.ജി ഓട്ടോ റിക്ഷ കേവലം എം ആന്റ് നി ദ്വീപിലും ഉത്തരേന്ത്യയിലും മുഖ്യ കാര്യപ്പെടുത്താത്തതായി അംഗീകരിക്കുന്നതോടുകൂടി അനുവാദം ഉള്ളതാണ്." : "CNG Auto Rickshaw will be allowed only in A & N Islands and NER with the approval of Chief Secretary of the State on merit"}
                                    </p>
                                    <br />

                                    <table className="officals-table">
                                        <tr>
                                            <th colspan="3">{isMalayalam ? "മാര്‍ജിന്‍ മണി സബ്സിഡി എന്നിവയുടെ അളവ്" : "QUANTUM OF MARGIN MONEY SUBSIDY"}</th>
                                        </tr>
                                        <tr>
                                            <th>{isMalayalam ? "പിഎംഇജിപിയുടെ ലാഭാര്‍ഥികളുടെ വര്‍ഗ്ഗങ്ങൾ" : "Categories of beneficiaries under PMEGP"}</th>
                                            <th>{isMalayalam ? "ലാഭാര്‍ത്ഥികളുടെ സ്വന്തം ഉത്പന്ന പദം" : "Beneficiary’s own contribution project cost"}</th>
                                            <th>{isMalayalam ? "സബ്സിഡി നിര്‍ദ്ദിഷ്ടമാക്കുക" : "Rate of subsidy"}</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <table border="0">
                                                    <tr>
                                                        <th>{isMalayalam ? "നഗരം" : "Urban"}</th>
                                                        <th>{isMalayalam ? "ഗ്രാമീണ" : "Rural"}</th>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "സാധാരണ വർഗ്ഗം" : "General Category"}</td>
                                            <td>10%</td>
                                            <td>
                                                <table border="0">
                                                    <tr>
                                                        <td>15%</td>
                                                        <td>25%</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "പ്രത്യേകം (എസ്‌സി/എസ്റ്റി/ഓബിസി / മിനാരിട്ടീസ് / വനിതാ / പിള്ളേര്, പുരാതന സേനാസൈനികര്, ശാരീരികമായി നാഴികളിലും, നീര്‍, പര്‍വത ക്ഷേത്രം എന്നിവ)" : "Special (including SC/ST/OBC /Minorities/ Women, Ex-Servicemen, Physically handicapped, NER, Hill and Border areas etc)"}</td>
                                            <td>05%</td>
                                            <td>
                                                <table border="0">
                                                    <tr>
                                                        <td>25%</td>
                                                        <td>35%</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
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

export default AboutPMEGP;