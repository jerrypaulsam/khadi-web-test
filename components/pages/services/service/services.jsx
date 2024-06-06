import Link from 'next/link';
import CtaArea from '../../homes/home/cta';
import Solution from './solution';
import Testimonial from '../../homes/home/testimonial';
import photoGalleryData from '@/components/data/photo-gallery';

const PhotoAlbums = () => {
    return (
        <>
            <div className="services__page section-padding-two">
                <div className="container">
                    <div className="row">
                        {photoGalleryData?.map((data, id) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 mt-25" key={id}>
                                <Link href={`/en/gallery/${data.id}`}>
                                    <div className="services__three-item page">
                                        <img src={data.image.src} alt="Kerala Khadi Photo Gallery" />
                                        <div className="services__three-item-content page">
                                            <h4>{data.title}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoAlbums;