'use client'

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";


import { useEffect, useState } from 'react';

const TermsAndConditions = () => {
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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - നിബന്ധനകളും വ്യവസ്ഥകളും" : "Kerala Khadi - Terms & Conditions"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "നിബന്ധനകളും വ്യവസ്ഥകളും" : "Terms & Conditions"} innerTitle={isMalayalam ? "നിബന്ധനകളും വ്യവസ്ഥകളും" : "Kerala Khadi Board's Terms & Conditions"} />

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
                                    <h3>{isMalayalam ? "നിബന്ധനകളും വ്യവസ്ഥകളും" : "Terms & Conditions"}</h3>
                                    <br />

                                    <p>{isMalayalam ? "ഈ വെബ്സൈറ്റ് ഉപയോഗിക്കുന്നതിന് നിങ്ങൾക്ക് താഴെ കൊടുത്തിരിക്കുന്ന നിബന്ധനകളും ശർ‌ത്തുകളും അംഗീകരിക്കണം." : "By using this website, you agree to the following terms and conditions."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "വെബ്സൈറ്റ് ഉപയോഗം" : "Website Usage"}</h5>
                                    <p>{isMalayalam ? "നിങ്ങളുടെ സ്വകാര്യതയെയും നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങളെയും സംരക്ഷിക്കാൻ നാം പ്രതിജ്ഞാബദ്ധരാണ്. ഈ വെബ്സൈറ്റിലെ വിവരങ്ങൾ, കണ്ട് പഠിക്കാനുള്ളത് മാത്രമായി എടുക്കുക. അസാധുവായ, നിയമവിരുദ്ധമായ, അല്ലെങ്കിൽ ഈ നിബന്ധനകളുടെ ലംഘനം നടത്തുന്ന പ്രവൃത്തികളിൽ ഏർപ്പെടരുത്." : "We are committed to protecting your privacy and your personal information. Use the information on this website solely for informational purposes. Do not engage in any activities that are invalid, illegal, or violate these terms."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "മാറ്റങ്ങൾ" : "Modifications"}</h5>
                                    <p>{isMalayalam ? "കേരള ഖാദി ബോർഡ് നിങ്ങളുടെ അറിയിപ്പില്ലാതെ ഈ നിബന്ധനകൾക്ക് മാറ്റം വരുത്താനുള്ള അവകാശം നിർവഹിക്കുന്നു. ഏതെങ്കിലും മാറ്റങ്ങൾ വരുത്തിയാൽ, പുതിയ നിബന്ധനകൾ ഈ വെബ്സൈറ്റിൽ പ്രസിദ്ധീകരിക്കും." : "Kerala Khadi Board reserves the right to modify these terms without notice. Any changes will be posted on this website."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "മൂല്യനിർണ്ണയം" : "Liability"}</h5>
                                    <p>{isMalayalam ? "ഈ വെബ്സൈറ്റിൽ നൽകിയിരിക്കുന്ന വിവരങ്ങൾ ശരിയായതും നിലവിലുള്ളതും ആണെന്ന് ഞങ്ങൾ ഉറപ്പു നൽകുന്നു. എങ്കിലും, ഈ വെബ്സൈറ്റിന്റെ ഉപയോഗത്തിൽ നിന്നുള്ള നാശനഷ്ടങ്ങൾക്ക് കേരള ഖാദി ബോർഡ് ഉത്തരവാദിത്വം വഹിക്കില്ല." : "We ensure that the information provided on this website is accurate and up-to-date. However, Kerala Khadi Board is not liable for any damages resulting from the use of this website."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "കൂട്ടായ്മ" : "Governing Law"}</h5>
                                    <p>{isMalayalam ? "ഈ നിബന്ധനകൾക്കും ഈ വെബ്സൈറ്റിന്റെ ഉപയോഗത്തിനും ഇന്ത്യൻ നിയമം നിയന്ത്രിക്കുന്നു. വ്യാജമായവയായോ നിയമവിരുദ്ധമായവയായോ എത്രയും പെട്ടെന്ന് ചോദ്യം ചെയ്യപ്പെടും." : "These terms and your use of this website are governed by Indian law. Any disputes will be resolved promptly in accordance with the law."}</p>
                                    <br />
                                    <h5>{isMalayalam ? "ബന്ധപ്പെടുക" : "Contact Us"}</h5>
                                    <p>{isMalayalam ? "ഈ നിബന്ധനകളെക്കുറിച്ചോ വെബ്സൈറ്റിനെക്കുറിച്ചോ നിങ്ങൾക്ക് എന്തെങ്കിലും ചോദ്യങ്ങളുണ്ടെങ്കിൽ, ദയവായി ഞങ്ങളെ ബന്ധപ്പെടുക." : "If you have any questions about these terms or the website, please contact us."}</p>

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

export default TermsAndConditions;