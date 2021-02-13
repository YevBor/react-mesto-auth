import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';



function Main(props){
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

      React.useEffect(() => {
        Promise.all([api.getProfileData(), api.getInitialCards()])
          .then((values) => {
            const [userInfo, initialCards] = values
            const { name, about, avatar } = userInfo
            setUserName(name)
            setUserDescription(about)
            setUserAvatar(avatar)
            setCards(initialCards)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [])

    return(
    <main>
      <section className="profile">   
        <div className="profile__items">
          <img onClick={props.onEditAvatar} className="avatar avatar_overlay" src={userAvatar} alt="аватар" />
          <div className="profile__item">
            <div className="profile__title-inline">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button pointer-opacity" aria-label="кнопка редактированья" />
            </div>
            <p className="profile__subtitle">{userDescription}</p>   
          </div>           
        </div>
        <button onClick={props.onAddPlace} aria-label="добавить" type="button" className="profile__add-button pointer-opacity" />
      </section>
      <section className="cards">
        {cards.map((item) => (
                <Card card={item} key={item._id} onCardClick={props.onCardClick} />
            ))}
      </section>
    </main>
    );
}
export default Main;