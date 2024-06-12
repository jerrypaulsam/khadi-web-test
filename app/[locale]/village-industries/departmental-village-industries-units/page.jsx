"use client"

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/about/objectives.jpg";

const VillageDepartmentUnits = () => {
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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - വകുപ്പുതല ഗ്രാമവ്യവസായ യൂണിറ്റുകൾ" : "Kerala Khadi - Departmental Village Industries Units"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? "വകുപ്പുതല ഗ്രാമവ്യവസായ യൂണിറ്റുകൾ" : "Departmental Village Industries Units"}
                innerTitle={isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" : "Kerala Khadi & Village Industries Board"} />

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
                                    <h3>{isMalayalam ? "വകുപ്പുതല ഗ്രാമവ്യവസായ യൂണിറ്റുകൾ" : "Departmental Village Industries Units"}</h3>
                                    <br />
                                    <p>
                                        {isMalayalam ? "32 ഡിപ്പാര്‍ട്ടുമെന്റല്‍ ഗ്രാമ വ്യവസായ യൂണിറ്റുകളില്‍ 26 ഡിപ്പാര്‍ട്ടുമെന്റല്‍ ഗ്രാമ വ്യവസായ യൂണിറ്റുകള്‍ 2022-23-ല്‍ പ്രവര്‍ത്തിച്ചിരുന്നു."
                                            : "Out of the above 32 departmental village industrial units, 26 departmental village industrial units were operationalized in 2022-23."} </p>
                                    <br />
                                    <p>
                                        {isMalayalam 
                                        ? "ഖാദി തേന്‍, ഖാദി ബാര്‍ സോപ്പ്, റോയല്‍ ഇന്‍ഡ്യന്‍ ബാര്‍ സോപ്പ്, തിലജം എള്ളെണ്ണ, റോയല്‍ ഇന്‍ഡ്യന്‍ നോട്ടുബുക്ക്, സമ്മര്‍കൂള്‍ ഷര്‍ട്ടുകള്‍, മിലേനി ഷര്‍ട്ടുകള്‍, ഖാദി കൂള്‍ ഷര്‍ട്ടുകള്‍, ഖാദികിടക്കകള്‍, അനന്തപുരി സില്‍ക്സ്, ചിതലി സില്‍ക്സ് എന്നീ ബ്രാന്‍ഡുകളില്‍ ബോര്‍ഡിന്റെ ഗ്രാമ വ്യവസായ ഉല്‍പ്പന്നങ്ങള്‍ വിപണിയില്‍ ലഭ്യമാണ്." 
                                        : "Khadi Honey, Khadi Bar Soap, Royal Indian Bar Soap, Tilajam Sesame Oil, Royal Indian Notebook, Summer Cool Shirts, Millennium Shirts, Khadi Cool Shirts, The Board's village industry products are available in the market under the brands Khadi Kitakas, Ananthapuri Silks and Chitali Silks."}
                                    </p>
                                </div>

                                {/* <div className="team__single-right-experience">
                                    <Link href="#">DEPTL UNITS PERFORMANCE</Link>
                                </div> */}
                                <br />

                                <h4>{isMalayalam ? "I. റെഡിമെയ്ഡ് വസ്ത്രനിര്‍മ്മാണ യൂണിറ്റ്" : "I. Ready-made Garment Unit"}</h4>
                                <br />
                                <table className="officals-table">
                                    <thead>
                                        <tr>
                                            <th>{isMalayalam ? "ക്രമ നം" : "Sl. No."}</th>
                                            <th>{isMalayalam ? "ഗ്രാമ വ്യവസായ യൂണിറ്റുകളുടെ പേരും സ്ഥലവും" : "Name and Location of Village Industries Units"}</th>
                                            <th>{isMalayalam ? "ജില്ല" : "District"}</th>
                                            <th>{isMalayalam ? "2022-23-ലെ പ്രവര്‍ത്തന വിവരം" : "Operational Status 2022-23"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>{isMalayalam ? "പയ്യന്നൂര്‍" : "Payyannur"}</td>
                                            <td>{isMalayalam ? "കണ്ണൂര്‍" : "Kannur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>{isMalayalam ? "ആലപ്പുഴ" : "Alappuzha"}</td>
                                            <td>{isMalayalam ? "ആലപ്പുഴ" : "Alappuzha"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>{isMalayalam ? "നെടുമ്പന" : "Nedumpana"}</td>
                                            <td>{isMalayalam ? "കൊല്ലം" : "Kollam"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>{isMalayalam ? "കളത്തൂര്‍" : "Kalathur"}</td>
                                            <td>{isMalayalam ? "കോട്ടയം" : "Kottayam"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>{isMalayalam ? "പാലത്തുള്ളി" : "Palathulli"}</td>
                                            <td>{isMalayalam ? "പാലക്കാട്" : "Palakkad"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>{isMalayalam ? "പാപ്പനംകോട്" : "Pappanamcode"}</td>
                                            <td>{isMalayalam ? "തിരുവനന്തപുരം" : "Thiruvananthapuram"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>{isMalayalam ? "കുന്നുകര" : "Kunnukara"}</td>
                                            <td>{isMalayalam ? "എറണാകുളം" : "Ernakulam"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                                <h4>{isMalayalam ? "II. തേന്‍ സംസ്ക്കരണ യൂണിറ്റ്" : "II. Honey Processing Unit"}</h4>
                                <br />
                                <table className="officals-table">
                                    <thead>
                                        <tr>
                                            <th>{isMalayalam ? "ക്രമ നം" : "Sl. No."}</th>
                                            <th>{isMalayalam ? "ഗ്രാമ വ്യവസായ യൂണിറ്റുകളുടെ പേരും സ്ഥലവും" : "Name and Location of Village Industries Units"}</th>
                                            <th>{isMalayalam ? "ജില്ല" : "District"}</th>
                                            <th>{isMalayalam ? "2022-23-ലെ പ്രവര്‍ത്തന വിവരം" : "Operational Status 2022-23"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>8</td>
                                            <td>{isMalayalam ? "കുഞ്ഞിമംഗലം, പയ്യന്നൂര്‍" : "Kunjimangalam, Payyannur"}</td>
                                            <td>{isMalayalam ? "കണ്ണൂര്‍" : "Kannur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നില്ല" : "Not Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>{isMalayalam ? "ഇലന്തൂര്‍" : "Elanthoor"}</td>
                                            <td>{isMalayalam ? "പത്തനംതിട്ട" : "Pathanamthitta"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>{isMalayalam ? "കളപ്പെട്ടി" : "Kalpetti"}</td>
                                            <td>{isMalayalam ? "പാലക്കാട്" : "Palakkad"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>{isMalayalam ? "ബാലുശ്ശേരി" : "Balussery"}</td>
                                            <td>{isMalayalam ? "കോഴിക്കോട്" : "Kozhikode"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>{isMalayalam ? "നേരിയ മംഗലം" : "Neriya Mangalam"}</td>
                                            <td>{isMalayalam ? "എറണാകുളം" : "Ernakulam"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td>{isMalayalam ? "നിലമ്പൂ൪" : "Nilambur"}</td>
                                            <td>{isMalayalam ? "മലപ്പുറം" : "Malappuram"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നില്ല" : "Not Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td>{isMalayalam ? "തിരുവനന്തപുരം, പാപ്പനംകോട്" : "Thiruvananthapuram, Pappanamcode"}</td>
                                            <td>{isMalayalam ? "തിരുവനന്തപുരം" : "Thiruvananthapuram"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                                <h4>{isMalayalam ? "III. എണ്ണയാട്ടു വ്യവസായ യൂണിറ്റ്" : "III. Oil Extraction Unit"}</h4>
                                <br />
                                <table className="officals-table">
                                    <thead>
                                        <tr>
                                            <th>{isMalayalam ? "ക്രമ നം" : "Sl. No."}</th>
                                            <th>{isMalayalam ? "ഗ്രാമ വ്യവസായ യൂണിറ്റുകളുടെ പേരും സ്ഥലവും" : "Name and Location of Village Industries Units"}</th>
                                            <th>{isMalayalam ? "ജില്ല" : "District"}</th>
                                            <th>{isMalayalam ? "2022-23-ലെ പ്രവര്‍ത്തന വിവരം" : "Operational Status 2022-23"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15</td>
                                            <td>{isMalayalam ? "ഇളംപച്ചി, പയ്യന്നൂര്‍" : "Elampachi, Payyannur"}</td>
                                            <td>{isMalayalam ? "കണ്ണൂര്‍" : "Kannur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നില്ല" : "Not Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>{isMalayalam ? "ഒളരിക്കര" : "Olarikkara"}</td>
                                            <td>{isMalayalam ? "തൃശൂര്‍" : "Thrissur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>17</td>
                                            <td>{isMalayalam ? "ഇലന്തൂര്‍" : "Elanthoor"}</td>
                                            <td>{isMalayalam ? "പത്തനംതിട്ട" : "Pathanamthitta"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td>{isMalayalam ? "ബാലുശ്ശേരി" : "Balussery"}</td>
                                            <td>{isMalayalam ? "കോഴിക്കോട്" : "Kozhikode"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                                <h4>{isMalayalam ? "IV. കിടക്ക നിര്‍മ്മാണ യൂണിറ്റ്" : "IV. Bed Making Unit"}</h4>
                                <br />
                                <table className="officals-table">
                                    <thead>
                                        <tr>
                                            <th>{isMalayalam ? "ക്രമ നം" : "Sl. No."}</th>
                                            <th>{isMalayalam ? "ഗ്രാമ വ്യവസായ യൂണിറ്റുകളുടെ പേരും സ്ഥലവും" : "Name and Location of Village Industries Units"}</th>
                                            <th>{isMalayalam ? "ജില്ല" : "District"}</th>
                                            <th>{isMalayalam ? "2022-23-ലെ പ്രവര്‍ത്തന വിവരം" : "Operational Status 2022-23"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>19</td>
                                            <td>{isMalayalam ? "ഇളംപച്ചി, പയ്യന്നൂര്‍" : "Elampachi, Payyannur"}</td>
                                            <td>{isMalayalam ? "കണ്ണൂര്‍" : "Kannur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>20</td>
                                            <td>{isMalayalam ? "ആനമങ്ങാട്" : "Anamangad"}</td>
                                            <td>{isMalayalam ? "മലപ്പുറം" : "Malappuram"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                                <h4>{isMalayalam ? "V. കൈക്കടലാസ് നിര്‍മ്മാണ യൂണിറ്റ്" : "V. Hand Made Paper Unit"}</h4>
                                <br />
                                <table className="officals-table">
                                    <thead>
                                        <tr>
                                            <th>{isMalayalam ? "ക്രമ നം" : "Sl. No."}</th>
                                            <th>{isMalayalam ? "ഗ്രാമ വ്യവസായ യൂണിറ്റുകളുടെ പേരും സ്ഥലവും" : "Name and Location of Village Industries Units"}</th>
                                            <th>{isMalayalam ? "ജില്ല" : "District"}</th>
                                            <th>{isMalayalam ? "2022-23-ലെ പ്രവര്‍ത്തന വിവരം" : "Operational Status 2022-23"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>21</td>
                                            <td>{isMalayalam ? "ഒളരിക്കര" : "Olarikkara"}</td>
                                            <td>{isMalayalam ? "തൃശൂര്‍" : "Thrissur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>22</td>
                                            <td>{isMalayalam ? "ഇലന്തൂര്‍" : "Elanthoor"}</td>
                                            <td>{isMalayalam ? "പത്തനംതിട്ട" : "Pathanamthitta"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നില്ല" : "Not Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>{isMalayalam ? "പാപ്പിനിശ്ശേരി" : "Pappinisseri"}</td>
                                            <td>{isMalayalam ? "കണ്ണൂര്‍" : "Kannur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>24</td>
                                            <td>{isMalayalam ? "കിഴക്കമ്പലം" : "Kizhakkambalam"}</td>
                                            <td>{isMalayalam ? "എറണാകുളം" : "Ernakulam"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                                <h4>{isMalayalam ? "VI. സോപ്പ് നിര്‍മ്മാണ യൂണിറ്റ്" : "VI. Soap Making Unit"}</h4>
                                <br />
                                <table className="officals-table">
                                    <thead>
                                        <tr>
                                            <th>{isMalayalam ? "ക്രമ നം" : "Sl. No."}</th>
                                            <th>{isMalayalam ? "ഗ്രാമ വ്യവസായ യൂണിറ്റുകളുടെ പേരും സ്ഥലവും" : "Name and Location of Village Industries Units"}</th>
                                            <th>{isMalayalam ? "ജില്ല" : "District"}</th>
                                            <th>{isMalayalam ? "2022-23-ലെ പ്രവര്‍ത്തന വിവരം" : "Operational Status 2022-23"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>25</td>
                                            <td>{isMalayalam ? "ഇലന്തൂര്‍" : "Elanthoor"}</td>
                                            <td>{isMalayalam ? "പത്തനംതിട്ട" : "Pathanamthitta"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>26</td>
                                            <td>{isMalayalam ? "കിഴക്കമ്പലം (ഡിറ്റര്‍ജെന്റ് യൂണിറ്റ്)" : "Kizhakkambalam (Detergent Unit)"}</td>
                                            <td>{isMalayalam ? "എറണാകുളം" : "Ernakulam"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <br />
                                <h4>{isMalayalam ? "VII. നോട്ടുബുക്ക് നിര്‍മ്മാണ യൂണിറ്റ്" : "VII. Notebook Making Unit"}</h4>
                                <br />
                                <table className="officals-table">
                                    <thead>
                                        <tr>
                                            <th>{isMalayalam ? "ക്രമ നം" : "Sl. No."}</th>
                                            <th>{isMalayalam ? "ഗ്രാമ വ്യവസായ യൂണിറ്റുകളുടെ പേരും സ്ഥലവും" : "Name and Location of Village Industries Units"}</th>
                                            <th>{isMalayalam ? "ജില്ല" : "District"}</th>
                                            <th>{isMalayalam ? "2022-23-ലെ പ്രവര്‍ത്തന വിവരം" : "Operational Status 2022-23"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>27</td>
                                            <td>{isMalayalam ? "വെഞ്ഞാറമൂട്" : "Venjaramoodu"}</td>
                                            <td>{isMalayalam ? "തിരുവനന്തപുരം" : "Thiruvananthapuram"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നില്ല" : "Not Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>28</td>
                                            <td>{isMalayalam ? "കിഴക്കമ്പലം" : "Kizhakkambalam"}</td>
                                            <td>{isMalayalam ? "എറണാകുളം" : "Ernakulam"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നില്ല" : "Not Operational"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                                <h4>{isMalayalam ? "VIII. പേപ്പര്‍ ക്യാരിബാഗ് നിര്‍മ്മാണ യൂണിറ്റ്" : "VIII. Paper Carry Bag Unit"}</h4>
                                <br />
                                <table className="officals-table">
                                    <thead>
                                        <tr>
                                            <th>{isMalayalam ? "ക്രമ നം" : "Sl. No."}</th>
                                            <th>{isMalayalam ? "ഗ്രാമ വ്യവസായ യൂണിറ്റുകളുടെ പേരും സ്ഥലവും" : "Name and Location of Village Industries Units"}</th>
                                            <th>{isMalayalam ? "ജില്ല" : "District"}</th>
                                            <th>{isMalayalam ? "2022-23-ലെ പ്രവര്‍ത്തന വിവരം" : "Operational Status 2022-23"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>29</td>
                                            <td>{isMalayalam ? "ഒളരിക്കര" : "Olarikkara"}</td>
                                            <td>{isMalayalam ? "തൃശ്ശൂര്‍" : "Thrissur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>{isMalayalam ? "കിഴക്കമ്പലം" : "Kizhakkambalam"}</td>
                                            <td>{isMalayalam ? "എറണാകുളം" : "Ernakulam"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                                <h4>{isMalayalam ? "IX. വിളക്കുതിരി നിര്‍മ്മാണ യൂണിറ്റ്" : "IX. Wick Making Unit"}</h4>
                                <br />
                                <table className="officals-table">
                                    <thead>
                                        <tr>
                                            <th>{isMalayalam ? "ക്രമ നം" : "Sl. No."}</th>
                                            <th>{isMalayalam ? "ഗ്രാമ വ്യവസായ യൂണിറ്റുകളുടെ പേരും സ്ഥലവും" : "Name and Location of Village Industries Units"}</th>
                                            <th>{isMalayalam ? "ജില്ല" : "District"}</th>
                                            <th>{isMalayalam ? "2022-23-ലെ പ്രവര്‍ത്തന വിവരം" : "Operational Status 2022-23"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>31</td>
                                            <td>{isMalayalam ? "ഒളരിക്കര" : "Olarikkara"}</td>
                                            <td>{isMalayalam ? "തൃശൂര്‍" : "Thrissur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                        <tr>
                                            <td>32</td>
                                            <td>{isMalayalam ? "എറ്റുകുടുക്ക" : "Ettukudukka"}</td>
                                            <td>{isMalayalam ? "കണ്ണൂര്‍" : "Kannur"}</td>
                                            <td>{isMalayalam ? "പ്രവര്‍ത്തിക്കുന്നു" : "Operational"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

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

export default VillageDepartmentUnits;