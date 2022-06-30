import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// Import Swiper React components
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
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
        <div className={cx('wrapper')}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={cx('slider')}
            >
                <SwiperSlide>
                    <Link to={config.routes.cartegory}>
                        <img src={images.banner1} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={config.routes.cartegory}>
                        <img src={images.banner6} />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
