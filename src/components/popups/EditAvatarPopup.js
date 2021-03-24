import React from 'react';
import PopupWithForm from '../PopupWithForm.js';




function EditAvatarPopup(props){
    const avatarRef = React.useRef();
    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
    }
    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            title="Обновить аватар"
            name="popup-avatar"
            submitText="Сохранить"
          ><input required type="url" name="profile_job" 
          placeholder="Ссылка на картинку" 
          className="popup__text-row popup__input-profession" 
          id="newcard-link" 
          required
          noValidate
          ref={avatarRef}
          />
            <span id="newcard-link-error" className="popup__error" />
        </PopupWithForm>
    );

}

export default EditAvatarPopup