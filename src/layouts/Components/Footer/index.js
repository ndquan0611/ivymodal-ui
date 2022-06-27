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
        <>
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
                    <div className={cx('center')}>
                        <div className={cx('left-center')}>
                            <h3 className={cx('title')}>Giới thiệu</h3>
                            <ul>
                                <li>
                                    <Link to={config.routes.home}>Về IVY moda</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Tuyển dụng</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Hệ thống cửa hàng</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('main-center')}>
                            <h3 className={cx('title')}>Dịch vụ khách hàng</h3>
                            <ul>
                                <li>
                                    <Link to={config.routes.home}>Chính sách điều khoản</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Hướng dẫn mua hàng</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Chính sách thanh toán</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Chính sách đổi trả</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Chính sách bảo hành</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>
                                        Chính sách giao nhận vận chuyển
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('right-center')}>
                            <h3 className={cx('title')}>Liên hệ</h3>
                            <ul>
                                <li>
                                    <Link to={config.routes.home}>Hotline</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Email</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Live Chat</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Messenger</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.home}>Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('register-form')}>
                            <h3 className={cx('title')}>
                                Nhận thông tin các chương trình của IVY moda
                            </h3>
                            <form>
                                <input name="email" placeholder="Nhập địa chỉ email" required />
                                <div className={cx('submit')}>
                                    <Button outline>Đăng ký</Button>
                                </div>
                            </form>
                        </div>
                        <div className={cx('download')}>
                            <h3 className={cx('title')}>Download App</h3>
                            <a href="https://apps.apple.com/app/id1430094474?fbclid=IwAR3xAzj-xTmtj35aQUB8KhTLk1zFgyw2zssisSyn9qkRA6w4fgt6kI7j8Q8">
                                <img src={images.appStore} />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.ivymoda.app&fbclid=IwAR2Ki0MhC0MdCSEqmnP9BUNLhKg7ZresCBqA8BfRkPBBswJ99-YNqOX4cL8">
                                <img src={images.googlePlay} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={cx('coryright')}>©IVYmoda All rights reserved</div>
        </>
    );
}

export default Footer;
