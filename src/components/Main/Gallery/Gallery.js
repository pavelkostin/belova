import img1 from '../../../images/images/gallery/1.jpg';
import img2 from '../../../images/images/gallery/2.jpg';
import img3 from '../../../images/images/gallery/3.jpg';
import img4 from '../../../images/images/gallery/4.jpg';
import img5 from '../../../images/images/gallery/5.jpg';
import img6 from '../../../images/images/gallery/6.jpg';
import img8 from '../../../images/images/gallery/8.jpg';
import img9 from '../../../images/images/gallery/9.jpg';

function Gallery({ onPhotoClick }) {



    return (
        <section className='gallery' id='gallery'>
            <img
                onClick={onPhotoClick}
                className='gallery__img'
                src={img1}
                alt='approach'
            />
            <img
                onClick={onPhotoClick}
                className='gallery__img'
                src={img2}
                alt='approach'
            />
            <img
                onClick={onPhotoClick}
                className='gallery__img'
                src={img3}
                alt='approach'
            />
            <img
                onClick={onPhotoClick}
                className='gallery__img'
                src={img4}
                alt='approach'
            />
            <img
                onClick={onPhotoClick}
                className='gallery__img'
                src={img5}
                alt='approach'
            />
            <img
                onClick={onPhotoClick}
                className='gallery__img'
                src={img6}
                alt='approach'
            />
            <img
                onClick={onPhotoClick}
                className='gallery__img'
                src={img8}
                alt='approach'
            />
            <img
                onClick={onPhotoClick}
                className='gallery__img'
                src={img9}
                alt='approach'
            />
        </section>
    )
}

export default Gallery;



