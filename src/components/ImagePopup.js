import React from 'react';


function ImagePopup(){
    return(
    <div className="popup popup_overlay popup_type_image">
      <div className="popup__image-container">
        <button aria-label="Close" type="button" className="popup__close-image pointer-opacity" />
        <img src="#" alt="#" className="popup__image" />
        <h2 className="popup__subtitle">#</h2>
      </div>
    </div>
    )
}


export default ImagePopup