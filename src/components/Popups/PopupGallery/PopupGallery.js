

function PopupGallery({ hidePopupByClick, photo, isOpen, onClose }) {
    return (
        <section
            onClick={hidePopupByClick}
            className={`popup-gallery ${isOpen ? 'popup-gallery_visible' : ''}`}>
            <div
                className='popup__container_new popup__container_gallery_new'>
                <button
                    onClick={onClose}
                    className='popup__close_new' />
                <img className='popup__image' src={photo} alt='gallery_photo' />
                <p className='popup__caption'></p>
            </div>
        </section>
    )
}

export default PopupGallery;