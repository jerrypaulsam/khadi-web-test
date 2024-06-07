import Link from "next/link";
import Count from "../common/count";


const AboutMain = ( {isMalayalam} ) => {
    const aboutContent = {
        image_1: '/assets/img/about/abo-1.jpg',
        image_2: '/assets/img/about/abo-2.jpg',
        subtitle: isMalayalam ? 'കേരള ഖാദി ബോർഡ്' : 'Kerala Khadi Board',
        title: isMalayalam ? 'പാരമ്പര്യങ്ങൾ സംരക്ഷിക്കുന്നു' : 'Preserving Traditions',
        description: isMalayalam ? "കേരള ഗ്രാമവ്യവസായ ബോർഡ് എന്ന സ്റ്റാട്ട്യുട്ടറി സ്ഥാപനം 1957 ലെ ആക്ട് -9 പ്രകാരം രൂപീകരിച്ചിട്ടുള്ളതും സംസ്ഥാന ഖാദിയുടെയും ഗ്രാമവ്യവസായങ്ങളുടെയും ഏകോപനവും പ്രോത്സാഹനവും നടത്തുന്നതിൽ ചുമതലപ്പെട്ട സ്ഥാപനമാകുന്നു .കേരള ഗ്രാമവ്യവസായ ബോർഡ് ആയതിനുമേൽ ചുമതലപ്പെട്ട പദ്ധതികൾ ,സംഘങ്ങൾ ,രജിസ്റ്റർ ചെയ്ത മറ്റു സ്ഥാപനങ്ങൾ ,വ്യക്തികൾ തുടങ്ങിയവയിലൂടെയും വകുപ്പുതല യൂണിറ്റുകളുടെയും സംസ്ഥാന സർക്കാരിൻറെയും ഖാദി കമ്മീഷൻറെയും ദേശസാൽകൃത ബാങ്കുകളുടെയും സാമ്പത്തിക സഹായം നേടിക്കൊണ്ട് നടപ്പാക്കി വരുന്നു."
         : 'Kerala Khadi and Village Industries Board is a statutory body constituted by the Act 9 of 1957, vested with the responsibility of organizing and promoting Khadi and Village Industries in the State. The Board implements the programmes through co-operative, registered institutions, individuals and departmental units by imparting/ availing assistance from Government of Kerala, Khadi Commission and Nationalized Banks.',
        btn_text: isMalayalam ? 'കൂടുതൽ' : 'Read More',
        btn_href: `/${isMalayalam ? "mal" : "en"}/about-us`,
        shape_1: '/assets/img/shape/about-1.png',
        shape_2: '/assets/img/shape/about-2.png',
    }
    return (
        <>
            <div className="about__company section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-6 xl-mb-30">
                            <div className="about__company-left">
                                <div className="about__company-left-image dark__image">
                                    <img src={aboutContent.image_1} alt="image" />
                                    <img src={aboutContent.image_2} alt="image" />
                                </div>
                                <div className="about__company-left-experience">
                                    <h2><Count number={67} />+</h2>
                                    <h6>Years of Tradition</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6">
                            <div className="about__company-right">
                                <div className="about__company-right-title">							
                                    <span className="subtitle-one">{aboutContent.subtitle}</span>
                                    <h2>{aboutContent.title}</h2>
                                    <p>{aboutContent.description}</p>
                                    {/* <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="about__one-shape-1" src={aboutContent.shape_1} alt="shape" />
                <img className="about__one-shape-2" src={aboutContent.shape_2} alt="shape" />
            </div>
        </>
    );
};

export default AboutMain;