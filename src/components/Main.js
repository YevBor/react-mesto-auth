import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import  CurrentUserContext  from '../contexts/CurrentUserContext';


function Main(props){
    
    const currentUser = React.useContext(CurrentUserContext);


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
  

    

    return(
    <main>
      <section className="profile">   
        <div className="profile__items">
          <img onClick={props.onEditAvatar} className="avatar avatar_overlay" src={currentUser.avatar} alt="аватар" />
          <div className="profile__item">
            <div className="profile__title-inline">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button pointer-opacity" aria-label="кнопка редактированья" />
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>   
          </div>           
        </div>
        <button onClick={props.onAddPlace} aria-label="добавить" type="button" className="profile__add-button pointer-opacity" />
      </section>
      <section className="cards">
        {cards.map((item) => (
                <Card card={item} key={item._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
            ))}
      </section>
    </main>
    );
}
export default Main;