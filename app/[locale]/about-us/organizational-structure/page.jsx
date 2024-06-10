"use client"

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";
import { useEffect, useState } from 'react';

const OrganizationalStructure = () => {

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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ഘടന" : `"Kerala Khadi - Organizational Structure"`} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "ഘടന" : "Organizational Structure"} innerTitle={isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Village Industries Board"} />

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
                                    <h3>{isMalayalam ? "ഘടന" : "Organizational Structure"}</h3>
                                    <br />
                                    <h5 className="mt-30 mb-30">{isMalayalam ? "1. മേധാവി ഓഫീസ്" : "1. HEAD OFFICE"}</h5>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "2. ജില്ല ഓഫിസുകൾ (14 ജില്ലകൾ)" : "2. DISTRICT OFFICES (14 DISTRICTS)"}</h5>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "3. പ്രധാന പദ്ധതി: പയ്യന്നൂർ ഖാദി സെൻറർ, പയ്യന്നൂർ" : "3. MAJOR PROJECT: PAYYANNUR KHADI CENTRE, PAYYANNUR"}</h5>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "4. സെൻട്രൽ സ്ലിവർ പ്ലാന്റ്: 1 എണ്ണം" : "4. CENTRAL SLIVER PLANT: 1 NO."}</h5>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "5. ജീവനക്കാരുടെ ശേഷി" : "5. EMPLOYEES STRENGTH"}</h5>
                                    <table className="officals-table">
                                        <tr>
                                            <th>{isMalayalam ? "വിഭാഗം" : "CATEGORY"}</th>
                                            <th>{isMalayalam ? "അനുമതിയുള്ള ശേഷി" : "SANCTIONED STRENGTH"}</th>
                                            <th>{isMalayalam ? "നിലവിലെ ശേഷി" : "PRESENT STRENGTH"}</th>
                                            <th>{isMalayalam ? "31/3/2015 വരെ" : "AS ON 31/3/2015"}</th>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "നിർവ്വാഹക തല" : "EXECUTIVE LEVEL"}</td>
                                            <td>10</td>
                                            <td>10</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "മധ്യനിര തല" : "MIDDLE LEVEL"}</td>
                                            <td>55</td>
                                            <td>43</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "താഴ്ന്ന വിഭാഗം" : "LOWER CATEGORY"}</td>
                                            <td>555</td>
                                            <td>342</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "ഖാദി സാങ്കേതിക സ്റ്റാഫ്" : "KHADI TECHNICAL STAFF"}</td>
                                            <td>142</td>
                                            <td>142</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "മൊത്തം" : "TOTAL"}</td>
                                            <td>762</td>
                                            <td>537</td>
                                            <td></td>
                                        </tr>
                                    </table>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "6. വകുപ്പു യൂണിറ്റുകൾ" : "6. DEPARTMENTAL UNITS"}</h5>
                                    <table className="officals-table">
                                        <tr>
                                            <th>{isMalayalam ? "ഖാദി" : "KHADI"}</th>
                                            <th>{isMalayalam ? "സ്പിന്നിംഗ് യൂണിറ്റുകൾ" : "SPINNING UNITS"}</th>
                                            <th>{isMalayalam ? "നെയ്ത്ത് യൂണിറ്റുകൾ" : "WEAVING UNITS"}</th>
                                            <th>{isMalayalam ? "മൊത്തം" : "TOTAL"}</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>232</td>
                                            <td>154</td>
                                            <td>386</td>
                                        </tr>
                                    </table>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "7. ഗ്രാമ വ്യവസായങ്ങൾ" : "7. VILLAGE INDUSTRIES"}</h5>
                                    <table className="officals-table">
                                        <tr>
                                            <th>{isMalayalam ? "തയ്യാറാക്കൽ വസ്ത്ര നിർമ്മാണ യൂണിറ്റുകൾ" : "READY MADE GARMENT MAKING UNITS"}</th>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <th>{isMalayalam ? "തേനീച്ച പ്രോസസ്സിംഗ് യൂണിറ്റുകൾ" : "HONE PROCESSING UNITS"}</th>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <th>{isMalayalam ? "ഗ്രാമത്തെ എണ്ണ യൂണിറ്റുകൾ" : "VILLAGE OIL UNITS"}</th>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <th>{isMalayalam ? "ബെഡ് നിർമ്മാണ യൂണിറ്റ്" : "BED MAKING UNIT"}</th>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <th>{isMalayalam ? "കൈകൊണ്ടുള്ള പേപ്പർ യൂണിറ്റുകൾ" : "HAND MADE PAPER UNITS"}</th>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <th>{isMalayalam ? "സോപ്പ് നിർമ്മാണ യൂണിറ്റ്" : "SOAP MAKING UNIT"}</th>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <th>{isMalayalam ? "വ്യായാമ പുസ്തകം നിർമ്മാണ യൂണിറ്റ്" : "EXERCISE BOOK MFG: UNIT"}</th>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <th>{isMalayalam ? "സ്റ്റുഡിയോ പോട്ടറി യൂണിറ്റ്" : "STUDIO POTTERRY UNIT"}</th>
                                            <td>1</td>
                                        </tr>
                                    </table>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "8. ധനസഹായം / സഹായം ലഭിച്ച & പ്രവർത്തിക്കുന്ന യൂണിറ്റുകൾ" : "8. FINANCED/ASSISTED & WORKING UNITS"}</h5>
                                    <p>{isMalayalam ? "ധനസഹായം ലഭിച്ച സ്ഥാപനങ്ങളുടെ എണ്ണം: 149" : "NO. OF INSTITUTIONS FINANCED: 149"}</p>
                                    <p>{isMalayalam ? "പ്രവർത്തിക്കുന്ന സ്ഥാപനങ്ങളുടെ എണ്ണം: 13" : "NO. OF INSTITUTIONS WORKING: 13"}</p>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "9. ഗ്രാമ വ്യവസായങ്ങൾ" : "9. VILLAGE INDUSTRIES"}</h5>
                                    <h6 className="mt-30 mb-30">{isMalayalam ? "10. മാതൃകാ പദ്ധതി & CBC പദ്ധതി പ്രകാരം ധനസഹായം ലഭിച്ച യൂണിറ്റുകൾ" : "10. UNITS FINANCED UNDER PATTERNSCHEME & CBC SCHEME"}</h6>
                                    <table className="officals-table">
                                        <tr>
                                            <th>{isMalayalam ? "വിഭാഗം" : "CATEGORY"}</th>
                                            <th>{isMalayalam ? "ധനസഹായം" : "FINANCED"}</th>
                                            <th>{isMalayalam ? "പ്രവർത്തിക്കുന്നു" : "WORKING"}</th>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "സഹകരണ സമൂഹങ്ങൾ" : "CO-OP: SOCIETIES"}</td>
                                            <td>1879</td>
                                            <td>179</td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "സ്ഥാപനങ്ങൾ" : "INSTITUTIONS"}</td>
                                            <td>2114</td>
                                            <td>263</td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "വ്യക്തികൾ" : "INDIVIDUALS"}</td>
                                            <td>15819</td>
                                            <td>4755</td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "മൊത്തം" : "TOTAL"}</td>
                                            <td>19812</td>
                                            <td>5187</td>
                                        </tr>
                                    </table>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "11. REGP പദ്ധതി പ്രകാരം ധനസഹായം ലഭിച്ച യൂണിറ്റുകൾ" : "11. UNITS FINANCED UNDER REGP SCHEME"}</h5>
                                    <p>{isMalayalam ? "ധനസഹായം ലഭിച്ച യൂണിറ്റുകളുടെ എണ്ണം: 4898" : "NO. OF UNITS FINANCED: 4898"}</p>
                                    <p>{isMalayalam ? "പ്രവർത്തിക്കുന്ന യൂണിറ്റുകളുടെ എണ്ണം: 2656" : "NO. OF UNITS WORKING: 2656"}</p>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "12. PMEGP പദ്ധതി പ്രകാരം ധനസഹായം ലഭിച്ച യൂണിറ്റുകൾ" : "12. UNITS FINANCED UNDER PMEGP SCHEME"}</h5>
                                    <p>{isMalayalam ? "31-03-2015 വരെയുള്ള ധനസഹായം ലഭിച്ച എണ്ണം: 2465" : "AS ON 31-03-2015: 2465"}</p>

                                    <h5 className="mt-30 mb-30">{isMalayalam ? "13. വിപണനം" : "13. MARKETING"}</h5>
                                    <table className="officals-table">
                                        <tr>
                                            <td>{isMalayalam ? "ഖാദി ഗ്രാമ സൗഭാഗ്യ" : "KHADI GRAMA SOUBHAGYA"}</td>
                                            <td>44</td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "ഖാദി സൗഭാഗ്യ" : "KHADI SOUBHAGYA"}</td>
                                            <td>49</td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "ഗ്രാമ സൗഭാഗ്യ" : "GRAMASOUBHAGYA"}</td>
                                            <td>119</td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "മൊബൈൽ വിറ്റുവീഴ്ച യൂണിറ്റുകൾ" : "MOBILE SALES UNITS"}</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "സെൻട്രൽ ഗോഡൗൺ" : "CENTRAL GODOWN"}</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "പദ്ധതികളുടെ ഗോഡൗണുകൾ" : "PROJECT GODOWNS"}</td>
                                            <td>12</td>
                                        </tr>
                                    </table>

                                    <p className="mt-50" style={{ fontWeight: "bold" }}>
                                        {isMalayalam ? "KKVIB-ന്റെ ഓർഗനൈസേഷണൽ ഫംഗ്ഷണൽ സെറ്റ് അപ്പ് ചാർട്ട്: " : "ORGANIZATIONAL FUNCTIONAL SET UP CHART OF KKVIB: "} <Link href={`#`}>{isMalayalam ? "ഇവിടെ ക്ലിക്ക് ചെയ്യുക" : "CLICK HERE"}</Link>
                                    </p>
                                    <p className="mt-20" style={{ fontWeight: "bold" }}>
                                        {isMalayalam ? "KKVIB-ന്റെ ഓർഗനൈസേഷണൽ അഡ്മിനിസ്ട്രേറ്റീവ് സെറ്റ് അപ്പ് ചാർട്ട്: " : "ORGANIZATIONAL ADMINISTRATIVE SETUP CHART OF KKVIB: "} <Link href={`#`}>{isMalayalam ? "ഇവിടെ ക്ലിക്ക് ചെയ്യുക" : "CLICK HERE"}</Link>
                                    </p>
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

export default OrganizationalStructure;