"use client"

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../../../components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../../../components/pages/common/scroll/scroll-to-top";

import image1 from "../../../../public/assets/img/about/objectives.jpg";

import { useEffect, useState } from 'react';


const BoardMembers = () => {
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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - ബോർഡ് അംഗങ്ങൾ" : "Kerala Khadi - Board Members"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "ബോർഡ് അംഗങ്ങൾ" : "Board Members"} innerTitle={isMalayalam ? "കേരള ഖാദി - ബോർഡ് അംഗങ്ങൾ" : "Kerala Khadi Board Members"} />

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
                                    <h3>{isMalayalam ? "ബോർഡ് അംഗങ്ങൾ" : "Board Members"}</h3>
                                    <br />
                                    <p>
                                        {isMalayalam ? "വ്യവസായ വകുപ്പ് മന്ത്രി ചെയര്‍മാനായി പുന : സംഘടിപ്പിക്കപ്പെട്ട ഭരണസമിതി അംഗങ്ങളുടെ 2022-23 വര്‍ഷത്തെ വിവരം താഴെ കൊടുക്കുന്നു."
                                            : "The following is the information of the members of the reorganized governing body for the year 2022-23 under the chairmanship of the Minister of Industries."
                                        }
                                    </p>
                                    <br />

                                    <table className="officals-table">
                                        <thead>
                                            <tr>
                                                <th>{isMalayalam ? "സ്ഥാനം" : "Position"}</th>
                                                <th>{isMalayalam ? "വിശദാംശങ്ങള്‍" : "Details"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{isMalayalam ? "ചെയര്‍മാന്‍" : "Chairman"}</td>
                                                <td>{isMalayalam ? "1. ശ്രീ.പി.രാജീവ്, നിയമം, വ്യവസായം, കയര്‍ വകുപ്പ് മന്ത്രി [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "1. Mr. P. Rajeev, Minister for Law, Industry and Coir Department [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "വൈസ് ചെയര്‍മാന്‍" : "Vice Chairman"}</td>
                                                <td>{isMalayalam ? "2. ശ്രീ.പി.ജയരാജന്‍, കൈരളി, കൊങ്ങാട്ട, പൂക്കോട് (പി.ഒ), കൂത്തുപറമ്പ്, കണ്ണൂര്‍. [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "2. Mr. P. Jayarajan, Kairali, Kongatt, Pookode (P.O), Koothuparamba, Kannur. [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഔദ്യോഗിക അംഗം (മെമ്പര്‍-സെക്രട്ടറി)" : "Official Member (Member-Secretary)"}</td>
                                                <td>{isMalayalam ? "3. ശ്രീ.കെ.എ.രതീഷ് [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "3. Mr. K.A. Ratheesh [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "അനൌദ്യോഗിക അംഗം" : "Non-Official Member"}</td>
                                                <td>{isMalayalam ? "4. ശ്രീ.എസ്.ശിവരാമന്‍, സ്കൂള്‍ പറമ്പില്‍, ലക്കിടി (പി.ഒ), ഒറ്റപ്പാലം, പാലക്കാട് [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "4. Mr. S. Sivaraman, School Parambil, Lakkidi (P.O), Ottapalam, Palakkad [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "അനൌദ്യോഗിക അംഗം" : "Non-Official Member"}</td>
                                                <td>{isMalayalam ? "5. അഡ്വ: കെ.പി.രണദിവെ, കേരള ലോ ഹൗസ്, ആര്‍.വി. ടൗവ്വേഴ്സ്, റൂം നം.308, വഞ്ചിയൂര്‍, തിരുവനന്തപുരം. [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "5. Adv. K.P. Ranadive, Kerala Law House, R.V. Towers, Room No. 308, Vanchiyoor, Thiruvananthapuram. [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "അനൌദ്യോഗിക അംഗം" : "Non-Official Member"}</td>
                                                <td>{isMalayalam ? "6. ശ്രീ.സി.കെ.ശശിധരന്‍, ചേരിയില്‍ സൗഭാഗ്യ, സചിവോത്തമപുരം (പി.ഒ), കുറിച്ചി, കോട്ടയം. [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "6. Mr. C.K. Sashidharan, Cheriyil Saubhagya, Sachivothamapuram (P.O), Kurichi, Kottayam. [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "അനൌദ്യോഗിക അംഗം" : "Non-Official Member"}</td>
                                                <td>{isMalayalam ? "7. ശ്രീ.കെ.എസ്. രമേഷ്ബാബു, മരുതുംകാട്ടില്‍, കരൂര്‍ (പി.ഒ), പാല, കോട്ടയം [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "7. Mr. K.S. Rameshbabu, Maruthumkattil, Karoor (P.O), Palai, Kottayam [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "അനൌദ്യോഗിക അംഗം" : "Non-Official Member"}</td>
                                                <td>{isMalayalam ? "8. ശ്രീ.സാജന്‍ തോമസ്, തൊടുകയില്‍ ഹൗസ്, പൂവരണി (പി.ഒ), പൈക്ക, കോട്ടയം. [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "8. Mr. Sajan Thomas, Thodukayil House, Poovrani (P.O), Paika, Kottayam. [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "അനൌദ്യോഗിക അംഗം" : "Non-Official Member"}</td>
                                                <td>{isMalayalam ? "9. ശ്രീ.കെ.ചന്ദ്രശേഖരന്‍, വെട്ടിക്കാട്ട് ഹൗസ്, ശ്രീധരീയം ഹോസ്പിറ്റലിന് സമീപം, കീഴക്കൊമ്പ് (പി.ഒ), കൂത്താട്ടുകുളം, എറണാകുളം. [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "9. Mr. K. Chandrasekharan, Vettikkatt House, Near Sreedhareeyam Hospital, Keezhakomb (P.O), Koothattukulam, Ernakulam. [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഔദ്യോഗിക അംഗം" : "Official Member"}</td>
                                                <td>{isMalayalam ? "10. ശ്രീ.സന്തോഷ്.ആര്‍, അണ്ടര്‍ സെക്രട്ടറി, വ്യവസായ വകുപ്പ് [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍ 06-10-2022 വരെ]" : "10. Mr. Santhosh R., Under Secretary, Department of Industries [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022 to 06-10-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഔദ്യോഗിക അംഗം" : "Official Member"}</td>
                                                <td>{isMalayalam ? "11. ശ്രീമതി.ശ്രീലത സുകുമാരന്‍, ജോയിന്റ് സെക്രട്ടറി, ധനകാര്യ വകുപ്പ് [സ.ഉ.(എം.എസ്) നം.20/2022/വ്യവ തീയതി : 21-02-2022] [21-02-2022 മുതല്‍]" : "11. Mrs. Sreelatha Sukumaran, Joint Secretary, Finance Department [G.O.(MS) No. 20/2022/Ind dated: 21-02-2022] [From 21-02-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ഔദ്യോഗിക അംഗം" : "Official Member"}</td>
                                                <td>{isMalayalam ? "12. ശ്രീമതി.വി.പ്രസന്നകുമാരി, അണ്ടര്‍ സെക്രട്ടറി, വ്യവസായ വകുപ്പ് [സ.ഉ.(കൈ) നം.103/2022/വ്യവ തീയതി : 06-10-2022] [06-10-2022 മുതല്‍]" : "12. Mrs. V. Prasanna Kumari, Under Secretary, Department of Industries [G.O.(Kai) No. 103/2022/Ind dated: 06-10-2022] [From 06-10-2022]"}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ക്ഷണിതാക്കള്‍" : "Invitees"}</td>
                                                <td>{isMalayalam ? "13. സ്റ്റേറ്റ് ഡയറക്ടര്‍, ഖാദി ഗ്രാമ വ്യവസായ കമ്മിഷന്‍." : "13. State Director, Khadi and Village Industries Commission."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ക്ഷണിതാക്കള്‍" : "Invitees"}</td>
                                                <td>{isMalayalam ? "14. ചെയര്‍മാന്‍, കേരള ഖാദി തൊഴിലാളി ക്ഷേമനിധി ബോര്‍ഡ്." : "14. Chairman, Kerala Khadi Workers Welfare Fund Board."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ക്ഷണിതാക്കള്‍" : "Invitees"}</td>
                                                <td>{isMalayalam ? "15. ഫിനാന്‍ഷ്യല്‍ അഡ്വൈസര്‍ ആന്റ് ചീഫ് അക്കൌണ്ട്സ് ഓഫീസര്‍, കേരള ഖാദി ഗ്രാമ വ്യവസായ ബോര്‍ഡ്." : "15. Financial Advisor and Chief Accounts Officer, Kerala Khadi and Village Industries Board."}</td>
                                            </tr>
                                            <tr>
                                                <td>{isMalayalam ? "ക്ഷണിതാക്കള്‍" : "Invitees"}</td>
                                                <td>{isMalayalam ? "16. രജിസ്ട്രാര്‍ ഓഫ് കോ-ഓപ്പറേറ്റീവ് സൊസൈറ്റീസ്, തിരുവനന്തപുരം." : "16. Registrar of Cooperative Societies, Thiruvananthapuram."}</td>
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
                <FooterOne isMalayalam={isMalayalam} />
            </div>
            <ScrollToTop />
        </>

    );
};

export default BoardMembers;