import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";


const VillageIndustriesProgram = () => {
    const aboutContent = {
        image_1: '/assets/img/about/abo-1.jpg',
        image_2: '/assets/img/about/abo-2.jpg',
        subtitle: 'What is Village Industries?',
        title: "'Village Industry' means any industry located in a rural are which produces any goods or renders any service with or without the use of power in which the fixed capital investment per head of an artisan or a worker does not exceed Rs. 1.00 Lakh in plain areas and Rs. 1.50 Lakhs in hilly areas or such other sum as may be by notification in the official gazette, be specified from time to time by the Central Government",
        description: 'The Kerala Khadi and Village Industries Board had established and financed several Village Industries Units through the Departmentally, Co-op: Societies, Charitable Institutions and Individuals etc, with the financial support of Khadi and Village Industries Commission and Government of Kerala. Upto 1995 the Board have given financial assistance under the pattern scheme, 1995 onwards and upto 1998-1999 provided the financial assistance under Consortium Bank Credit Scheme (CBC) of KVIC. Under CBC, the loans were provided on higher rate of interest depending upon the Prime lending Rates (PLR). The operation of the schemes was ended during the year 1998-99. The Board had totaly financed and established 18263 units and 1578 units pattern and CBC schemes respectively. Out of which 4775 and 444 units are working as on 31-3-2015. After discontinuation of the direct loan schemes of KVIC a new scheme was lauched named as SPECIAL EMPLOYMENT PROGRAMME/ RURAL EMPLOYMENT GENERATION PROGRAMME(REGP). In this scheme, assisted the 4898 nos units out of which 2565 units are working. The REGP Scheme was discontinued with effect from 31-3-2008.',
        btn_text: 'Read More',
        btn_href: '/en/about-us',
        shape_1: '/assets/img/shape/about-1.png',
        shape_2: '/assets/img/shape/about-2.png',
    }
    return (
        <>
            <SEO pageTitle="Kerala Khadi - Village Industries" />
            <HeaderOne />
            <BreadCrumb title="Village Industries" innerTitle="About Village Industries" />
            <div className="about__company section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-6 xl-mb-30">
                            <div className="about__company-left">
                                <div className="about__company-left-image dark__image mb-40">
                                    <img src={aboutContent.image_1} alt="image" />
                                    <img src={aboutContent.image_2} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6">
                            <div className="about__company-right">
                                <div className="about__company-right-title">
                                    <span className="subtitle-one">{aboutContent.subtitle}</span>
                                    <h5>{`"${aboutContent.title}"`}</h5>
                                    <br />
                                    <p>{aboutContent.description}</p>
                                    {/* <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link> */}
                                </div>
                            </div>
                            <br />
                        </div>
                        <br />

                        <div className="about__company-right">
                            <div className="about__company-right-title">
                                <span className="subtitle-one">Prime Minister’s Employment Generation Programme (PMEGP)</span>
                                {/* <h5>{`"${aboutContent.title}"`}</h5> */}
                                <br />
                                <p>
                                    The presently ongoing scheme “Prime Minister’s Employment Generation Programme (PMEGP)” was launched on 15th August 2008 by Government of India by merging two existing scheme REGP and PMRY. KVIB is one of the implementing agencies of PMEGP, besides KVIC and DICs. PMEGP is a credit linked subsidy programme administered by Ministry of MSME Government of India with Khadi & Village Industries Commission (KVIC) as Nodal Agency at National Level. Under the said programme the KVIC, Government of India, allocates Margin Money funds to be disbursed to various beneficiaries through designated Nodal Bank branches. The said programme envisage generation of employment opportunities through establishment of Micro Enterprises in rural /urban areas. The Kerala Khadi and Village Industries Board (KKVIB) is an implementing agency only for rural areas of the Kerala state. As on 31-3-2015 provided the Margin money to Rs. 5368.81 lakhs to 2465 units and 18762 nos employment generated through the Board.
                                </p>
                                {/* <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link> */}
                            </div>
                        </div>
                        <br />

                        <div className="about__company-right">
                            <div className="about__company-right-title">
                                <span className="subtitle-one">ENTE GRAMAM</span>
                                {/* <h5>{`"${aboutContent.title}"`}</h5> */}
                                <br />
                                <p>
                                Kerala Khadi and Village Industries Board keeping with its mission to uplift the rural poor, provides financial assistance for establishing Village Industries. A flagship programme viz, Special Employment Generation Programme has been designed, developed and promoted by the Kerala Khadi & Village Industries Board, with the financial support of Government of Kerala, to provide the employment opportunities to the unemployed youths, artisans, especially for women and minority sector people. The Scheme was started during the year 2008-2009. When introducing the scheme under this programme, direct bank financing of individual project upto Rs. 50000/- the Board was to motivate, guide and sponsor the cases to banks and after sanction of cases. The KKVIB would release 25% of total Project cost as Margin Money support in favour of the beneficiary, ( 30% in case of women,/OBC/ Minority and 40% for SC/ST Categories ) The amount of Margin money was to kept under the fixed Deposit for a period of 2 years in the name of the beneficiary at financing branch Level as per guidelines of the scheme. Since the year 2012-13 the scheme is renamed as “ENTE GRAMAM” and the Project cost Ceiling enhanced up to Rs. 10.00 Lakhs. Under this scheme the arrangements are proposed for extending marketing support to the beneficiaries who avail financial assistance under this Scheme.
                                   </p>
                                                            
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <img className="about__one-shape-1" src={aboutContent.shape_1} alt="shape" />
                <img className="about__one-shape-2" src={aboutContent.shape_2} alt="shape" />
            </div>

            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>
    );
};

export default VillageIndustriesProgram;