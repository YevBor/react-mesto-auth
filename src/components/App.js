
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './popups/PopupWithForm.js';
import ImagePopup from './popups/ImagePopup.js';
import api from '../utils/api.js';
import CurrentUserContext  from '../contexts/CurrentUserContext';
import EditProfilePopup from '../components/popups/EditProfilePopup.js';
import EditAvatarPopup from '../components/popups/EditAvatarPopup.js';
import AddPlacePopup from '../components/popups/AddPlacePopup.js';



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
    setEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick(){
    setEditProfilePopupOpen(true);
    
  }
  
  function handleAddPlaceClick(){
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

function handleUpdateAvatar(avatar){
  api.editAvatar(avatar)
    .then((avatar) => setCurrentUser(avatar))
    .catch((err) => console.log(err))
    .finally(() => closeAllPopups());

}

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard({})
  }

  const [cards, setCards] = React.useState([]);
    
  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
    .then((values) => {
      const [initialCards] = values
      setCards(initialCards)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  React.useEffect(() => {
    const onKeypress = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups()
      }
    }

    document.addEventListener('keydown', onKeypress)

    return () => {
      document.removeEventListener('keydown', onKeypress)
    }
  }, [])

 function handleCardDelete(card){
  const isOwn = card.owner._id === currentUser._id;
  if (isOwn) {
    api.removeCard(card._id)
    .then(() => {
      const newCards = cards.filter(c => 
        c._id !== card._id);
        setCards(newCards)
    })
    .catch((err) => {
      console.log(err)
    }) 
  }


 }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id)

    function updateCards(newCard) {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c))
      setCards(newCards)
    }

    if (isLiked) {
      api
        .removeLike(card._id)
        .then((newCard) => {
          updateCards(newCard)
        })
        .catch(err => console.log(err))
    } else {
      api
        .addLike(card._id)
        .then((newCard) => {
          updateCards(newCard)
        })
        .catch(err => console.log(err))
    }
  }

  function handleAddCard(card) {
    api.addNewCard(card)
      .then((card) => setCards([card, ...cards]))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
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
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        />
        <Footer />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        onUpdateUser={handleUpdateUser}
        /> 
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup 
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          onAddPlace={handleAddCard}
        />
          
      </CurrentUserContext.Provider>
    </div>

  );
}

export default App;




