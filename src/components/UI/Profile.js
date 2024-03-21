import c from "./Profile.module.css";
import edit from "../../assets/edit.png";
import React, { useState } from "react";
import BackDrop from "../UI/BackDrop"
const Profile = (p) => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData]=useState({owner: p.name, coOwner: p.coName, file:p.urlI})

  const close=e=>{
    setShowForm(false);
  }
  return (
    <React.Fragment>
      <div className={c.card}>
        <img
          src={data.file}
          className={c.profileImage}
          alt="aptiv"
          draggable="false"
        />

        <div className={c.textContainer}>
          <p className={c.name}>{p.name}</p>
          <p className={c.profile}>{p.coName}</p>
        </div>
        {p.path === "/admin" && (
          <img
            src={edit}
            className={c.edit}
            alt="aptiv"
            draggable="false"
            onClick={(e) => setShowForm(true)}
          />
        )}
      </div>

      {showForm && (
        <React.Fragment>
        <BackDrop click={close} />
          <div className={c["form-container"]}>
            <form className={c.form}>
              <div className={c["form-group"]}>
                <div className={c.inputC}>
                  <h3>owner name:</h3>
                  <input
                    type="text"
                    placeholder="Enter owner name"
                    value={data.owner}
                    required
                  />
                </div>
                <div className={c.inputC}>
                  <h3>co-owner name:</h3>
                  <input
                    type="text"
                    placeholder="Enter co-owner name"
                    value={data.coOwner}
                    required
                  />
                </div>
              </div>
              <button className={c["form-submit-btn"]} type="submit">
            submit
          </button>
            </form>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default Profile;
