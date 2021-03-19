import React from 'react';
import  CurrentUserContext  from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike}){
    const { name, link, likes } = card
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
        ` ${isOwn ? 'cards__remove-button pointer-opacity' : 'cards__remove-button_hidden'}`
      );

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // const cardLikeButtonClassName = `cards__like-button cards__like-button_active pointer-opacity ${
    //     isLiked && 'cards__like-button'
    //   }`;

    const cardLikeButtonClassName = (`pointer-opacity ${isLiked ? 'cards__like-button ' : 'cards__like-button cards__like-button_active'}`);
    
    function handleClick() {
        onCardClick(card)
      }
    function handleLikeClick() {
        onCardLike(card)
    }

    return(
    <div className="cards__item">
        <div className="cards__position">
        <img className="cards__image " src={link} alt={name} onClick={handleClick}/>
        <button type="button" aria-label="кнопка удалить" className= {cardDeleteButtonClassName} />
        </div>
        <div className="cards__rectangle">
        <h2 className="cards__title">{name}</h2>
        <div>
            <button type="button" aria-label="кнопка лайк" 
            className= {cardLikeButtonClassName} 
            onClick={handleLikeClick} />
            <h2 className="cards__like-count" >{likes.length}</h2>
        </div>
        </div>
    </div>
    )
}


export default Card