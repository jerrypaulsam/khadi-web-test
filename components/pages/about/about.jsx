import Link from "next/link";
import Count from "../common/count";


const AboutMain = () => {
    const aboutContent = {
        image_1: '/assets/img/about/abo-1.jpg',
        image_2: '/assets/img/about/abo-2.jpg',
        subtitle: 'Kerala Khadi Board',
        title: 'Preserving Traditions',
        description: 'Kerala Khadi and Village Industries Board is a statutory body constituted by the Act 9 of 1957, vested with the responsibility of organizing and promoting Khadi and Village Industries in the State. The Board implements the programmes through co-operative, registered institutions, individuals and departmental units by imparting/ availing assistance from Government of Kerala, Khadi Commission and Nationalized Banks.',
        btn_text: 'Read More',
        btn_href: '/en/about-us',
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