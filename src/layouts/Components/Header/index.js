import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import config from '~/config';
import images from '~/assets/images';
import { BagIcon, HeadphoneIcon, PersonIcon } from '~/components/Icons';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

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
                    {currentUser ? (
                        <>
                            <Search />

                            <Tippy content="Headphone">
                                <button className={cx('action-btn')}>
                                    <HeadphoneIcon />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <PersonIcon />
                            </button>
                            <button className={cx('action-btn')}>
                                <BagIcon />
                                <div className={cx('badge')}>0</div>
                            </button>
                        </>
                    ) : (
                        <>
                            <Button primary>LOG IN</Button>
                            <Button outline>ĐĂNG KÝ</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
