import Image from 'next/image';
import React from 'react';

const BannerImage = ({ src }: { src: any }) => {
    return (
        <Image
            src={src}
            alt="bannerImg"
            className="md:px-40 md:mt-10 px-5 mt-5 md:h-96 h-32 w-full object-cover"
        />
    );
};

export default BannerImage;