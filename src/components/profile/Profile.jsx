import React from "react";
import "./Profile.css";
import "../../utils.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import me from "../../assets/pfpsmall.png";
function Profile() {
  return (
    <div className='profile__container'>
      <img className='profile__image' src={me}></img>
      <div className='profile__name'>Miles Oncken</div>
      <ul className='profile__list'>
        <li>
          <a
            href='https://www.github.com/milesoncken/'
            target='_blank'
            className='profile__btn'
            rel='noreferrer'>
            <button className='profile__btn contact-scale'>
              <img className='profile__github' src={github}></img>
            </button>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/milesoncken/'
            target='_blank'
            className='profile__btn'
            rel='noreferrer'>
            <button className='profile__btn contact-scale'>
              <img className='profile__github' src={linkedin}></img>
            </button>
          </a>
        </li>
      </ul>
      <div className='profile__contact contact-scale'>
        <a style={{ color: "white" }} href='mailto:milesoncken@gmail.com'>
          <div className='btn'>Contact me</div>
        </a>
      </div>
    </div>
  );
}

export default Profile;
