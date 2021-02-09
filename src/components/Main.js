import React from 'react';
import avatar from '../images/kusto.jpg';

function handleEditProfileClick(){
    document.querySelector('.popup_type_edit').classList.add('popup_opened');
  }
  function handleEditAvatarClick() {
    document.querySelector('.popup_avatar').classList.add('popup_opened');
}


function handleAddPlaceClick(){
    document.querySelector('.popup_type_new-card').classList.add('popup_opened');
}



function Main(){
    return(
    <main>
      <section className="profile">   
        <div className="profile__items">
          <img onClick={handleEditAvatarClick} className="avatar avatar_overlay" src={avatar} alt="аватар" />
          <div className="profile__item">
            <div className="profile__title-inline">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button onClick={handleEditProfileClick} type="button" className="profile__edit-button pointer-opacity" aria-label="кнопка редактированья" />
            </div>
            <p className="profile__subtitle">Исследователь океана</p>   
          </div>           
        </div>
        <button onClick={handleAddPlaceClick} aria-label="добавить" type="button" className="profile__add-button pointer-opacity" />
      </section>
      <section className="cards">
      </section>
    </main>
    );
}
export default Main;