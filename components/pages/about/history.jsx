import React from 'react';
import image1 from "../../../public/assets/img/about/mission.jpg";
import image2 from "../../../public/assets/img/about/vision.jpg";
import image3 from "../../../public/assets/img/about/village.jpg";
import image4 from "../../../public/assets/img/about/khadi.jpg";
import image5 from "../../../public/assets/img/about/history-5.jpg";

const History = () => {
    return (
        <div className="company__history section-padding">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="company__history-title t-center">
                            <span className="subtitle-one">KERALA KHADI & VILLAGE INDUSTRIES BOARD</span>
                            <h2>Mission & Vision</h2>
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
                                            <h5>Mission</h5>
                                        </div>
                                        <p>To promote, establish and run Khadi and Village Industries units with  ecofriendly manufacturing processes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            {/* <span>2008</span> */}
                                            <h5>Vision</h5>
                                        </div>
                                        <p>To generate maximum employment opportunities  with minimum investment observing the principle of 'self-reliant villages' , articulated by Mahatma Gandhi.</p>
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
                            <span className="subtitle-one">Our Activities</span>
                            <h2>Khadi & Village Industries</h2>
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
                                            <h5>Khadi</h5>
                                        </div>
                                        <p>The Board promotes the Production and Marketing of Khadi and Village Industries  through Spinning and Weaving units,small scale units. Marketing units are also run in large numbers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            {/* <span>2008</span> */}
                                            <h5>Village Industries</h5>
                                        </div>
                                        <p>The Board imparts a Self employment Programme called 'Ente Gramam' with the financial assistance of the Government of Kerala. New units are established through PMEGP Programme  as well.</p>
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