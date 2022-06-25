import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
            <input placeholder="TÌM KIẾM SẢN PHẨM" />
        </div>
    );
}

export default Search;
