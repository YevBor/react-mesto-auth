// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import  CurrentUserContext  from '../contexts/CurrentUserContext';
import EditProfilePopup from '../components/popups/EditProfilePopup.js';



function App() {
  const [currentUser, setCurrentUser] = React.useState({
    avatar:
      'https://github.com/konjvpaljto/mesto/blob/master/src/images/avatar.jpg?raw=true',
    name: 'Жак Ив-Кусто',
    about: 'Исследователь океана',
  });
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});



  React.useEffect(() => {
    Promise.all([api.getProfileData()])
    .then(([user]) => {
      setCurrentUser(user);
    })
    .catch(err => console.log(err))
  }, []);




 
  function handleEditAvatarClick() {
    // document.querySelector('.popup_avatar').classList.add('popup_opened');
    setEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick(){
    // document.querySelector('.popup_type_edit').classList.add('popup_opened');
    setEditProfilePopupOpen(true);
    
  }
  
  function handleAddPlaceClick(){
    // document.querySelector('.popup_type_new-card').classList.add('popup_opened');
    setAddPlacePopupOpen(true);

  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleUpdateUser(user) {
    console.log(user)
    api.editUserProfile(user)
      .then((user) => {
        setCurrentUser(user)
      })
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
}

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard({})
  }
  
  
  return (
    <div className="body">
      <CurrentUserContext.Provider value={currentUser}>
        <title>Mesto</title>
        <Header />
        <Main onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        // cards={cards}
        />
        <Footer />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        onUpdateUser={handleUpdateUser}
        /> 
        <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            title="Обновить аватар"
            name="popup-avatar"
            submitText="Сохранить"
          ><input required type="url" name="profile_job" placeholder="Ссылка на картинку" className="popup__text-row popup__input-profession" id="newcard-link" />
            <span id="newcard-link-error" className="popup__error" />
        </PopupWithForm>
          
        <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            title="Новое место"
            name="popup-addcard"
            submitText="Сохранить"
          ><input required minLength={2} maxLength={30} type="text" name="profile_name" placeholder="Название" className="popup__text-row popup__input-name" id="new-card-name" />
            <span id="new-card-name-error" className="popup__error" />
            <input required type="url" name="profile_job" placeholder="Ссылка на картинку" className="popup__text-row popup__input-profession" id="new-card" />
            <span id="new-card-error" className="popup__error" />
        </PopupWithForm>


      </CurrentUserContext.Provider>
    </div>

  );
}

export default App;



{/* <PopupWithForm
isOpen={isEditProfilePopupOpen}
onClose={closeAllPopups}
title="Редактировать профиль"
name="popup-profile"
submitText="Сохранить"
><input required minLength={2} maxLength={40} type="text" name="profile_name" placeholder="Жак-Ив Кусто" className="popup__text-row popup__input-name" id="edit-card-name" />
<span id="edit-card-name-error" className="popup__error" />
<input required minLength={2} maxLength={200} type="text" name="profile_job" placeholder="Исследователь океана" className="popup__text-row popup__input-profession" id="edit-card-job" />
<span id="edit-card-job-error" className="popup__error" />
</PopupWithForm> */}
