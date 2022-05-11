
import bobinas from '../../../images/images/pexels-cottonbro-4614107.jpg';

function Slider() {
    return (
        <section className='slider'>
            <img
                className='slider__image'
                src={bobinas}
                alt='bobinas'
            />
            <h1 className="slider__header">ШВЕЙНАЯ МАСТЕРСКАЯ</h1>
        </section>
    );
}

export default Slider;
