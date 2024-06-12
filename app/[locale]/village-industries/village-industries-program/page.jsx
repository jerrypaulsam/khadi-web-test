"use client"

import { useEffect, useState } from 'react';
import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";


const VillageIndustriesProgram = () => {
    const [isMalayalam, setIsMalayalam] = useState(false);

    useEffect(() => {
        let language = localStorage.getItem("language");
        if ((language === null && language === undefined) || language === "eng") {
            setIsMalayalam(false)
        } else {
            setIsMalayalam(true)
        }

    }, [isMalayalam]);

    const aboutContent = {
        image_1: '/assets/img/about/abo-1.jpg',
        image_2: '/assets/img/about/abo-2.jpg',
        subtitle: isMalayalam ? "ഗ്രാമവ്യവസായത്തിന്റെ നിര്‍വ്വചനം" : 'What is Village Industries?',
        title: isMalayalam ? "ഗ്രാമ പ്രദേശങ്ങളില്‍ സ്ഥാപിക്കേണ്ടതും വൈദ്യുതി ഉപയോഗിച്ചോ അല്ലാതെയോ എന്തെങ്കിലും ഉല്‍പ്പാദനം നടത്തുകയോ സേവനം ലഭ്യമാക്കുന്നതോ ആയ വ്യവസായവും സമതല പ്രദേശങ്ങളില്‍ 3,00,000 രൂപ വരെയും കുന്നിന്‍പ്രദേശങ്ങളില്‍ 10,00,000 രൂപ വരെയും അല്ലെങ്കില്‍ ഔദ്യോഗിക ഗസറ്റില്‍ കേന്ദ്രസര്‍ക്കാര്‍ യഥാസമയം പ്രത്യേകമായി പരസ്യപ്പെടുത്തുന്നതോ ആയ തുക മൂലധന നിക്ഷേപം നടത്തുമ്പോള്‍ കുറഞ്ഞത് ഒരു കൈത്തൊഴില്‍ക്കാരനോ തൊഴിലാളിക്കോ തൊഴില്‍ ഉറപ്പ് വരുത്തുന്നതും ആയ വ്യവസായമാണ് ഗ്രാമവ്യവസായം എന്നതുകൊണ്ട് അര്‍ത്ഥമാക്കുന്നത്."
            : "Village Industry' means any industry located in a rural are which produces any goods or renders any service with or without the use of power in which the fixed capital investment per head of an artisan or a worker does not exceed Rs. 3.00 Lakh in plain areas and Rs. 10.00 Lakhs in hilly areas or such other sum as may be by notification in the official gazette, be specified from time to time by the Central Government",
        description: isMalayalam ? "അസംസ്കൃത വസ്തുക്കളുടെ ഉപഭോഗത്തെ അടിസ്ഥാനമാക്കി ഗ്രാമ വ്യവസായങ്ങളെ 7 ഗ്രൂപ്പുകളായി തരംതിരിച്ചിട്ടുണ്ട്. ലോഹങ്ങളെ അടിസ്ഥാനമാക്കിയുള്ള വ്യവസായങ്ങള്‍, വനവിഭവങ്ങളെ അടിസ്ഥാനമാക്കിയുള്ള വ്യവസായങ്ങള്‍, ഭക്ഷ്യവസ്തുക്കളെ അടിസ്ഥാനമാക്കിയുള്ള വ്യവസായങ്ങള്‍, പോളിമര്‍, രാസവസ്തുക്കള്‍ എന്നിവയെ അടിസ്ഥാനമാക്കിയുള്ള വ്യവസായങ്ങള്‍, വസ്ത്ര വ്യവസായം (ഖാദി ഒഴികെ), എഞ്ചിനീയറിംഗ്, പരമ്പരാഗതമല്ലാത്ത ഊര്‍ജ്ജം ഉപയോഗിച്ചുള്ള വ്യവസായങ്ങള്‍, സേവനം ലഭ്യമാക്കുന്ന വ്യവസായങ്ങള്‍"
            : 'The Kerala Khadi and Village Industries Board had established and financed several Village Industries Units through the Departmentally, Co-op: Societies, Charitable Institutions and Individuals etc, with the financial support of Khadi and Village Industries Commission and Government of Kerala. Upto 1995 the Board have given financial assistance under the pattern scheme, 1995 onwards and upto 1998-1999 provided the financial assistance under Consortium Bank Credit Scheme (CBC) of KVIC. Under CBC, the loans were provided on higher rate of interest depending upon the Prime lending Rates (PLR). The operation of the schemes was ended during the year 1998-99. The Board had totaly financed and established 18263 units and 1578 units pattern and CBC schemes respectively. Out of which 4775 and 444 units are working as on 31-3-2015. After discontinuation of the direct loan schemes of KVIC a new scheme was lauched named as SPECIAL EMPLOYMENT PROGRAMME/ RURAL EMPLOYMENT GENERATION PROGRAMME(REGP). In this scheme, assisted the 4898 nos units out of which 2565 units are working. The REGP Scheme was discontinued with effect from 31-3-2008.',
        btn_text: isMalayalam ? 'കൂടുതൽ വായിക്കുക' : 'Read More',
        btn_href: `/${isMalayalam ? "mal" : "en"}/about-us`,
        shape_1: '/assets/img/shape/about-1.png',
        shape_2: '/assets/img/shape/about-2.png',
    }
    return (
        <>
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ഗ്രാമവ്യവസായങ്ങൾ" : "Kerala Khadi - Village Industries"} />
            <HeaderOne isMalayalam={isMalayalam} />

            <BreadCrumb title={isMalayalam ? "ഗ്രാമവ്യവസായങ്ങൾ" : "Village Industries"} innerTitle={isMalayalam ? "ഗ്രാമവ്യവസായങ്ങളെക്കുറിച്ച്" : "About Village Industries"} />
            <div className="about__company section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-6 xl-mb-30">
                            <div className="about__company-left">
                                <div className="about__company-left-image dark__image mb-40">
                                    <img src={aboutContent.image_1} alt="image" />
                                    <img src={aboutContent.image_2} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6">
                            <div className="about__company-right">
                                <div className="about__company-right-title">
                                    <span className="subtitle-one">{aboutContent.subtitle}</span>
                                    <h5>{`"${aboutContent.title}"`}</h5>
                                    <br />
                                    <p>{aboutContent.description}</p>
                                    {/* <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link> */}
                                </div>
                            </div>
                            <br />
                        </div>
                        <br />

                        <div className="about__company-right">
                            <div className="about__company-right-title">
                                <span className="subtitle-one">{isMalayalam ? "പ്രധാനമന്ത്രിയുടെ എംപ്ലോയ്‌മെൻ്റ് ജനറേഷൻ പ്രോഗ്രാം (പിഎംഇജിപി)" : "Prime Minister’s Employment Generation Programme (PMEGP)"}</span>
                                {/* <h5>{`"${aboutContent.title}"`}</h5> */}
                                <br />
                                <p>
                                    {isMalayalam ? "നിലവിൽ നിലവിലുള്ള രണ്ട് സ്കീമുകൾ REGP, PMRY എന്നിവ സംയോജിപ്പിച്ച് ഇന്ത്യാ ഗവൺമെൻ്റ് 2008 ഓഗസ്റ്റ് 15-ന് 'പ്രധാനമന്ത്രിയുടെ തൊഴിൽ സൃഷ്ടിക്കൽ പദ്ധതി (PMEGP)' എന്ന പദ്ധതി ആരംഭിച്ചു. കെവിഐസിക്കും ഡിഐസികൾക്കും പുറമെ പിഎംഇജിപിയുടെ നടപ്പാക്കുന്ന ഏജൻസികളിലൊന്നാണ് കെവിഐബി. ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് കമ്മീഷനുമായി (കെവിഐസി) ദേശീയ തലത്തിൽ നോഡൽ ഏജൻസിയായി MSME ഗവൺമെൻ്റ് ഓഫ് ഇന്ത്യ മന്ത്രാലയത്തിൻ്റെ കീഴിൽ ഭരിക്കുന്ന ക്രെഡിറ്റ് ലിങ്ക്ഡ് സബ്‌സിഡി പ്രോഗ്രാമാണ് PMEGP. പ്രസ്തുത പരിപാടിക്ക് കീഴിൽ, കെവിഐസി, ഇന്ത്യാ ഗവൺമെൻ്റ്, വിവിധ ഗുണഭോക്താക്കൾക്ക് നിയുക്ത നോഡൽ ബാങ്ക് ശാഖകൾ വഴി വിതരണം ചെയ്യുന്നതിനായി മാർജിൻ മണി ഫണ്ട് അനുവദിക്കുന്നു. പ്രസ്തുത പരിപാടി ഗ്രാമീണ / നഗര പ്രദേശങ്ങളിൽ സൂക്ഷ്മ സംരംഭങ്ങൾ സ്ഥാപിക്കുന്നതിലൂടെ തൊഴിലവസരങ്ങൾ സൃഷ്ടിക്കാൻ വിഭാവനം ചെയ്യുന്നു. കേരള ഖാദി ആൻഡ് വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ് (കെകെവിഐബി) കേരളത്തിലെ ഗ്രാമപ്രദേശങ്ങളിൽ മാത്രം നടപ്പിലാക്കുന്ന ഒരു ഏജൻസിയാണ്. 31-3-2015 ലെ കണക്കനുസരിച്ച് മാർജിൻ മണി രൂപയായി നൽകി. 2465 യൂണിറ്റുകളിലേക്ക് 5368.81 ലക്ഷം രൂപയും ബോർഡ് വഴി 18762 തൊഴിലവസരങ്ങളും സൃഷ്ടിച്ചു." : " The presently ongoing scheme “Prime Minister’s Employment Generation Programme (PMEGP)” was launched on 15th August 2008 by Government of India by merging two existing scheme REGP and PMRY. KVIB is one of the implementing agencies of PMEGP, besides KVIC and DICs. PMEGP is a credit linked subsidy programme administered by Ministry of MSME Government of India with Khadi & Village Industries Commission (KVIC) as Nodal Agency at National Level. Under the said programme the KVIC, Government of India, allocates Margin Money funds to be disbursed to various beneficiaries through designated Nodal Bank branches. The said programme envisage generation of employment opportunities through establishment of Micro Enterprises in rural /urban areas. The Kerala Khadi and Village Industries Board (KKVIB) is an implementing agency only for rural areas of the Kerala state. As on 31-3-2015 provided the Margin money to Rs. 5368.81 lakhs to 2465 units and 18762 nos employment generated through the Board."}
                                </p>
                                {/* <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link> */}
                            </div>
                        </div>
                        <br />

                        <div className="about__company-right">
                            <div className="about__company-right-title">
                                <span className="subtitle-one">{isMalayalam ? "എൻ്റെ ഗ്രാമം" : "ENTE GRAMAM"}</span>
                                {/* <h5>{`"${aboutContent.title}"`}</h5> */}
                                <br />
                                <p>
                                    {isMalayalam ? "ഗ്രാമീണ ദരിദ്രരുടെ ഉന്നമനം ലക്ഷ്യമാക്കി കേരള ഖാദി ഗ്രാമവ്യവസായ ബോർഡ് ഗ്രാമ വ്യവസായങ്ങൾ സ്ഥാപിക്കുന്നതിന് സാമ്പത്തിക സഹായം നൽകുന്നു. തൊഴിലില്ലാത്ത യുവാക്കൾക്കും കരകൗശല തൊഴിലാളികൾക്കും പ്രത്യേകിച്ച് സ്ത്രീകൾക്ക് തൊഴിലവസരങ്ങൾ ലഭ്യമാക്കുന്നതിനായി കേരള സർക്കാരിൻ്റെ സാമ്പത്തിക സഹായത്തോടെ കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ് രൂപകല്പന ചെയ്യുകയും വികസിപ്പിക്കുകയും പ്രോത്സാഹിപ്പിക്കുകയും ചെയ്യുന്ന ഒരു പ്രധാന പരിപാടി, പ്രത്യേക തൊഴിൽ സൃഷ്ടിക്കൽ പരിപാടി. ന്യൂനപക്ഷ മേഖലയിലെ ആളുകൾ. 2008-2009 വർഷത്തിലാണ് പദ്ധതി ആരംഭിച്ചത്. ഈ പ്രോഗ്രാമിന് കീഴിൽ സ്കീം അവതരിപ്പിക്കുമ്പോൾ, വ്യക്തിഗത പ്രോജക്റ്റിന് നേരിട്ട് ബാങ്ക് ധനസഹായം 1000 രൂപ വരെ. 50000/- ബോർഡ് കേസുകൾ ബാങ്കുകളിലേക്ക് പ്രചോദിപ്പിക്കുകയും നയിക്കുകയും സ്പോൺസർ ചെയ്യുകയും കേസുകൾ അനുവദിച്ചതിന് ശേഷവും നൽകുകയും ചെയ്തു. ഗുണഭോക്താവിന് അനുകൂലമായ മാർജിൻ മണി പിന്തുണയായി KKVIB മൊത്തം പ്രോജക്റ്റ് ചെലവിൻ്റെ 25% അനുവദിക്കും, (സ്ത്രീകളുടെ കാര്യത്തിൽ 30%,/OBC/ ന്യൂനപക്ഷം, 40% എസ്‌സി/എസ്ടി വിഭാഗങ്ങൾക്ക്) മാർജിൻ തുകയുടെ തുക താഴെ സൂക്ഷിക്കണം. സ്കീമിൻ്റെ മാർഗ്ഗനിർദ്ദേശങ്ങൾ അനുസരിച്ച് ധനസഹായം നൽകുന്ന ബ്രാഞ്ച് തലത്തിൽ ഗുണഭോക്താവിൻ്റെ പേരിൽ 2 വർഷത്തേക്ക് സ്ഥിര നിക്ഷേപം. 2012-13 വർഷം മുതൽ സ്കീമിൻ്റെ പേര് 'ENTE GRAMAM' എന്ന് പുനർനാമകരണം ചെയ്യുകയും പദ്ധതിച്ചെലവ് സീലിംഗ് രൂപയായി വർദ്ധിപ്പിക്കുകയും ചെയ്തു. 10.00 ലക്ഷം. ഈ സ്കീമിന് കീഴിൽ സാമ്പത്തിക സഹായം ലഭിക്കുന്ന ഗുണഭോക്താക്കൾക്ക് വിപണന പിന്തുണ നൽകുന്നതിനുള്ള ക്രമീകരണങ്ങൾ നിർദ്ദേശിക്കുന്നു."
                                        : "Kerala Khadi and Village Industries Board keeping with its mission to uplift the rural poor, provides financial assistance for establishing Village Industries. A flagship programme viz, Special Employment Generation Programme has been designed, developed and promoted by the Kerala Khadi & Village Industries Board, with the financial support of Government of Kerala, to provide the employment opportunities to the unemployed youths, artisans, especially for women and minority sector people. The Scheme was started during the year 2008-2009. When introducing the scheme under this programme, direct bank financing of individual project upto Rs. 50000/- the Board was to motivate, guide and sponsor the cases to banks and after sanction of cases. The KKVIB would release 25% of total Project cost as Margin Money support in favour of the beneficiary, ( 30% in case of women,/OBC/ Minority and 40% for SC/ST Categories ) The amount of Margin money was to kept under the fixed Deposit for a period of 2 years in the name of the beneficiary at financing branch Level as per guidelines of the scheme. Since the year 2012-13 the scheme is renamed as “ENTE GRAMAM” and the Project cost Ceiling enhanced up to Rs. 10.00 Lakhs. Under this scheme the arrangements are proposed for extending marketing support to the beneficiaries who avail financial assistance under this Scheme."}
                                </p>

                            </div>
                            <br />

                            
                        </div>
                    </div>
                </div>
                <img className="about__one-shape-1" src={aboutContent.shape_1} alt="shape" />
                <img className="about__one-shape-2" src={aboutContent.shape_2} alt="shape" />
            </div>

            <div className='all-footer'>
                <FooterOne isMalayalam={isMalayalam} />
            </div>
            <ScrollToTop />
        </>
    );
};

export default VillageIndustriesProgram;