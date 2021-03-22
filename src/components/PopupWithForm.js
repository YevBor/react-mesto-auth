import React from 'react';


function PopupWithForm({isOpen, onClose, name, title, children, submitText, onSubmit}) {
    function handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup')) {onClose()}
      }

    return(
    <div className={`popup popup_overlay ${isOpen ? 'popup_opened' : ''}`} id={name} onClick={handleOverlayClose}>
       
          <form className="popup__container" name={name} noValidate onSubmit={onSubmit}>
            <button
                type="button"
                className="popup__close-image pointer-opacity"
                onClick={onClose} 
            ></button>
            <h2 className="popup__title">{title}</h2>
            {children}
            <button type="submit" className="popup__save-button">
              {submitText}
            </button>
          </form>
   
      </div>
    )
    
}

export default PopupWithForm