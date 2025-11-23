import style from "./Profile.module.scss";

export const Profile = ({ isProfileOpen, toggleProfile, logout, username, email }) => {
  return (
    <div className={`${style.backdrop} ${!isProfileOpen ? style.hidden : ""}`} id="profback" onClick={toggleProfile}>
      <div className={style.profile}>
        <h2 className={style.profile__title}>User</h2>
        <div className={style.data}>
          <p className={style.profile__username}>Username: <span className={style.field}>{username}</span></p>
          <p className={style.profile__email}>Email: <span className={style.field}>{email}</span></p>
        </div>
        <button className={style.profile__logout} onClick={logout}>Log Out</button>
      </div>
    </div>
  )
}

