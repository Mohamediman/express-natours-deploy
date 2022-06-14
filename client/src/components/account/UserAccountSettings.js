import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';

import { createStructuredSelector } from 'reselect';
import { connect, useSelector } from 'react-redux';
import { updateCurrentUser } from '../../redux/auth/auth.action';
import { selectAuthUser } from '../../redux/auth/auth.selectors';

const UserAccountSettings = ({ updateCurrentUser }) => {
  const structuredSelector = createStructuredSelector({
    user: selectAuthUser,
  });
  const { user } = useSelector(structuredSelector);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [photo, setImage] = useState('');
  const { name, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = (image) => {
    setImage(image[0].file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateCurrentUser(name, email, photo);
  };

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form className="form form-user-data" onSubmit={(e) => onSubmit(e)}>
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            name="name"
            type="text"
            placeholder={user.name}
            onChange={(e) => onChange(e)}
            required="required"
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            className="form__input"
            id="email"
            name="email"
            type="email"
            placeholder={user.email}
            onChange={(e) => onChange(e)}
            required="required"
          />
        </div>
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            src={`/img/users/${user.photo}`}
            alt="User-profile"
          />

          <ImageUploading multiple value={photo} onChange={onFileChange}>
            {({ photo, onImageUpload }) => (
              <div className="upload__image-wrapper">
                <label className="form__label" onClick={onImageUpload}>
                  Upload Image
                </label>
              </div>
            )}
          </ImageUploading>
        </div>

        <div className="form__group right">
          <button className="btn btn--small btn--green">Save settings</button>
        </div>
      </form>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   user: state.auth.user,
// });

export default connect(null, { updateCurrentUser })(UserAccountSettings);
