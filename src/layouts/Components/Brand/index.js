import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// Import Swiper React components
// import required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';

import images from '~/assets/images';
import config from '~/config';
import styles from './Brand.module.scss';

const cx = classNames.bind(styles);

function Brand() {
    return (
        <div className={cx('wrapper')}>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className={cx('brand')}
            >
                <SwiperSlide>
                    <Link to={config.routes.cartegory}>
                        <img src={images.banner3} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={config.routes.cartegory}>
                        <img src={images.banner4} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={config.routes.cartegory}>
                        <img src={images.banner5} />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Brand;
