import sewing from '../../../images/images/пошив_2.jpg';
import tailor from '../../../images/images/лекала.jpg';
import design from '../../../images/images/дизайн.jpg';
import packing from '../../../images/images/упаковка.jpg';

function Menu({ showTailoringPopup, showRepair, showDesign, showPacking }) {


    function onClickTailoring() {
        showTailoringPopup();
    }

    function onClickRepair() {
        showRepair();
    }

    function onClickDesign() {
        showDesign();
    }

    function onClickPacking() {
        showPacking();
    }

    return (
        <section className='menu'>
            <h2 className='menu__header' id='services'>УСЛУГИ</h2>
            <div className='menu__list'>

                <div className='menu__card'>
                    <h2 className='menu__caption'>Пошив</h2>
                    <img
                        onClick={onClickTailoring}
                        className='menu__image'
                        src={sewing}
                        alt='sewing'
                    />

                </div>

                <div className='menu__card'>
                    <h2 className='menu__caption'>Ремонт</h2>
                    <img
                        onClick={onClickRepair}
                        className='menu__image'
                        src={tailor}
                        alt='tailor' />

                </div>

                <div className='menu__card'>
                    <h2 className='menu__caption'>Дизайн</h2>
                    <img
                        onClick={onClickDesign}
                        className='menu__image'
                        src={design}
                        alt='design' />

                </div>

                <div className='menu__card'>
                    <img
                        onClick={onClickPacking}
                        className='menu__image'
                        src={packing}
                        alt='packing'
                    />
                    <h2 className='menu__caption'>Упаковка</h2>
                </div>

            </div>
        </section>
    );
}

export default Menu;