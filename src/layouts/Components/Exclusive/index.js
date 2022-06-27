import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { HeartIcon } from '~/components/Icons';
import config from '~/config';
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
                    <div className={cx('product')}>
                        <div className={cx('ticket')}>NEW</div>
                        <div className={cx('thumb')}>
                            <img src={images.product1} />
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('color')}>
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src={images.be} />
                                        </a>
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
                        <div className={cx('cart')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exclusive;
