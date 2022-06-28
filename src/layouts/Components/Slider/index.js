import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// Import Swiper React components
// import required modules
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import styles from './Slider.module.scss';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={cx('wrapper')}
            >
                <SwiperSlide className={cx('slider')}>
                    <Link to={config.routes.cartegory}>
                        <img src={images.banner1} />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
