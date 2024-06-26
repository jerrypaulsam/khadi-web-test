import Link from 'next/link';
import breadCrumbBg from "../../../public/assets/img/pages/about-us.jpg";

const BreadCrumb = ({title, innerTitle}) => {
    const firstThreeWords = title?.split(' ').slice(0, 1);
    return (
        <div className="page__banner" style={{backgroundImage: `url(${breadCrumbBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page__banner-content">
                            <span>{firstThreeWords}</span>
                            <ul>
                                <li><Link href="/">Home</Link><span>|</span></li>
                                <li>{innerTitle}</li>
                            </ul>
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;