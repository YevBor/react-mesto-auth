import React from 'react';


function PopupWithForm({isOpen, onClose, name, title, children, submitText}) {
    return(
    <div className={`popup popup_overlay ${isOpen ? 'popup_opened' : ''}`} id={name} >
       
          <form className="popup__container" name={name} noValidate>
            <button
                type="button"
                className="popup__close-image pointer-opacity"
                // onClick={onClose}
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