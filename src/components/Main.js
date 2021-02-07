import React from 'react';
import avatar from '../images/kusto.jpg';


function Main(){
    return(
    <main>
      <section className="profile">   
        <div className="profile__items">
          <img className="avatar avatar_overlay" src={avatar} alt="аватар" />
          <div className="profile__item">
            <div className="profile__title-inline">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button pointer-opacity" aria-label="кнопка редактированья" />
            </div>
            <p className="profile__subtitle">Исследователь океана</p>   
          </div>           
        </div>
        <button aria-label="добавить" type="button" className="profile__add-button pointer-opacity" />
      </section>
      <section className="cards">
      </section>
    </main>
    );
}
export default Main;