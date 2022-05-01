import terms from '../../../images/images/terms_1.svg';
import approach from '../../../images/images/approach.svg';
import quality from '../../../images/images/quality.svg';

function Advantages() {
    return (
        <section className='advantages'>
            <div className='advantages__list'>
                <div className='advantages__item'>
                    <img
                        className='advantages__img'
                        src={terms}
                        alt='terms'
                    />
                    <p className='advantages__info'>Соблюдение сроков</p>
                </div>
                <div className='advantages__item'>
                    <img
                        className='advantages__img'
                        src={approach}
                        alt='approach'
                    />
                    <p className='advantages__info'>Индивидуальный подход</p>
                </div>
                <div className='advantages__item'>
                    <img
                        className='advantages__img'
                        src={quality}
                        alt='quality'
                    />
                    <p className='advantages__info'>Качественная работа</p>
                </div>
            </div>
        </section>
    )
}

export default Advantages;