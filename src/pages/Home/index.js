import Exclusive from '~/layouts/Components/Exclusive';
import Info from '~/layouts/Components/Info';
import Slider from '~/layouts/Components/Slider';
import Trending from '~/layouts/Components/Trending';

function Home() {
    return (
        <>
            <Info />
            <Slider />
            <Exclusive />
            <Trending />
        </>
    );
}

export default Home;
