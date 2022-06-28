import Brand from '~/layouts/Components/Brand';
import Exclusive from '~/layouts/Components/Exclusive';
import Gallery from '~/layouts/Components/Gallery';
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
            <Brand />
            <Gallery />
        </>
    );
}

export default Home;
