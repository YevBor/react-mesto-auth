import React from 'react';
import  CurrentUserContext  from '../../contexts/CurrentUserContext.js';
import PopupWithForm from '../PopupWithForm.js';



function AddPlacePopup(props){
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onAddPlace({
            name,
            link,
          });
          setName('');
          setLink('');
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeLink(e) {
        setLink(e.target.value);
    }
    

    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            title="Новое место"
            name="popup-addcard"
            submitText="Сохранить"
          ><input required 
            noValidate
            value={name}
            onChange={handleChangeName}
            minLength={2} maxLength={30} 
            type="text" name="profile_name" 
            placeholder="Название" 
            className="popup__text-row popup__input-name" id="new-card-name" />
            <span id="new-card-name-error" className="popup__error" />
            <input required 
            noValidate
            value={link}
            onChange={handleChangeLink}
            type="url" name="profile_job" 
            placeholder="Ссылка на картинку" 
            className="popup__text-row popup__input-profession" id="new-card" />
            <span id="new-card-error" className="popup__error" />
        </PopupWithForm>
    );

}

export default AddPlacePopup