import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <Link to={config.routes.cartegory}>
                    <span>Free Shipping đơn hàng nguyên giá</span>
                </Link>
            </div>
            <div className={cx('center')}>
                <Link to={config.routes.cartegory}>
                    <span>Bảo hành trọn đời</span>
                </Link>
            </div>
            <div className={cx('right')}>
                <Link to={config.routes.cartegory}>
                    <span>Chính sách thẻ thành viên</span>
                </Link>
            </div>
        </div>
    );
}

export default Info;
