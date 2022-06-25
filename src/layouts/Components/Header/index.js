import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import { BagIcon, HeadphoneIcon, PersonIcon } from '~/components/Icons';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <nav>
                    <ul className={cx('menu')}>
                        <li>
                            <Link to="/">Nữ</Link>
                        </li>
                        <li>
                            <Link to="/">Nam</Link>
                        </li>
                        <li>
                            <Link to="/">Trẻ em</Link>
                        </li>
                        <li>
                            <Link to="/">Bộ sưu tập</Link>
                        </li>
                        <li>
                            <Link to="/">LIFESTYLE</Link>
                        </li>
                        <li>
                            <Link to="/">Về Chúng Tôi</Link>
                        </li>
                    </ul>
                </nav>

                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Ivy" />
                </Link>

                <div className={cx('action')}>
                    <Search />

                    {currentUser ? (
                        <>
                            <button className={cx('action-btn')}>
                                <HeadphoneIcon />
                            </button>
                            <button className={cx('action-btn')}>
                                <PersonIcon />
                            </button>
                            <button className={cx('action-btn')}>
                                <BagIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button>Log in</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
