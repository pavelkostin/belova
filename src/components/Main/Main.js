import Slider from '../Main/Slider/Slider';
import Menu from '../Main/Menu/Menu';
import ApplyForm from '../Main/ApplyForm/ApplyForm';
import Advantages from '../Main/Advantages/Advantages';
import Gallery from '../Main/Gallery/Gallery';

function Main({ onPhotoClick, showTailoringPopup, showRepair, showDesign, showPacking }) {
    return (
        <main>
            <Slider />
            <Menu
                showRepair={showRepair}
                showTailoringPopup={showTailoringPopup}
                showDesign={showDesign}
                showPacking={showPacking}
            />
            <ApplyForm />
            <Advantages />
            <Gallery
                onPhotoClick={onPhotoClick}
            />
        </main>
    );
}

export default Main;
