import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupTailoring from '../Popups/PopupTailoring/PopupTailoring';
import PopupRepair from '../Popups/PopupRepair/PopupRepair';
import PopupDesign from '../Popups/PopupDesign/PopupDesign';
import PopupPacking from '../Popups/PopupPacking/PopupPacking';
import PopupGallery from '../Popups/PopupGallery/PopupGallery';

function App() {

  const [isOpenTailoring, setIsOpenTaloring] = useState(false);
  const [isOpenRepair, setIsOpenRepair] = useState(false);
  const [isOpenDesign, setIsOpenDesign] = useState(false);
  const [isOpenPacking, setIsOpenPacking] = useState(false);
  const [isGalleryPopupOpened, setGalleryPopupOpened] = useState(false);
  const [photoSrc, setPhotoSrc] = useState('');

  function showTailoringPopup() {
    setIsOpenTaloring(true);
  }

  function showRepair() {
    setIsOpenRepair(true);
  }

  function showDesign() {
    setIsOpenDesign(true);
  }

  function showPacking() {
    setIsOpenPacking(true);
  }

  function handlePhotoClick(e) {
    setGalleryPopupOpened(true);
    setPhotoSrc(e.target.src);
  }

  function closeAllPopups() {
    setIsOpenTaloring(false);
    setIsOpenRepair(false);
    setIsOpenDesign(false);
    setIsOpenPacking(false);
    setGalleryPopupOpened(false);

  }

  function hidePopupByClick(e) {
    setGalleryPopupOpened(false);
  }



  return (
    <div className='page'>
      <Header />
      <Main
        showTailoringPopup={showTailoringPopup}
        showRepair={showRepair}
        showDesign={showDesign}
        showPacking={showPacking}
        onPhotoClick={handlePhotoClick}
      />
      <Footer />
      <PopupTailoring
        isOpen={isOpenTailoring}
        onClose={closeAllPopups}
      />
      <PopupRepair
        isOpen={isOpenRepair}
        onClose={closeAllPopups}
      />
      <PopupDesign
        isOpen={isOpenDesign}
        onClose={closeAllPopups}
      />
      <PopupPacking
        isOpen={isOpenPacking}
        onClose={closeAllPopups}
      />
      <PopupGallery
      hidePopupByClick={hidePopupByClick}
        photo={photoSrc}
        isOpen={isGalleryPopupOpened}
        onClose={closeAllPopups}
      />
    </div>

  );
}

export default App;
