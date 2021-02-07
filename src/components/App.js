// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
  <>
  <div className="body">
    <title>Mesto</title>
    <header className="header">
      <img className="header__logo" src="<%=require('./images/Vector.svg')%>" alt="лого" />
    </header>
    <main>
      <section className="profile">   
        <div className="profile__items">
          <img className="avatar avatar_overlay" src="<%=require('./images/kusto.jpg')%>" alt="аватар" />
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
    <footer className="footer">
      <p className="footer__author">© 2020. Mesto Russia</p>
    </footer>
    <div className="popup popup_type_edit popup_overlay" noValidate>
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
    <template className="template" />
  </div>
  </>

  );
}

export default App;
