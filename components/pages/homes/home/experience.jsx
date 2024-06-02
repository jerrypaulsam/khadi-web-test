import Link from "next/link";
import image1 from "../../../../public/assets/img/pages/exp-1.jpg";
import image2 from "../../../../public/assets/img/pages/exp-2.jpg";
import SkillBar from "../../common/skill-bar";
import SkillBarItem from "../../common/skill-bar";

const Experience = () => {
    const experienceContent = {
        subtitle: 'Our Showrooms',
        title: 'Find your dream dress in our showrooms.',
        des: 'Discover beautiful, handwoven khadi textiles in Kerala! Find authentic clothing, homeware, and more at government-run Khadi Gramodyog Bhavan showrooms or Kerala Khadi & Village Industries Board locations. Support local artisans and experience the rich heritage of Kerala khadi.',
        btn_text: 'View Showrooms',
        btn_link: '#',
        progress1: '90',
        progress2: '40',
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
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="experience__area-image-item mt-65">
                                    <img src={image2.src} alt="image" />
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
                                            <span className="text-two">Showrooms in India</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress1} number={8058} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Showrooms in Kerala</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress2} number={92} />
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