import Tailoring from '../../Popup/PopupContent/Tailoring';
import Popup from '../../Popup/Popup'

function PopupTailoring({ isOpen, onClose }) {
    return (
        <Popup
            isOpen={isOpen}
            closeGallery={onClose}
            onClose={onClose}
        >
            <Tailoring />
        </Popup>
    );
}

export default PopupTailoring;


