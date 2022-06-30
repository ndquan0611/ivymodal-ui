import classNames from 'classnames/bind';
import Button from '~/components/Button';
import config from '~/config';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login')}>
                <h3 className={cx('title')}>Bạn đã có tài khoản IVY</h3>
                <div className={cx('content')}>
                    <p>
                        Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận
                        được những ưu đãi tốt hơn!
                    </p>
                    <form className={cx('form')}>
                        <div className={cx('group')}>
                            <input placeholder="Email/SĐT" />
                        </div>
                        <div className={cx('group')}>
                            <input placeholder="Mật khẩu" />
                        </div>
                        <div className={cx('option')}>
                            <div className={cx('checkbox')}>
                                <input type="checkbox" />
                                <span>Ghi nhớ đăng nhập</span>
                            </div>
                            <a href="">Quên mật khẩu?</a>
                        </div>
                        <div className={cx('btn')}>
                            <Button to={config.routes.login} primary>
                                Đăng nhập
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={cx('register')}>
                <h3 className={cx('title')}>Khách hàng mới của IVY moda</h3>
                <div className={cx('content')}>
                    <p>
                        Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy chọn này để truy
                        cập biểu mẫu đăng ký.
                    </p>
                    <p>
                        Bằng cách cung cấp cho IVY moda thông tin chi tiết của bạn, quá trình mua
                        hàng trên ivymoda.com sẽ là một trải nghiệm thú vị và nhanh chóng hơn!
                    </p>
                    <div className={cx('btn')}>
                        <Button to={config.routes.register} primary>
                            Đăng ký
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
