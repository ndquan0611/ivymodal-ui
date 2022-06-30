import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import config from '~/config';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>ĐĂNG KÝ</h3>
            <div className={cx('auth')}>
                <form>
                    <div className={cx('register')}>
                        <h4>Thông tin khách hàng</h4>
                        <div>
                            <div className={cx('group')}>
                                <label>
                                    Họ:
                                    <span>*</span>
                                </label>
                                <input placeholder="Họ..." />
                            </div>
                            <div className={cx('group')}>
                                <label>
                                    Tên:
                                    <span>*</span>
                                </label>
                                <input placeholder="Tên..." />
                            </div>
                        </div>
                        <div>
                            <div className={cx('group')}>
                                <label>
                                    Email:
                                    <span>*</span>
                                </label>
                                <input type="email" placeholder="Email..." />
                            </div>
                            <div className={cx('group')}>
                                <label>
                                    Điện thoại:
                                    <span>*</span>
                                </label>
                                <input placeholder="Điện thoại..." />
                            </div>
                        </div>
                        <div>
                            <div className={cx('group')}>
                                <label>
                                    Ngày sinh:
                                    <span>*</span>
                                </label>
                                <input placeholder="Ngày sinh..." />
                            </div>
                            <div className={cx('group')}>
                                <label>
                                    Giới tính:
                                    <span>*</span>
                                </label>
                                <select>
                                    <option>Nữ</option>
                                    <option>Nam</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className={cx('group')}>
                                <label>
                                    Tỉnh/TP:
                                    <span>*</span>
                                </label>
                                <select>
                                    <option>Chọn Tỉnh/Tp</option>
                                    <option>Hà Nội</option>
                                    <option>Hồ Chí Minh</option>
                                    <option>Hải Phòng</option>
                                    <option>Đà Nẵng</option>
                                    <option>An Giang</option>
                                </select>
                            </div>
                            <div className={cx('group')}>
                                <label>
                                    Tỉnh/TP:
                                    <span>*</span>
                                </label>
                                <select>
                                    <option>Chọn Quận/Huyện</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className={cx('group')}>
                                <label>
                                    Phường/Xã:
                                    <span>*</span>
                                </label>
                                <select>
                                    <option>Chọn Phường/Xã</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className={cx('group')}>
                                <label>
                                    Địa chỉ:
                                    <span>*</span>
                                </label>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={cx('register')}>
                        <h4>Thông tin mật khẩu</h4>
                        <div>
                            <div className={cx('group')}>
                                <label>
                                    Mật khẩu:
                                    <span>*</span>
                                </label>
                                <input type="password" placeholder="Mật khẩu..." />
                            </div>
                        </div>
                        <div>
                            <div className={cx('group')}>
                                <label>
                                    Nhập lại mật khẩu:
                                    <span>*</span>
                                </label>
                                <input placeholder="Nhập lại mật khẩu..." />
                            </div>
                        </div>
                        <div>
                            <div className={cx('group')}>
                                <label>
                                    Mời nhập các ký tự trong hình vào ô sau:
                                    <span>*</span>
                                </label>
                                <input placeholder="Nhập lại mật khẩu..." />
                            </div>
                        </div>
                        <p className={cx('captcha')}>
                            <img src={images.captcha} />
                        </p>

                        <div className={cx('checkbox')}>
                            <input type="checkbox" />
                            <label>
                                <span>
                                    Đồng ý với các
                                    <Link to={config.routes.cartegory}> điều khoản </Link>
                                    của IVY
                                </span>
                            </label>
                        </div>
                        <div className={cx('checkbox')}>
                            <input type="checkbox" />
                            <label>
                                <span>Đăng ký nhận bản tin</span>
                            </label>
                        </div>

                        <div>
                            <div className={cx('btn')}>
                                <Button primary>Đăng ký</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
