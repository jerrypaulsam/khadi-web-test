'use client'

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const Incentives = () => {

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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - പ്രോത്സാഹനങ്ങൾ" : "Kerala Khadi - Incentives"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "പ്രോത്സാഹനങ്ങൾ" : "Incentives"} innerTitle={isMalayalam ? "ഖാദി കലാകാരന്മാർക്ക് പ്രോത്സാഹനം" : "Incentive to Khadi Artisans"} />

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
                                    <h3>{isMalayalam ? "ഖാദി കലാകാരന്മാർക്ക് പ്രോത്സാഹനം" : "Incentive to Khadi Artisans"}</h3>
                                    <br />
                                    <p>
                                        {isMalayalam ?
                                            "കേരളത്തിലെ ഖാദി മേഖലയില്‍ നിലവില്‍ 12000 കിടക്ക ഉപയോഗിക്കുന്നതുണ്ട്, ഇവരില്‍ ഭൂരിഭാഗവും ദാരിദ്ര്യ രേഖയ്ക്ക് താഴെ വരുന്ന സ്ത്രീകളാണ്. ഞങ്ങള്‍ക്ക് നിര്‍മ്മാണ കേന്ദ്രം, ഗോഡൗണ്‍ എന്നിവയുടെ രൂപത്തില്‍ നിര്‍മ്മിതിയുള്ള അടിസ്ഥാനസൗകര്യങ്ങള്‍ ഉള്ളതിനാല്‍ അടിസ്ഥാനസൗകര്യങ്ങളില്‍ അധികമായ നിക്ഷേപം കൂടാതെ, 20000 പേരെ കൂടി ലാഭം ചെയ്യാന്‍ പര്യാപ്തമായ സാധ്യതകളുണ്ട്." :
                                            "Khadi Sector in Kerala at present employees 12000 artisans, mostly women below the poverty line. Since we have built in infrastructures in the form of workshed, Godown and marketing outlets, there is lot of scope for raising the number of beneficiaries by another 20,000, without additional investment on infrastructure."
                                        }
                                        <br /><br />
                                        {isMalayalam ?
                                            "അതേ സമയം, സംസ്ഥാനത്തെ ഉയര്‍ന്ന ഗ്രാമീണ കൂലി നിരക്കിനെ പരിഗണിച്ച്, പിന്‍വലിക്കുന്നതിലും നെയ്ത്തിലും കലാകാരന്‍മാര്‍ താരതമ്യേന ഉയർന്ന കൂലി പ്രതീക്ഷിക്കുന്നു. തുടര്‍ന്ന് ഖാദി നെയ്യുന്ന ഹാന്‍ഡ്ലൂം മേഖലയുടെ നെയ്ത്തുകാരും ഹാന്‍ഡ്ലൂം മേഖലയില്‍ ഉള്ള നിരക്കിനു തുല്യമായ കൂലി പ്രതീക്ഷിക്കുന്നു. കൂടുതൽ നെയ്ത്തുകാരുടെ അരങ്ങേറ്റം, നെയ്ത്തിന്‍റെ ആറിരട്ടി അവരുടെ സംഖ്യയിലുള്ളവർക്കുള്ള അധിക തൊഴിൽ ഉറപ്പാക്കുന്നു. ഈ പശ്ചാത്തലത്തിൽ നിർമ്മാണം വർധിപ്പിക്കുകയും കലാകാരന്‍മാർക്ക് ന്യായമായ വരുമാനം ഉറപ്പാക്കുകയും ചെയ്യുന്നതിനായി നെയ്ത്തുകാരനും നെയ്ത്തുകാർക്കും ഉത്സാഹം നൽകുന്നത് അവശ്യമാണ്. ഈ മേഖലയിൽ സ്ത്രീകൾ, പ്രത്യേകിച്ചും തൊഴിൽ ഇല്ലാത്ത വീട്ടമ്മമാരാണ് കൂടുതൽ ജോലി ചെയ്യുന്നത് കൊണ്ട്, ഈ മേഖലയിൽ വർദ്ധിച്ചുള്ള ജോലി ഗ്രാമപ്രദേശങ്ങളിൽ ദാരിദ്ര്യ നിവാരണത്തിന് സഹായകമാകും." :
                                            "At the same time, having regard to the high rural wage level in the State, the artisans expect a comparatively high wage in spinning and weaving too. Further the Weavers in handloom sector, who weave Khadi too, expect wages on par with the rate in Handloom Sector. Introduction of more Weavers ensures additional employment to 6 times their number in spinning. In the back ground it is necessary to provide incentive to spinners and Weavers, to enhance production and ensure reasonable income to the artisans. Since this sector employees women more particularly unemployed house wives, the expansion of work in this sector will help poverty alleviation in villages."
                                        }
                                    </p>
                                    <br />

                                    <p>
                                        {isMalayalam ?
                                            "ഖാദി മേഖലയിലെ നെയ്ത്തുകാരും നെയ്ത്തുകാരും തുടരുകയും കൂടുതൽ കലാകാരൻമാരെ ഈ മേഖലയിലേക്ക് ആകർഷിക്കുകയും ചെയ്യുന്നതിന് ഉദ്ദേശിക്കുന്നതിനാൽ, സർക്കാർ അവരുടെ നിർമ്മാണത്തിന് അടിസ്ഥാനമാക്കിയുള്ള ഉത്സാഹം നൽകുന്നു. നിലവിലെ ഖാദി കലാകാരൻമാർക്ക് ഉത്സാഹം നൽകുന്ന നിരക്കുകൾ താഴെ കൊടുക്കുന്നു:" :
                                            "With a view to continue the Spinners and weavers in the Khadi sector and attract more artisans to this sector, the Government is providing incentive to artisans based on their production. The present rate of production incentives to Khadi Artisans are given below:"
                                        }
                                        <br /><br />
                                        <li style={{ fontWeight: "bold" }}>
                                            {isMalayalam ? "സ്പിന്നര്‍ = 60 പൈസ്  ഒരു ഹാങ്കിന്  നെയ്ത്തിനു." : "Spinners = 60 paise per Hank for spinning."}
                                        </li>
                                        <li style={{ fontWeight: "bold" }}>
                                            {isMalayalam ? "നെയ്ത്തുകാരന്‍ = 180 പൈസ്  ഒരു ഹാങ്കിന് നെയ്ത്ത് ഉപയോഗിച്ച് നെയ്ത്തിനു." : "Weavers = 180 paise per Hanks consumed by the weaver."}
                                        </li>
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

export default Incentives;