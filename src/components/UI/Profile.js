import c from "./Profile.module.css"

const Profile = (p) => {
  return (
    <div className={c.card}>
      
      <img src={p.urlI} className={c.profileImage} alt="aptiv" draggable="false" />
    
      <div className={c.textContainer}>
        <p className={c.name}>{p.name}</p>
        <p className={c.profile}>{p.coName}</p>
      </div>
    </div>
  );
};
export default Profile;