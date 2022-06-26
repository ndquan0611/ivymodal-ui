import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setSearchResult([1, 2, 3]);
    }, []);

    return (
        <div>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4>Tìm kiếm nhiều nhất</h4>
                        </PopperWrapper>
                    </div>
                )}
                placement="bottom-start"
            >
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                    <input value={searchValue} placeholder="TÌM KIẾM SẢN PHẨM" />
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
