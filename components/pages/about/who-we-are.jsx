import React from 'react';
import bgImage from "../../../public/assets/img/about/about-solution.jpg";
import image from "../../../public/assets/img/about/who-we-are.jpg";
import shape from "../../../public/assets/img/shape/about-solution.png";
import Count from '../common/count';
import Link from 'next/link';

const WhoWeAre = ({ isMalayalam }) => {
    return (
        <>
            <div className="company__two section-padding pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7 lg-mb-30">
                            <div className="company__two-left">
                                <div className="company__two-left-title">
                                    <span className="subtitle-one">{isMalayalam ? 'ഞങ്ങളുടെ ഷോറൂമുകൾ' : 'Our Showrooms'}</span>
                                    <h3>{isMalayalam ? 'നിങ്ങളുടെ സ്വപ്ന വസ്ത്രങ്ങൾ കണ്ടെത്തുക' : 'Find your dream Apparels.'}</h3>
                                    <p>{isMalayalam ? 'കേരളത്തിൽ കൈകൊണ്ട് നെയ്ത മനോഹരമായ ഖാദി തുണിത്തരങ്ങൾ കണ്ടെത്തൂ! സർക്കാർ നടത്തുന്ന ഖാദി ഗ്രാമോദ്യോഗ് ഭവൻ ഷോറൂമുകളിലോ കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ് ലൊക്കേഷനുകളിലോ ആധികാരികമായ വസ്ത്രങ്ങൾ, ഗൃഹോപകരണങ്ങൾ എന്നിവയും മറ്റും കണ്ടെത്തുക. പ്രാദേശിക കരകൗശല തൊഴിലാളികളെ പിന്തുണയ്ക്കുകയും കേരള ഖാദിയുടെ സമ്പന്നമായ പൈതൃകം അനുഭവിക്കുകയും ചെയ്യുക.' : 'Discover beautiful, handwoven khadi textiles in Kerala! Find authentic clothing, homeware, and more at government-run Khadi Gramodyog Bhavan showrooms or Kerala Khadi & Village Industries Board locations. Support local artisans and experience the rich heritage of Kerala khadi.'}</p>
                                </div>
                                <div className="company__two-left-skill">
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={185} /></h2>
                                        <h6>{isMalayalam ? "കേരളത്തിലെ ഷോറൂമുകൾ" : "Showrooms in Kerala"}</h6>
                                    </div>
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={9} /></h2>
                                        <h6>{isMalayalam ? "തിരുവനന്തപുരത്തെ ഷോറൂമുകൾ" : "Showrooms in Trivandrum"}</h6>
                                    </div>
                                </div>
                                {/* <Link className="btn-two" href="/about">Discover more<i className="far fa-chevron-double-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="company__two-right dark__image t-right">
                                <img className="img__full" src={image.src} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            {/* <div className="about__solution" style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8">
                            <div className="about__solution-left xl-t-center">
                                <h2>implement solutions & achieve goals.</h2>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="about__solution-right t-right xl-t-center">						
                                <Link className="btn-one" href="/contact">Get Free Consultations<i className="far fa-chevron-double-right"></i></Link>
                                <img className="about__solution-right-shape left-right-animate" src={shape.src} alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>         */}
        </>
    );
};

export default WhoWeAre;