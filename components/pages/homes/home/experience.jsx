import Link from "next/link";
import image1 from "../../../../public/assets/img/pages/exp-1.jpg";
import image2 from "../../../../public/assets/img/pages/exp-2.jpg";
import SkillBar from "../../common/skill-bar";
import SkillBarItem from "../../common/skill-bar";

const Experience = ( {isMalayalam} ) => {
    const experienceContent = {
        subtitle: isMalayalam ? 'ഞങ്ങളുടെ ഷോറൂമുകൾ' : 'Our Showrooms',
        title: isMalayalam ? 'നിങ്ങളുടെ സ്വപ്ന വസ്ത്രങ്ങൾ കണ്ടെത്തുക' : 'Find your dream Apparels.',
        des: isMalayalam ? 'കേരളത്തിൽ കൈകൊണ്ട് നെയ്ത മനോഹരമായ ഖാദി തുണിത്തരങ്ങൾ കണ്ടെത്തൂ! സർക്കാർ നടത്തുന്ന ഖാദി ഗ്രാമോദ്യോഗ് ഭവൻ ഷോറൂമുകളിലോ കേരള ഖാദി & വില്ലേജ് ഇൻഡസ്ട്രീസ് ബോർഡ് ലൊക്കേഷനുകളിലോ ആധികാരികമായ വസ്ത്രങ്ങൾ, ഗൃഹോപകരണങ്ങൾ എന്നിവയും മറ്റും കണ്ടെത്തുക. പ്രാദേശിക കരകൗശല തൊഴിലാളികളെ പിന്തുണയ്ക്കുകയും കേരള ഖാദിയുടെ സമ്പന്നമായ പൈതൃകം അനുഭവിക്കുകയും ചെയ്യുക.' : 'Discover beautiful, handwoven khadi textiles in Kerala! Find authentic clothing, homeware, and more at government-run Khadi Gramodyog Bhavan showrooms or Kerala Khadi & Village Industries Board locations. Support local artisans and experience the rich heritage of Kerala khadi.',
        btn_text: isMalayalam ? 'ഷോറൂമുകൾ കാണുക' : 'View Showrooms',
        btn_link: `/${isMalayalam ? 'mal' : 'en'}/marketing/khadi-grama-soubhagyas`,
        progress1: '80',
        progress2: '20',
    }
    return (
        <>
            <div className="experience__area dark__image section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 lg-mb-30">
                            <div className="experience__area-image">
                                <img className="experience__area-image-shape left-right-animate" src="assets/img/shape/dots.png" alt="Kerala Khadi Board" />
                                <div className="experience__area-image-item">
                                    <img src={image1.src} alt="image" style={{borderRadius: "5px"}} />
                                </div>
                                <div className="experience__area-image-item mt-65">
                                    <img src={image2.src} alt="image" style={{borderRadius: "5px"}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="experience__area-right">
                                <div className="experience__area-right-title">
                                    <span className="subtitle-one">{experienceContent.subtitle}</span>
                                    <h2>{experienceContent.title}</h2>		
                                    <p>{experienceContent.des}</p>
                                </div>
                                <div className="skill__area mt-30">
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">{isMalayalam ? "കേരളത്തിലെ ഷോറൂമുകൾ" : "Showrooms in Kerala"}</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress1} number={185} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">{isMalayalam ? "തിരുവനന്തപുരത്തെ ഷോറൂമുകൾ" : "Showrooms in Trivandrum"}</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress2} number={9} />
                                        </div>
                                    </div>
                                </div>
                                <Link className="btn-two" href={experienceContent.btn_link}>{experienceContent.btn_text}<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;