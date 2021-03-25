import React from 'react';
import  CurrentUserContext  from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';


function EditProfilePopup(props){
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]);

    
    function handleChangeName(e) {
        setName(e.target.value)
    }
    function handleChangeDescription(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
          name,
          about: description,
        });
      }

    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            title="Редактировать профиль"
            name="popup-profile"
            submitText="Сохранить"
            onSubmit={handleSubmit}
          >
            <input required 
            minLength={2} maxLength={40} type="text" 
            name="profile_name" placeholder="Жак-Ив Кусто" 
            className="popup__text-row popup__input-name" id="edit-card-name" 
            value={name}
            onChange={handleChangeName}
            />
            <span id="edit-card-name-error" className="popup__error" />
            <input required minLength={2} maxLength={200} type="text" 
            name="profile_job" 
            placeholder="Исследователь океана" 
            className="popup__text-row popup__input-profession" 
            id="edit-card-job" 
            value={description}
            onChange={handleChangeDescription}
            />
            <span id="edit-card-job-error" className="popup__error" />
        </PopupWithForm>
    );
}

export default EditProfilePopup




