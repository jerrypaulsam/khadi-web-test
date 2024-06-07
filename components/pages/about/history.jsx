import React from 'react';
import image1 from "../../../public/assets/img/about/mission.jpg";
import image2 from "../../../public/assets/img/about/vision.jpg";
import image3 from "../../../public/assets/img/about/village.jpg";
import image4 from "../../../public/assets/img/about/khadi.jpg";
import image5 from "../../../public/assets/img/about/history-5.jpg";

const History = ({ isMalayalam }) => {
    return (
        <div className="company__history section-padding">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="company__history-title t-center">
                            <span className="subtitle-one">{isMalayalam ? "കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ്" :  "KERALA KHADI & VILLAGE INDUSTRIES BOARD"}</span>
                            <h3>{isMalayalam ? "മിഷൻ & വിഷൻ" : "Mission & Vision"}</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="company__history-area dark__image">
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <img src={image1.src} alt="image" style={{borderRadius: "10px"}} />
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            {/* <span>2003</span> */}
                                            <h5>{isMalayalam ? "ദൗത്യം" : "Mission"}</h5>
                                        </div>
                                        <p>{isMalayalam ? "പരിസ്ഥിതി സൗഹൃദ നിർമ്മാണ പ്രക്രിയകളോടെ ഖാദി, ഗ്രാമ വ്യവസായ യൂണിറ്റുകൾ പ്രോത്സാഹിപ്പിക്കുന്നതിനും സ്ഥാപിക്കുന്നതിനും പ്രവർത്തിപ്പിക്കുന്നതിനും." : "To promote, establish and run Khadi and Village Industries units with  ecofriendly manufacturing processes."}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            {/* <span>2008</span> */}
                                            <h5>{isMalayalam ? "വിഷൻ" : "Vision"}</h5>
                                        </div>
                                        <p>{isMalayalam ? "മഹാത്മാഗാന്ധി ആവിഷ്‌കരിച്ച 'സ്വാശ്രയ ഗ്രാമങ്ങൾ' എന്ന തത്വം പാലിച്ചുകൊണ്ട് ഏറ്റവും കുറഞ്ഞ നിക്ഷേപത്തിൽ പരമാവധി തൊഴിലവസരങ്ങൾ സൃഷ്ടിക്കുക." : "To generate maximum employment opportunities  with minimum investment observing the principle of 'self-reliant villages' , articulated by Mahatma Gandhi."}</p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image2.src} alt="image" style={{borderRadius: "10px"}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-30">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="company__history-title t-center">
                            <span className="subtitle-one">{isMalayalam ? "ഞങ്ങളുടെ പ്രവർത്തനങ്ങൾ" :  "Our Activities"}</span>
                            <h3>{isMalayalam ? "ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ്" : "Khadi & Village Industries"}</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="company__history-area dark__image">
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <img src={image4.src} alt="image" style={{borderRadius: "10px"}} />
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            {/* <span>2003</span> */}
                                            <h5>{isMalayalam ? "ഖാദി" :  "Khadi"}</h5>
                                        </div>
                                        <p>{isMalayalam ? "സ്പിന്നിംഗ്, നെയ്ത്ത് യൂണിറ്റുകൾ, ചെറുകിട യൂണിറ്റുകൾ എന്നിവയിലൂടെ ഖാദി, ഗ്രാമ വ്യവസായങ്ങളുടെ ഉത്പാദനവും വിപണനവും ബോർഡ് പ്രോത്സാഹിപ്പിക്കുന്നു. മാർക്കറ്റിംഗ് യൂണിറ്റുകളും വൻതോതിൽ പ്രവർത്തിക്കുന്നു." : "The Board promotes the Production and Marketing of Khadi and Village Industries  through Spinning and Weaving units,small scale units. Marketing units are also run in large numbers."}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            {/* <span>2008</span> */}
                                            <h5>{isMalayalam ? "വില്ലേജ് ഇൻഡസ്ട്രീസ്" : "Village Industries"}</h5>
                                        </div>
                                        <p>{isMalayalam ? "കേരള സർക്കാരിൻ്റെ സാമ്പത്തിക സഹായത്തോടെ ബോർഡ് 'എൻ്റെ ഗ്രാമം' എന്ന പേരിൽ ഒരു സ്വയം തൊഴിൽ പരിപാടി നൽകുന്നു. PMEGP പ്രോഗ്രാമിലൂടെയും പുതിയ യൂണിറ്റുകൾ സ്ഥാപിക്കപ്പെടുന്നു." : "The Board imparts a Self employment Programme called 'Ente Gramam' with the financial assistance of the Government of Kerala. New units are established through PMEGP Programme  as well."}</p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image3.src} alt="image" style={{borderRadius: "10px"}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default History;