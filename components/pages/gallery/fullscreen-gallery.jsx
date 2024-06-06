import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const FullScreenImageGallery = ({ images }) => {

    const galleryImages = images.map(img => ({
        original: img.original,
        thumbnail: img.thumbnail
    }));

    return (
        <ImageGallery
            items={galleryImages}
            showFullscreenButton={true}
            showPlayButton={false}
            showThumbnails={true}
        />
    );
};

export default FullScreenImageGallery;
