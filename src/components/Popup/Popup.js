

function Popup({ isOpen, onClose, children }) {
    return (
        <div className={`popup ${isOpen && 'popup_visible'}`} >

            <div className='popup__container'>
                <div className='popup__container-logo'>
                    <button
                        onClick={onClose}
                        className='popup__close-btn'>
                    </button>
                </div>
                <div className='popup__container-info'>
                    <div className='popup__nav-list'>
                        {children}
                        <a
                            onClick={onClose}
                            href='#apply'
                            className='popup__apply'>
                            <h4
                                className='popup__apply-text'>
                                Оставить заявку
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;