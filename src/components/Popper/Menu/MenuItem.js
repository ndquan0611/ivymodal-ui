import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const classes = cx('menu-item', {
        setparate: data.setparate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
