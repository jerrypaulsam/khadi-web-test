import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";


const KhadiProgram = () => {
    const aboutContent = {
        image_1: '/assets/img/about/abo-1.jpg',
        image_2: '/assets/img/about/abo-2.jpg',
        subtitle: 'What is Khadi?',
        title: 'Khadi means any cloth woven on handloom in India from cotton, silk or woollen yarn handspun in India or from a mixture of any or all of such yarn',
        description: 'There are mainly four types of Khadi: Cotton, Muslin, woolen and Silk. In addition to this there is also a variety called polyvastra which is produced in certain Khadi units. Polyvastra is a combination of polyester and cotton. The Khadi units can be mainly classified in to three. One type of Khadi units are those where there is only spinning activity is undertaken. The second categories are those exclusively focused on weaving. Other than these two there are Khadi units where both spinning and weaving are undertaken simultaneously.',
        btn_text: 'Read More',
        btn_href: '/en/about-us',
        shape_1: '/assets/img/shape/about-1.png',
        shape_2: '/assets/img/shape/about-2.png',
    }
    return (
        <>
            <SEO pageTitle="Kerala Khadi - Khadhi Programme" />
            <HeaderOne />
            <BreadCrumb title="Khadhi Programme" innerTitle="About Khadhi Programme" />
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
                                    <span className="subtitle-one">Khadi Production Centers</span>
                                    {/* <h5>{`"${aboutContent.title}"`}</h5> */}
                                    <br />
                                    <p><strong>Payyannur khadi center</strong>, is the major Khadi production center under the board. This unit was under the control of Tamil nadu Government before the formation of the Kerala State. This unit come under the Kerala Khadi and Village Industries Board on 1-11-1959. After the implementation of the Special Employment Programme the Board has established the Departmental Khadi Productions units in all Districts. The departmental units in Kannur and Kasargod districts are under the control of Payyanur Khadi Center and other units are controlled by the District Project Officers.</p>
                                    <p> There are around 232 spinning centers and 154 weaving centers under the direct control of the Board and around 6000 artisans engaged in khadi production. During the year 2014-15 were produced 92.85 lakhs yarn worth to Rs. 854.36 (Lakhs) and 11.75 lakh Sq.Mtr cloth worth to Rs. 1719.91 lakhs. The major products produced from Khadi Cotton are various types of Dhothies, Shirtings, Towels, Bed sheets, Bedspread, Uniform cloth and Other varieties.

                                    </p><p>
                                        A Cotton Processing Plant also established at Ettukudukka in Kannur District for the supplying of raw material viz; sliver to the Departmental units.

                                    </p><p>
                                        There is also 14 nos Institutions financed by the Board and 14 nos Institutions directly aided by the Khadi and Village Industries Commission engaged in Khadi activities.
                                    </p>
                                    {/* <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link> */}
                                </div>
                            </div>
                            <br />

                            <div className="about__company-right">
                                <div className="about__company-right-title">
                                    <span className="subtitle-one">Minimum Wages Act</span>
                                    {/* <h5>{`"${aboutContent.title}"`}</h5> */}
                                    <br />
                                    <p>
                                        Totally near about 12000 artisans are engaged in khadi production activities of which 11500 nos are women in Rural Sector. These khadi artisans are earning their wages under " Minimum Wages Act" as per the Notification published in Kerala Gazette Dated, 15-01-2010 vide S.R. O. NO. 44/2006 Dt, 08-01-2010 of the Labour and Rehabilitation (E) Department, Government of Kerala.
                                    </p>
                                    <p>
                                        For ensuring the payment of Minimum wages the State Govt have provided the funds under the plan scheme - Income Support to Traditional Skilled labourers. The Year wise details of the funds sanctioned furnished below:-
                                    </p>
                                    <table className="officals-table">
                                        <tr>
                                            <th>YEAR</th>
                                            <th>AMOUNT (RS. IN LAKHS)</th>
                                        </tr>
                                        <tr>
                                            <td>2011-12</td>
                                            <td>1468.00</td>
                                        </tr>
                                        <tr>
                                            <td>2012-13</td>
                                            <td>2000.00</td>
                                        </tr>
                                        <tr>
                                            <td>2013-14</td>
                                            <td>1800.00</td>
                                        </tr>
                                        <tr>
                                            <td>2014-15</td>
                                            <td>2200.00</td>
                                        </tr>
                                        <tr>
                                            <td>2015-16</td>
                                            <td></td>
                                        </tr>
                                    </table>
                                    <br />
                                    <p>
                                        The Government of Kerala has appointed a committee under the charimanship of vetaran Gandhian Padmasree P. Gopinathan Nair for the studying about the problems in Khadi units and improvisation & Modernisation of khadi production activities. They have submitted the report to the Chief Minister of Kerala, the Govt: have approved the reccomendations of the committee and provided a sum of Rs. 1209 Lakhs for the year 2013-14, Rs. 1209/- Lakh.
                                    </p>

                                    {/* <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link> */}
                                </div>
                                <br />

                                <div className="about__company-right">
                                    <div className="about__company-right-title">
                                        <span className="subtitle-one">Khadi workers come under ESI</span>
                                        {/* <h5>{`"${aboutContent.title}"`}</h5> */}
                                        <br />
                                        <p>
                                            A project to bring all Khadi labourers of the State under Employee’s State Insurance (ESI) scheme was inaugurated by Chief Minister Oommen Chandy in Kozhikode on 26-7-2014.Kerala is the first State in the country to implement this project, which offers the benefits of ESI to the employees besides the benefits from the Khadi labourers Welfare Fund Board. The scheme would benefit around 12,000 Khadi labourers in the State.
                                        </p>
                                        {/* <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link> */}
                                    </div>
                                </div>
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

export default KhadiProgram;