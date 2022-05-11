import Repair from '../../Popup/PopupContent/Repair';
import Popup from '../../Popup/Popup'

function PopupTailoring({ isOpen, onClose }) {
    return (
        <Popup
            isOpen={isOpen}
            closeGallery={onClose}
            onClose={onClose}
        >
            <Repair />
        </Popup>
    );
}

export default PopupTailoring;


