import Design from '../../Popup/PopupContent/Design';
import Popup from '../../Popup/Popup'

function PopupDesign({ isOpen, onClose }) {
    return (
        <Popup
            isOpen={isOpen}
            closeGallery={onClose}
            onClose={onClose}
        >
            <Design />
        </Popup>
    );
}

export default PopupDesign;


