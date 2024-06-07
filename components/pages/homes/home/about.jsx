"use client"

import shape1 from "../../../../public/assets/img/shape/about-1.png";
import shape2 from "../../../../public/assets/img/shape/about-1-dark.png";
import shape3 from "../../../../public/assets/img/shape/about-2.png";
import shape4 from "../../../../public/assets/img/shape/about-2-dark.png";
import image1 from "../../../../public/assets/img/about/abo-1.jpg";
import image2 from "../../../../public/assets/img/about/abo-2.jpg";
import avatar from "../../../../public/assets/img/avatar/secretary.jpeg";
import avatar2 from "../../../../public/assets/img/avatar/rajeeve.jpg";
import avatar3 from "../../../../public/assets/img/avatar/jayarajan.jpg";

import Count from "../../common/count";
import Link from "next/link";

const About = ({ isMalayalam }) => {
    const aboutData = {
        count: 67,
        exp: isMalayalam ? 'വർഷത്തെ ഖാദി പാരമ്പര്യം ' : 'Years of Khadi Tradition',
        subtitle: isMalayalam ? 'ഖാദി ബോർഡിനെക്കുറിച്ച്' : 'About Khadi Board',
        title: '',
        description: isMalayalam ? "കേരള ഗ്രാമവ്യവസായ ബോർഡ് എന്ന സ്റ്റാട്ട്യുട്ടറി സ്ഥാപനം 1957 ലെ ആക്ട് -9 പ്രകാരം രൂപീകരിച്ചിട്ടുള്ളതും സംസ്ഥാന ഖാദിയുടെയും ഗ്രാമവ്യവസായങ്ങളുടെയും ഏകോപനവും പ്രോത്സാഹനവും നടത്തുന്നതിൽ ചുമതലപ്പെട്ട സ്ഥാപനമാകുന്നു .കേരള ഗ്രാമവ്യവസായ ബോർഡ് ആയതിനുമേൽ ചുമതലപ്പെട്ട പദ്ധതികൾ ,സംഘങ്ങൾ ,രജിസ്റ്റർ ചെയ്ത മറ്റു സ്ഥാപനങ്ങൾ ,വ്യക്തികൾ തുടങ്ങിയവയിലൂടെയും വകുപ്പുതല യൂണിറ്റുകളുടെയും സംസ്ഥാന സർക്കാരിൻറെയും ഖാദി കമ്മീഷൻറെയും ദേശസാൽകൃത ബാങ്കുകളുടെയും സാമ്പത്തിക സഹായം നേടിക്കൊണ്ട് നടപ്പാക്കി വരുന്നു."
            : 'Kerala Khadi and Village Industries Board is a statutory body constituted by the Act 9 of 1957, vested with the responsibility of organizing and promoting Khadi and Village Industries in the State. The Board implements the programmes through co-operative, registered institutions, individuals and departmental units by imparting/ availing assistance from Government of Kerala, Khadi Commission and Nationalized Banks.',
        author_name: isMalayalam ? 'ഡോ. കെ. എ. രതീഷ്' : 'Dr. K A Ratheesh',
        author_sub: isMalayalam ? 'സെക്രട്ടറി' : 'Secretary',
        minister_name: isMalayalam ? 'ശ്രീ. പി രാജീവ്' : 'Shri. P Rajeev',
        minister_sub: isMalayalam ? 'ചെയർമാൻ' : 'Chairman',
        vc_name: isMalayalam ? "ശ്രീ. പി ജയരാജൻ" : "Shri. P Jayarajan",
        vc_sub: isMalayalam ? "വൈസ് ചെയർമാൻ" : "Vice Chairman",
        btn_title: isMalayalam ? 'കൂടുതൽ' : 'More',
        btn_link: `/${isMalayalam ? "mal" : "en"}/about-us`
    }
    return (
        <div className="about__one dark__image section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 lg-mb-30">
                        <div className="about__one-left">
                            <div className="about__one-left-image">
                                <img className="one" src={image1.src} alt="about-image" style={{ borderRadius: "5px" }} />
                                <img className="two" src={image2.src} alt="about-image" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="about__one-left-experience">
                                <h1><Count number={aboutData?.count} />+</h1>
                                <h6>{aboutData?.exp}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__one-right">
                            <div className="about__one-right-title">
                                <span className="subtitle-one">{aboutData?.subtitle}</span>
                                <h2>{aboutData?.title}</h2>
                                <p>{aboutData?.description}</p>
                            </div>
                            <div className="about__one-right-btn-author mt-10 mb-20" style={{ display: "flex", justifyContent: "center" }}>
                                <div className="about__one-right-btn-author-avatar">
                                    <img src={avatar2.src} alt={`Khadi Board - ${aboutData?.minister_name}`} />
                                </div>
                                <div className="about__one-right-btn-author-name">
                                    <span className="text-one">{aboutData?.minister_name}</span>
                                    <h6>{aboutData?.minister_sub}</h6>
                                </div>
                            </div>

                            <div className="about__one-right-btn" style={{ display: "flex", justifyContent: "center" }}>
                                <div className="about__one-right-btn-author">
                                    <div className="about__one-right-btn-author-avatar">
                                        <img src={avatar3.src} alt={`Khadi Board - ${aboutData?.vc_name}`} />
                                    </div>
                                    <div className="about__one-right-btn-author-name">
                                        <span className="text-one">{aboutData?.vc_name}</span>
                                        <h6>{aboutData?.vc_sub}</h6>
                                    </div>
                                </div>

                                <div className="about__one-right-btn-author">
                                    <div className="about__one-right-btn-author-avatar">
                                        <img src={avatar.src} alt={`Khadi Board - ${aboutData?.author_name}`} />
                                    </div>
                                    <div className="about__one-right-btn-author-name">
                                        <span className="text-one">{aboutData?.author_name}</span>
                                        <h6>{aboutData?.author_sub}</h6>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Link className="btn-one mt-30"
                                    href={aboutData?.btn_link}>{aboutData?.btn_title}<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                            {/* <div className="about__one-right-bottom">
                                <div className="about__one-right-bottom-list">
                                    <span><i className="far fa-check"></i>Performing market research.</span>
                                    <span><i className="far fa-check"></i>Providing information to a client.</span>
                                    <span><i className="far fa-check"></i>Strategic planning.</span>
                                </div>
                                <div className="about__one-right-bottom-experience">
                                    <h3><span className="counter">150</span>+</h3>
                                    <h6>Expert Team members</h6>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="about__one-shape-1 dark-n" src={shape1?.src} alt="about-shape" />
            <img className="about__one-shape-1 light-n" src={shape2?.src} alt="about-shape" />
            <img className="about__one-shape-2 dark-n" src={shape3?.src} alt="about-shape" />
            <img className="about__one-shape-2 light-n" src={shape4?.src} alt="about-shape" /> */}
        </div>
    );
};

export default About;