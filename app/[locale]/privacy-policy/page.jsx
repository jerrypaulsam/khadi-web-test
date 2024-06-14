'use client'

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";


import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - സ്വകാര്യതാ നയം" : "Kerala Khadi - Privacy Policy"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "സ്വകാര്യതാ നയം" : "Privacy Policy"} innerTitle={isMalayalam ? "സ്വകാര്യതാ നയം" : "Kerala Khadi Board's Privacy Policy"} />

            <div className="team__single section-padding">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xl-5 col-lg-5 lg-mb-30">
                            <div className="team__single-left">
                                <div className="team__single-left-thumb dark__image">
                                    <img src={image1.src} alt="image" />

                                </div>

                            </div>
                        </div> */}
                        <div className="col-xl-7 col-lg-7">
                            <div className="team__single-right">
                                <div className="team__single-right-experience">
                                    <h3>{isMalayalam ? "സ്വകാര്യതാ നയം" : "Privacy Policy"}</h3>
                                    <br />

                                    <p>{isMalayalam ? "നിങ്ങളുടെ സ്വകാര്യതയും നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങളും സംരക്ഷിക്കുന്നത് കേരള ഖാദി ബോർഡ് മഹത്തായ പ്രാധാന്യത്തോടെ കാണുന്നു." : "Kerala Khadi Board places great importance on protecting your privacy and personal information."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "വിവരശേഖരണം" : "Information Collection"}</h5>
                                    <p>{isMalayalam ? "നിങ്ങളുടെ വെബ്സൈറ്റ് സന്ദർശനത്തിന്റെയും സേവനങ്ങൾ ഉപയോഗിക്കുന്നതിന്റെയും ഭാഗമായി, വ്യക്തിഗത വിവരങ്ങൾ ശേഖരിക്കാം. ഇതിൽ നിങ്ങളുടെ പേര്, ഇമെയിൽ വിലാസം, ഫോൺ നമ്പർ എന്നിവ ഉൾപ്പെടാം." : "As part of your website visit and service usage, personal information may be collected. This may include your name, email address, and phone number."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "വിവരവിനിമയം" : "Information Usage"}</h5>
                                    <p>{isMalayalam ? "നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾ ഞങ്ങളുടെ സേവനങ്ങൾ മെച്ചപ്പെടുത്താനും നിങ്ങളുടെ ആവശ്യങ്ങൾക്കനുസരിച്ച് നിങ്ങളുടെ അനുഭവം ഉത്തമമാക്കാനുമാണ് ഉപയോഗിക്കുന്നത്." : "Your personal information is used to improve our services and tailor your experience to meet your needs."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "വിവരസുരക്ഷ" : "Information Security"}</h5>
                                    <p>{isMalayalam ? "നിങ്ങളുടെ വിവരങ്ങൾ സുരക്ഷിതവും സംരക്ഷിതവുമായി സൂക്ഷിക്കാനുള്ള പരിഹാരങ്ങൾ സ്വീകരിച്ചിട്ടുണ്ട്. അനധികൃത പ്രവേശനം തടയുന്നതിനും വിവരങ്ങളുടെ സുരക്ഷ ഉറപ്പാക്കുന്നതിനുമായി നിരവധി സുരക്ഷാ നടപടികൾ പ്രയോഗിക്കുന്നുണ്ട്." : "Measures are in place to keep your information secure and protected. Various security procedures are employed to prevent unauthorized access and ensure data security."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "കുക്കികൾ" : "Cookies"}</h5>
                                    <p>{isMalayalam ? "നിങ്ങളുടെ വെബ്സൈറ്റ് അനുഭവം മെച്ചപ്പെടുത്തുന്നതിന് കുക്കികൾ ഉപയോഗിക്കാം. കുക്കികൾ ഒരു വെബ്സൈറ്റ് നിങ്ങളുടെ ബ്രൗസറിൽ സംഭരിക്കുന്ന ചെറിയ ഫയലുകളാണ്." : "Cookies may be used to enhance your website experience. Cookies are small files stored by a website on your browser."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "വെബ്സൈറ്റ് ലിങ്കുകൾ" : "Website Links"}</h5>
                                    <p>{isMalayalam ? "നമ്മുടെ വെബ്സൈറ്റിൽ ഇതര വെബ്സൈറ്റുകളിലേക്കുള്ള ലിങ്കുകൾ ഉണ്ടാകാം. ഈ സൈറ്റുകളുടെ ഉള്ളടക്കത്തിനും സ്വകാര്യതാ നയങ്ങൾക്കും ഞങ്ങൾ ഉത്തരവാദികൾ അല്ല." : "Our website may contain links to other websites. We are not responsible for the content and privacy policies of these sites."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "മാറ്റങ്ങൾ" : "Changes"}</h5>
                                    <p>{isMalayalam ? "ഈ സ്വകാര്യതാ നയം വർഷിക്കാവുന്ന മാറ്റങ്ങൾക്കും അപ്ഡേറ്റുകൾക്കും വിധേയമാണ്. പുതിയ നയം ഈ വെബ്സൈറ്റിൽ പ്രസിദ്ധീകരിക്കുന്നതാണ്." : "This privacy policy is subject to change and updates. The new policy will be posted on this website."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "ബന്ധപ്പെടുക" : "Contact Us"}</h5>
                                    <p>{isMalayalam ? "ഈ സ്വകാര്യതാ നയത്തെക്കുറിച്ചോ വെബ്സൈറ്റിനെക്കുറിച്ചോ നിങ്ങൾക്ക് എന്തെങ്കിലും ചോദ്യങ്ങളുണ്ടെങ്കിൽ, ദയവായി ഞങ്ങളെ ബന്ധപ്പെടുക." : "If you have any questions about this privacy policy or the website, please contact us."}</p>
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

export default PrivacyPolicy;