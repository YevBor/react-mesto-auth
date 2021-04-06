import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';
import  CurrentUserContext  from '../contexts/CurrentUserContext';


function Main(props){
    
    const currentUser = React.useContext(CurrentUserContext);
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
        {props.cards.map((item) => (
                <Card card={item} key={item._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
            ))}
      </section>
    </main>
    );
}
export default Main;