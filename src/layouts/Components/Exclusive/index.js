import classNames from 'classnames/bind';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

import { Link } from 'react-router-dom';
import { BagIcon, HeartIcon } from '~/components/Icons';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Exclusive.module.scss';

const cx = classNames.bind(styles);

function Exclusive() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>New Arrival</h2>
            <div>
                <div className={cx('head')}>
                    <ul>
                        <li>IVY moda</li>
                        <li>IVY men</li>
                        <li>IVY kids</li>
                    </ul>
                </div>
                <div className={cx('content')}>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        navigation={true}
                        modules={[Navigation]}
                        className={cx('product')}
                    >
                        <SwiperSlide>
                            <div className={cx('ticket')}>NEW</div>
                            <div className={cx('thumb')}>
                                <Link to={config.routes.cartegory}>
                                    <img src={images.product1} />
                                </Link>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('color')}>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={images.be} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={images.red} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className={cx('favourite')}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                <h4 className={cx('name')}>
                                    <Link to={config.routes.cartegory}>Jumpsuit lụa ống rộng </Link>
                                </h4>
                                <div className={cx('price')}>
                                    <ins>
                                        <span>1.890.000đ</span>
                                    </ins>
                                </div>
                            </div>
                            <div className={cx('cart')}>
                                <BagIcon />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('ticket')}>NEW</div>
                            <div className={cx('thumb')}>
                                <Link to={config.routes.cartegory}>
                                    <img src={images.product1} />
                                </Link>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('color')}>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={images.be} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={images.red} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className={cx('favourite')}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                <h4 className={cx('name')}>
                                    <Link to={config.routes.cartegory}>Jumpsuit lụa ống rộng </Link>
                                </h4>
                                <div className={cx('price')}>
                                    <ins>
                                        <span>1.890.000đ</span>
                                    </ins>
                                </div>
                            </div>
                            <div className={cx('cart')}>
                                <BagIcon />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('ticket')}>NEW</div>
                            <div className={cx('thumb')}>
                                <Link to={config.routes.cartegory}>
                                    <img src={images.product1} />
                                </Link>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('color')}>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={images.be} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={images.red} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className={cx('favourite')}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                <h4 className={cx('name')}>
                                    <Link to={config.routes.cartegory}>Jumpsuit lụa ống rộng </Link>
                                </h4>
                                <div className={cx('price')}>
                                    <ins>
                                        <span>1.890.000đ</span>
                                    </ins>
                                </div>
                            </div>
                            <div className={cx('cart')}>
                                <BagIcon />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('ticket')}>NEW</div>
                            <div className={cx('thumb')}>
                                <Link to={config.routes.cartegory}>
                                    <img src={images.product1} />
                                </Link>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('color')}>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={images.be} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={images.red} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className={cx('favourite')}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                <h4 className={cx('name')}>
                                    <Link to={config.routes.cartegory}>Jumpsuit lụa ống rộng </Link>
                                </h4>
                                <div className={cx('price')}>
                                    <ins>
                                        <span>1.890.000đ</span>
                                    </ins>
                                </div>
                            </div>
                            <div className={cx('cart')}>
                                <BagIcon />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('ticket')}>NEW</div>
                            <div className={cx('thumb')}>
                                <Link to={config.routes.cartegory}>
                                    <img src={images.product1} />
                                </Link>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('color')}>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={images.be} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={images.red} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className={cx('favourite')}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                <h4 className={cx('name')}>
                                    <Link to={config.routes.cartegory}>Jumpsuit lụa ống rộng </Link>
                                </h4>
                                <div className={cx('price')}>
                                    <ins>
                                        <span>1.890.000đ</span>
                                    </ins>
                                </div>
                            </div>
                            <div className={cx('cart')}>
                                <BagIcon />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('ticket')}>NEW</div>
                            <div className={cx('thumb')}>
                                <Link to={config.routes.cartegory}>
                                    <img src={images.product1} />
                                </Link>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('color')}>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={images.be} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={images.red} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className={cx('favourite')}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                <h4 className={cx('name')}>
                                    <Link to={config.routes.cartegory}>Jumpsuit lụa ống rộng </Link>
                                </h4>
                                <div className={cx('price')}>
                                    <ins>
                                        <span>1.890.000đ</span>
                                    </ins>
                                </div>
                            </div>
                            <div className={cx('cart')}>
                                <BagIcon />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className={cx('btn')}>
                        <Button to={config.routes.cartegory} outline>
                            Xem tất cả
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exclusive;
