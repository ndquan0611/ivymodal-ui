import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const itemSearch = [
    {
        id: 1,
        title: 'Đầm',
    },
    {
        id: 2,
        title: 'Trễ vai',
    },
    {
        id: 3,
        title: 'Áo khoác',
    },
    {
        id: 4,
        title: 'Quần',
    },
    {
        id: 5,
        title: 'Áo sơ mi',
    },
    {
        id: 6,
        title: 'Vest',
    },
    {
        id: 7,
        title: 'Đầm',
    },
    {
        id: 8,
        title: 'Trễ vai',
    },
    {
        id: 9,
        title: 'Áo khoác',
    },
    {
        id: 10,
        title: 'Quần',
    },
    {
        id: 11,
        title: 'Áo sơ mi',
    },
    {
        id: 12,
        title: 'Vest',
    },
];

function Search() {
    const [searchItem, setSearchItem] = useState(itemSearch);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setSearchResult([]);
    }, []);

    return (
        <div>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('search-popper')}>
                            <h4>Tìm kiếm nhiều nhất</h4>
                            <div className={cx('search-content')}>
                                {searchItem.map((item) => {
                                    return (
                                        <Link key={item.id} to={config.routes.cartegory}>
                                            {item.title}
                                        </Link>
                                    );
                                })}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                placement="bottom-start"
            >
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                    <input placeholder="TÌM KIẾM SẢN PHẨM" />
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
