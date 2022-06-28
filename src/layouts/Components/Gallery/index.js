import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// Import Swiper React components
// import required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import styles from './Gallery.module.scss';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);

const galleryImg = [
    {
        id: 1,
        img: images.gallery1,
    },
    {
        id: 2,
        img: images.gallery2,
    },
    {
        id: 3,
        img: images.gallery3,
    },
    {
        id: 4,
        img: images.gallery4,
    },
    {
        id: 5,
        img: images.gallery5,
    },
    {
        id: 6,
        img: images.gallery6,
    },
];

function Gallery() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Gallery</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className={cx('gallery')}
            >
                {galleryImg.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link to={config.routes.cartegory}>
                            <img src={item.img} alt="" />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Gallery;
