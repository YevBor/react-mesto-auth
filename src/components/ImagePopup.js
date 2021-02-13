import React from 'react';


function ImagePopup({card, onClose}){
    const { _id, link, name } = card;

    function handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup')) {onClose()}
      }

    return(
    <div className={`popup popup_overlay popup_type_image ${_id ? 'popup_opened' : ''}`} onClick={handleOverlayClose}>
      <div className="popup__image-container">
        <button aria-label="Close" type="button" className="popup__close-image pointer-opacity" onClick={onClose}/>
        <img src={link} alt={name} className="popup__image" />
        <h2 className="popup__subtitle">{name}</h2>
      </div>
    </div>
    )
}


export default ImagePopup