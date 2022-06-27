import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import {
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    PinterestIcon,
    YoutubeIcon,
} from '~/components/Icons';
import config from '~/config';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <div className={cx('logo')}>
                        <Link to={config.routes.home}>
                            <img src={images.logo} />
                        </Link>
                        <Link to={config.routes.home}>
                            <img src={images.logoct} />
                        </Link>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('info')}>
                            <p>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
                            <p>
                                <strong>Địa chỉ đăng ký: </strong>
                                Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam
                            </p>
                            <p>
                                <strong>Số điện thoại: </strong>
                                0243 205 2222
                            </p>
                        </div>
                        <div className={cx('social')}>
                            <a href="https://www.facebook.com/profile.php?id=100028805391294">
                                <FacebookIcon />
                            </a>
                            <a href="https://myaccount.google.com/?hl=vi&utm_source=OGB&utm_medium=act">
                                <GoogleIcon />
                            </a>
                            <a href="https://www.instagram.com/qun.61/">
                                <InstagramIcon />
                            </a>
                            <a href="https://www.pinterest.com/nguyendinhquan78910/_saved/">
                                <PinterestIcon />
                            </a>
                            <a href="https://www.youtube.com/channel/UCDPWp70EJG4D2G3RHfX7BFA">
                                <YoutubeIcon />
                            </a>
                        </div>
                        <Button primary>Hotline: 0246 662 3434</Button>
                    </div>
                </div>
                <div className={cx('center')}></div>
                <div className={cx('right')}></div>
            </div>
        </footer>
    );
}

export default Footer;
