"use client"

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/pages/PMEGP.jpg";

const PMEGPFAQ = () => {
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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - PMEGP പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ" : "Kerala Khadi - PMEGP Frequently Asked Questions"} />
            <HeaderOne />
            <BreadCrumb title={isMalayalam ? "PMEGP പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ" : "PMEGP - Frequently Asked Questions"}
                innerTitle={isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Village Industries Board"} />

            <div className="team__single section-padding">
                <div className="container">
                    <div className="col">
                        <div className="col-xl-12 col-lg-12 lg-mb-30" style={{ display: "flex", justifyContent: "center" }}>
                            <div className="team__single-left">
                                <div className="team__single-left-thumb dark__image">
                                    <img src={image1.src} alt="PMEGP - Frequently Asked Questions" />

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12" style={{ display: "flex", justifyContent: "center" }}>
                            <div className="team__single-right">
                                <div className="team__single-right-experience">
                                    <h3>{isMalayalam ? "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ" : "Frequently Asked Questions"}</h3>
                                    <br />
                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>{isMalayalam ? "ചോദ്യം" : "QUESTION"}</th>
                                                <th>{isMalayalam ? "ഉത്തരം" : "ANSWER"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{isMalayalam ? "പരമാവധി പദ്ധതിയുടെ ചെലവേത്?" : "What Is The Maximum Project Cost Allowed?"}</td>
                                                <td>{isMalayalam ? "ഉത്പാദന യൂണിറ്റിന് 25.00 ലക്ഷം രൂപയും സേവന യൂണിറ്റിന് 10.00 ലക്ഷം രൂപയും" : "Rs. 25.00 Lakhs For Manufacturing Unit And Rs. 10.00 Lakhs For Service Unit"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഭൂമിയുടെ ചെലവ് പദ്ധതിയിൽ ഉൾപ്പെടുമോ?" : "Whether Cost Of Land Includes In The Project?"}</td>
                                                <td>{isMalayalam ? "ഇല്ല" : "No"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "എത്രമാത്രം മാർജിൻ മണി (സർക്കാർ സബ്‌സിഡി) അനുവദനീയമാണ്?" : "How Much Margin Money (Govt. Subsidy) Admissible?"}</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "PMEGP പ്രകാരം ഗുണഭോക്താക്കളുടെ വിഭാഗങ്ങൾ" : "Categories Of Beneficiaries Under PMEGP"} ({isMalayalam ? "സാധാരണ വിഭാഗം" : "General Category"})
                                                    <p>{isMalayalam ? "പദ്ധതിയുടെ ചെലവിന്റെ സബ്‌സിഡിയുടെ നിരക്ക്" : "Rate Of (Margin Money) Subsidy Of Project Cost"}</p></td>
                                                <td>{isMalayalam ? "നഗരം" : "Urban"}</td>
                                                <td>{isMalayalam ? "ഗ്രാമം" : "Rural"}</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>15%</td>
                                                <td>25%</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "പ്രത്യേക വിഭാഗം (SC/ST/OBC, ന്യൂനപക്ഷങ്ങൾ/സ്ത്രീകൾ/മുൻസൈനികർ, ശാരീരിക വൈകല്യമുള്ളവർ, NER, മലനിരകളും അതിർത്തി പ്രദേശങ്ങളും)" : "Special Category (SC/ST/OBC, Minorities/Women.Ex-Servicemen, Physically Handicapped, NER, Hill And Border Areas Etc.)"}</td>
                                                <td>25%</td>
                                                <td>35%</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "പദ്ധതിയുടെ ചെലവിന്റെ ഘടകങ്ങൾ എന്തെല്ലാം?" : "What Is The Component Of Project Cost?"}</td>
                                                <td>{isMalayalam ? "മൂലധന ചെലവ് വായ്പ, വർക്കിംഗ് കാപിറ്റലിന്റെ ഒരു ചക്രം, സാധാരണ വിഭാഗത്തിന് 10% പദ്ധതിയുടെ ചെലവായി സ്വയക്കൊണ്ടു നൽകിയ സംഭാവന, ബലഹീന വിഭാഗത്തിന് 5% പദ്ധതിയുടെ ചെലവായി" : "Capital Expenditure Loan, One Cycle Of Working Capital And 10% Of Project Cost As Own Contribution In Case Of General Category And 5% Project Cost In Case Of Weaker Section."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഗുണഭോക്താക്കൾ ആരെല്ലാം?" : "Who Are The Beneficiaries?"}</td>
                                                <td>{isMalayalam ? "വ്യക്തിഗത സംരംഭകർ, സ്ഥാപനങ്ങൾ, സഹകരണ സംഘങ്ങൾ, സ്വയം സഹായ കൂട്ടായ്മകൾ, ട്രസ്റ്റുകൾ" : "Individual Entrepreneurs, Institutions, Co-Operative Societies, Self Help Groups And Trusts."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "സാമ്പത്തിക ഏജൻസികൾ ആരെല്ലാം?" : "Which Are The Financial Agencies?"}</td>
                                                <td>{isMalayalam ? "പൊതു മേഖലാ ബാങ്കുകൾ, പ്രാദേശിക ഗ്രാമീണ ബാങ്കുകൾ (RRB), സഹകരണ ബാങ്കുകൾ, സംസ്ഥാന ടാസ്ക് ഫോർസ് കമ്മിറ്റിയാൽ അംഗീകൃത സ്വകാര്യ ഷെഡ്യൂളഡ് വാണിജ്യ ബാങ്കുകൾ" : "Public Sector Banks, Regional Rural Banks (RRB), Co-Operative Banks And Private Scheduled Commercial Banks Approved By State Task Force Committee"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "മൂലധന ചെലവ് വായ്പ/നഗദ് ക്രെഡിറ്റ് പരിധി എങ്ങനെ ഉപയോഗിക്കും?" : "How The Capital Expenditure Loan/Cash Credit Limit Be Utilized?"}</td>
                                                <td>{isMalayalam ? "ലോക്ക്-ഇൻ-കാലയളവിന്റെ മൂലധനത്തിന് മൂന്നു വർഷത്തിനുള്ളിൽ പ്രവർത്തി മൂലധനം ഒന്നുകിൽ 100% പരിധിയിലേക്കെങ്കിലും എത്തിക്കണം, ശരാശരിയായി അംഗീകൃത പരിധിയുടെ കുറഞ്ഞത് 75% ഉപയോഗിക്കണം." : "Working Capital At Least Once Should Touch 100% Limit Of Cash Credit Within Three Years Of Lock-In-Period Of Margin Money And Not Less Than 75% Of The Utilization Of The Sanction Limit On An Average."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഗുണഭോക്താവ് എവിടെ തന്റെ അപേക്ഷ/പദ്ധതി സമർപ്പിക്കണം?" : "Where The Beneficiary Has To Submit His/Her Application/Project?"}</td>
                                                <td>{isMalayalam ? "ഗുണഭോക്താവ് അടുത്തുള്ള KVIC/KVIB/DIC ഓഫീസുകളിൽ അല്ലെങ്കിൽ ഏതെങ്കിലും ബാങ്കുകളിൽ അപേക്ഷ/പദ്ധതി സമർപ്പിക്കാം. (ഞങ്ങളുടെ ജില്ലാ ഓഫീസുകളുടെ വിലാസ പട്ടിക ഞങ്ങളുടെ വെബ്സൈറ്റിൽ ലഭ്യമാണ്: Www.Kkvib.Org)" : "Beneficiary Can Submit Their Application/Project At Nearest KVIC/KVIB/DIC Offices Or Any Banks. (List Of Our District Offices Addresses Are Available At Our Website: Www.Kkvib.Org)"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഗ്രാമ വ്യവസായം എന്താണ്?" : "What Is Village Industry?"}</td>
                                                <td>{isMalayalam ? "ഗ്രാമ മേഖലയിൽ സ്ഥിതിചെയ്യുന്ന (നെഗറ്റീവ് ലിസ്റ്റിൽ പറയുന്നവയൊഴികെ) ഏതെങ്കിലും വ്യവസായം, ശക്തിയോടെയോ ശക്തിയില്ലാതെയോ സാധനങ്ങൾ ഉൽപാദിപ്പിക്കുന്നതോ സേവനം നൽകുന്നതോ, മുഴുവൻ സമയ കരകൗശലവിദ്യാഭ്യാസിയുടെയും തൊഴിലാളിയുടെയും തലകുറ്റത്തിൽ നിശ്ചിത മൂലധന നിക്ഷേപം സമതലപ്രദേശങ്ങളിൽ 1.00 ലക്ഷം രൂപയോ മലനിരകളിൽ 1.50 ലക്ഷം രൂപയോ കവിയാൻ പാടില്ല." : "Any Village Industry (Except Those Mentioned In The Negative List) Located In The Rural Area Which Produces Any Goods Or Renders Any Service With Or Without The Use Of Power And In Which The Fixed Capital Investment Per Head Of A Full Time Artisan Or Worker Does Not Exceed Rs. 1.00 Lakh In Plain Area And Rs. 1.50 Lakh In Hilly Areas"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഗ്രാമ പ്രദേശം എന്താണ്?" : "What Is Rural Area?"}</td>
                                                <td>{isMalayalam ? "സംസ്ഥാനത്തിന്റെ വരുമാന രേഖ പ്രകാരം ഗ്രാമമെന്നു വർഗ്ഗീകരിച്ച ഏതു പ്രദേശവും, ജനസംഖ്യയെ ആശ്രയിച്ചിട്ടില്ല. 20000 ആളുകളുടെ ജനസംഖ്യയില്ലെങ്കിൽ പട്ടണമെന്നു വർഗ്ഗീകരിച്ച പ്രദേശവും ഉൾപ്പെടുന്നു." : "Any Area Classified As Village As Per The Revenue Record Of The State, Irrespective Of The Population. It Also Includes An Area Even If Classified As Town Provided As Population Does Not Exceed 20000."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "പ്രായ പരിധി എന്താണ്?" : "What Is Age Limit?"}</td>
                                                <td>{isMalayalam ? "18 വയസ്സിനു മുകളിൽ പ്രായമുള്ള ഏതെങ്കിലും പ്രായപൂർത്തിയായ ഗുണഭോക്താക്കൾ PMEGP പ്രകാരം ധനസഹായം ലഭിക്കും." : "Any Adult Beneficiary Above 18 Years Is Eligible For Financing Under PMEGP"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "പദ്ധതിയുടെ പ്രധാന മാനദണ്ഡങ്ങൾ എന്തെല്ലാം?" : "What Are The Main Criteria Of Project?"}</td>
                                                <td>{isMalayalam ? "ഗ്രാമ പ്രദേശം (ഗ്രാമ മേഖലാ പദ്ധതി) എന്ന ക്രൈറ്റീരിയം, പ്രതിവിഹാര നിക്ഷേപം, സ്വന്തം സംഭാവന, നെഗറ്റീവ് ലിസ്റ്റ് എന്നിവ പാലിക്കണം, യൂണിറ്റ് പുതിയത് ആയിരിക്കണം." : "It Should Fulfill The Criteria Of Rural Area (For Rural Area Project), Per Capita Investment, Own Contribution, Negative List And The Unit Should Be New One."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "EDP പരിശീലനം നിർബന്ധമാണോ?" : "Whether EDP Training Is Compulsory?"}</td>
                                                <td>{isMalayalam ? "ബാങ്ക് വായ്പയുടെ ആദ്യ ഗഡു നൽകുന്നതിന് മുൻപ്, ഗുണഭോക്താവിന് 2-3 ആഴ്ച EDP പരിശീലനം നിർബന്ധമാണ്." : "Before Release Of First Installment Of Bank Loan, EDP Training 2-3 Weeks Training To The Beneficiary Is Compulsory."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "കോലാറ്ററൽ സുരക്ഷ നിർബന്ധമാണോ?" : "Whether Collateral Security Is Mandatory?"}</td>
                                                <td>{isMalayalam ? "RBI മാർഗ്ഗനിർദ്ദേശങ്ങൾ പ്രകാരം PMEGP വായ്പകൾ പ്രകാരം 5.00 ലക്ഷം രൂപ വരെ വരുന്ന പദ്ധതികൾക്ക് കോലാറ്ററൽ സുരക്ഷമില്ല. PMEGP പദ്ധതിയിൽ 5.00 ലക്ഷം രൂപ കവിയുന്ന 25.00 ലക്ഷം രൂപവരെ വരുന്ന പദ്ധതികൾക്ക് CGTSME കോലാറ്ററൽ ഗ്യാരന്റി നൽകുന്നു." : "As Per The RBI Guidelines The Project Costing Up To Rs. 5.00 Lakhs Under PMEGP Loans Are Free From Collateral Security. The CGTSME Provided Collateral Guarantee For The Project Beyond Rs. 5.00 Lakhs And Up To Rs. 25.00 Lakhs Under PMEGP Scheme."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "പദ്ധതി തയ്യാറാക്കുന്നതിൽ ഗുണഭോക്താവിന് സഹായിക്കുന്ന ഹെൽപ്‌ലൈൻ ഏത്?" : "What Is The Helpline For The Beneficiary In Preparation Of The Project?"}</td>
                                                <td>{isMalayalam ? "KVIC സംരംഭകരെ പദ്ധതി റിപ്പോർട്ടുകൾ തയ്യാറാക്കുന്നതിൽ നിർദേശിക്കുന്നതിന് പ്രത്യേകമായി 73 RICS സെല്ലുകൾ തുറന്നു. വെബ്സൈറ്റുകൾ സന്ദർശിക്കുക: Www.Pmegp.Nic.In അല്ലെങ്കിൽ Www.Kvic.Org.In" : "KVIC Opened 73 RICS Cells Especially To Guide The Entrepreneurs In Preparation Of Project Reports. Visit Websites: Www.Pmegp.Nic.In Or Www.Kvic.Org.In"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഒരു സംരംഭകൻ ഒന്നിലധികം പദ്ധതികൾ സമർപ്പിക്കാമോ?" : "Whether An Entrepreneur Can Submit More Than One Project?"}</td>
                                                <td>{isMalayalam ? "ഏറ്റവും കൂടുതൽ ഗുണഭോക്താക്കൾക്ക് ആനുകൂല്യം നൽകുന്നതിനായി, PMEGP പ്രകാരം ഒരു കുടുംബത്തിന് ഒരു യൂണിറ്റ് മാത്രമേ സ്ഥാപിക്കാനാകൂ." : "To Provide Benefit For Large Number Of Beneficiaries, Under PMEGP One Unit Could Be Set Up By One Family Only."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "കുടുംബം എന്നതിന്റെ നിർവചനം എന്താണ്?" : "What Is The Definition Of Family?"}</td>
                                                <td>{isMalayalam ? "ഭർത്താവും ഭാര്യയും" : "Husband And Wife"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "അർബൻ മേഖലയിൽ യൂണിറ്റ് സ്ഥാപിക്കാമോ?" : "Whether Unit Can Be Set Up In Urban Area?"}</td>
                                                <td>{isMalayalam ? "അതെ, DIC മുഖേന" : "Yes, Through DIC"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "നിലവിലുള്ള യൂണിറ്റ് PMEGP പ്രകാരം ഫണ്ടുകൾ സ്വീകരിക്കാമോ?" : "Whether Existing Unit Can Avail Funds Under PMEGP?"}</td>
                                                <td>{isMalayalam ? "ഇല്ല, പുതിയ യൂണിറ്റ് മാത്രം." : "No, Only New Unit."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "മോഡൽ പദ്ധതികൾ ലഭ്യമാണോ?" : "Whether Model Projects Are Available?"}</td>
                                                <td>{isMalayalam ? "അതെ, വ്യവസായത്തിൻ്റെ അടിസ്ഥാനത്തിൽ മോഡൽ പദ്ധതികൾ Www.Pmegp.Nic.In ൽ ലഭ്യമാണ്." : "Yes, Industry Wise Model Projects Are Available At Www.Pmegp.Nic.In"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "സർക്കാർ സബ്‌സിഡിക്ക് ലോക്ക് ഇൻ കാലയളവ് എത്ര?" : "What Is Lock In Period For Govt. Subsidy?"}</td>
                                                <td>{isMalayalam ? "3 വർഷം" : "3 Years"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "പദ്ധതി രണ്ട് വ്യത്യസ്ത സ്രോതസുകളിൽ നിന്ന് (ബാങ്കുകൾ/സാമ്പത്തിക സ്ഥാപനങ്ങൾ) സംയുക്തമായി ധനസഹായം ലഭിക്കുമോ?" : "Can Project Be Financed Jointly From Two Different Sources (Banks/Financial Institutions)?"}</td>
                                                <td>{isMalayalam ? "ഇല്ല, അത് യോഗ്യമല്ല." : "No, It Is Not Eligible."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "സ്വന്തം സംഭാവന എത്ര നിക്ഷേപിക്കണം?" : "How Much Own Contribution To Be Deposited?"}</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "PMEGP പ്രകാരം ഗുണഭോക്താക്കളുടെ വിഭാഗങ്ങൾ" : "Categories Of Beneficiaries Under PMEGP"} 
                                                    <p>{isMalayalam ? "ഗുണഭോക്താവിന്റെ സ്വന്തം സംഭാവന (പദ്ധതിയുടെ ചെലവിന്)" : "Beneficiary’s Own Contribution (Of Project Cost)"}</p></td>
                                                <td>{isMalayalam ? "സാധാരണ വിഭാഗം" : "General Category"}</td>
                                                <td>{isMalayalam ? "പ്രത്യേക വിഭാഗം (SC/ST/OBC, ന്യൂനപക്ഷങ്ങൾ/സ്ത്രീകൾ/മുൻസൈനികർ, ശാരീരിക വൈകല്യമുള്ളവർ, NER, മലനിരകളും അതിർത്തി പ്രദേശങ്ങളും)" : "Special Category (SC/ST/OBC, Minorities/Women.Ex-Servicemen, Physically Handicapped, NER, Hill And Border Areas Etc.)"}</td>

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>{isMalayalam ? "5%" : "5%"}</td>
                                                <td>{isMalayalam ? "10%" : "10%"}</td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>

    );
};

export default PMEGPFAQ;