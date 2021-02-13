import React from 'react';


function Card({card, onCardClick}){
    const { name, link, likes } = card

    function handleClick() {
        onCardClick(card)
      }

    return(
    <div className="cards__item">
        <div className="cards__position">
        <img className="cards__image " src={link} alt={name} onClick={handleClick}/>
        <button type="button" aria-label="кнопка удалить" className="cards__remove-button pointer-opacity" />
        </div>
        <div className="cards__rectangle">
        <h2 className="cards__title">{name}</h2>
        <div>
            <button type="button" aria-label="кнопка лайк" className="cards__like-button cards__like-button_active pointer-opacity" />
            <h2 className="cards__like-count" >{likes.length} </h2>
        </div>
        </div>
    </div>
    )
}


export default Card