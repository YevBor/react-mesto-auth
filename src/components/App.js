// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';



function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    // document.querySelector('.popup_avatar').classList.add('popup_opened');
    setEditAvatarPopupOpen(true);
    console.log('hi');
  }
  
  function handleEditProfileClick(){
    // document.querySelector('.popup_type_edit').classList.add('popup_opened');
    setEditProfilePopupOpen(true);
    
  }
  
  function handleAddPlaceClick(){
    // document.querySelector('.popup_type_new-card').classList.add('popup_opened');
    setAddPlacePopupOpen(true);

  }


  return (
  <>
  <div className="body">
    <title>Mesto</title>
    <Header />
    <Main onEditProfile={handleEditProfileClick} 
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
     />
    <Footer />
    <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        // onClose={closeAllPopups}
        title="Обновить аватар"
        name="popup-avatar"
        submitText="Сохранить"
      ><input required type="url" name="profile_job" placeholder="Ссылка на картинку" className="popup__text-row popup__input-profession" id="newcard-link" />
        <span id="newcard-link-error" className="popup__error" />
      </PopupWithForm>


      
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        name="popup-addcard"
        submitText="Сохранить"
      ><input required minLength={2} maxLength={30} type="text" name="profile_name" placeholder="Название" className="popup__text-row popup__input-name" id="new-card-name" />
        <span id="new-card-name-error" className="popup__error" />
        <input required type="url" name="profile_job" placeholder="Ссылка на картинку" className="popup__text-row popup__input-profession" id="new-card" />
        <span id="new-card-error" className="popup__error" />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        name="popup-profile"
        submitText="Сохранить"
      ><input required minLength={2} maxLength={40} type="text" name="profile_name" placeholder="Жак-Ив Кусто" className="popup__text-row popup__input-name" id="edit-card-name" />
        <span id="edit-card-name-error" className="popup__error" />
        <input required minLength={2} maxLength={200} type="text" name="profile_job" placeholder="Исследователь океана" className="popup__text-row popup__input-profession" id="edit-card-job" />
        <span id="edit-card-job-error" className="popup__error" />
        </PopupWithForm>
        


    
    {/* <div className="popup popup_type_edit popup_overlay" noValidate>
      <form name="edit_form" className="popup__container popup__container-edit">
        <button aria-label="Close" type="button" className="popup__close-image pointer-opacity" />
        <h2 className="popup__title">Редактировать профиль</h2>
        <input required minLength={2} maxLength={40} type="text" name="profile_name" placeholder="Жак-Ив Кусто" className="popup__text-row popup__input-name" id="edit-card-name" />
        <span id="edit-card-name-error" className="popup__error" />
        <input required minLength={2} maxLength={200} type="text" name="profile_job" placeholder="Исследователь океана" className="popup__text-row popup__input-profession" id="edit-card-job" />
        <span id="edit-card-job-error" className="popup__error" />
        <button type="submit" className="popup__save-button">Сохранить</button>
      </form>
    </div>
    <div className="popup popup_overlay popup_type_new-card">
      <form name="new_form" className="popup__container  popup__container-new-card" noValidate>
        <button aria-label="Close" type="button" className="popup__close-image pointer-opacity" />
        <h2 className="popup__title">Новое место</h2>
        <input required minLength={2} maxLength={30} type="text" name="profile_name" placeholder="Название" className="popup__text-row popup__input-name" id="new-card-name" />
        <span id="new-card-name-error" className="popup__error" />
        <input required type="url" name="profile_job" placeholder="Ссылка на картинку" className="popup__text-row popup__input-profession" id="new-card" />
        <span id="new-card-error" className="popup__error" />
        <button type="submit" className="popup__save-button">Сохранить</button>
      </form>
    </div>
    <div className="popup popup_overlay popup_type_delete-card">
      <form name="new_form" className="popup__container" noValidate>
        <button aria-label="Close" type="button" className="popup__close-image pointer-opacity" />
        <h2 className="popup__title">Вы уверены?</h2>          
        <button type="submit" className="popup__save-button">Да</button>
      </form>
    </div>
    <div className="popup popup_overlay popup_avatar">
      <form name="new_form" className="popup__container  popup__container-avatar" noValidate>
        <button aria-label="Close" type="button" className="popup__close-image pointer-opacity" />
        <h2 className="popup__title">Обновить аватар</h2>
        <input required type="url" name="profile_job" placeholder="Ссылка на картинку" className="popup__text-row popup__input-profession" id="newcard-link" />
        <span id="newcard-link-error" className="popup__error" />
        <button type="submit" className="popup__save-button">Сохранить</button>
      </form>
    </div>
    <div className="popup popup_overlay popup_type_image">
      <div className="popup__image-container">
        <button aria-label="Close" type="button" className="popup__close-image pointer-opacity" />
        <img src="#" alt="#" className="popup__image" />
        <h2 className="popup__subtitle">#</h2>
      </div>
    </div>
    <template className="template" /> */}
  </div>
  </>

  );
}

export default App;
