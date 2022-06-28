import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import config from '~/config';
import styles from './Trending.module.scss';

const cx = classNames.bind(styles);

function Trending() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={images.banner2} />
            </div>
            <div className={cx('content')}>
                <Button to={config.routes.cartegory} outline>
                    XEM NGAY BST
                </Button>
            </div>
        </div>
    );
}

export default Trending;
