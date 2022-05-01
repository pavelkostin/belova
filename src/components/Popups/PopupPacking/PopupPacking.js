import Packing from '../../Popup/PopupContent/Packing';
import Popup from '../../Popup/Popup'

function PopupPacking({ isOpen, onClose }) {
    return (
        <Popup
            isOpen={isOpen}
            closeGallery={onClose}
            onClose={onClose}
        >
            <Packing />
        </Popup>
    );
}

export default PopupPacking;


