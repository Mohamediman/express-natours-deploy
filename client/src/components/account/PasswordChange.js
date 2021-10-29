import React, { useState } from 'react';

import { connect } from 'react-redux';
import { setAlert } from '../../redux/alerts/setAlerts.action';
import { changePassword } from '../../actions/auth';

const PasswordResset = ({ setAlert, changePassword }) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    password: '',
    confirmPassword: '',
  });
  const { oldPassword, password, confirmPassword } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (oldPassword === '') {
      setAlert('The current password is required', 'error');
    } else if (password !== confirmPassword) {
      setAlert('The new passwords do not match', 'error');
    } else {
      const newFormData = { ...formData };
      changePassword(newFormData);
    }
  };

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <form className="form form-user-settings" onSubmit={(e) => onSubmit(e)}>
        <div className="form__group">
          <label className="form__label" htmlFor="oldPassword">
            Current password
          </label>
          <input
            className="form__input"
            name="oldPassword"
            type="password"
            placeholder="••••••••"
            onChange={(e) => onChange(e)}
            required="required"
            minLength="8"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="password">
            New password
          </label>
          <input
            className="form__input"
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={(e) => onChange(e)}
            required="required"
            minLength="8"
          />
        </div>
        <div className="form__group ma-bt-lg">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            className="form__input"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            onChange={(e) => onChange(e)}
            required="required"
            minLength="8"
          />
        </div>
        <div className="form__group right">
          <button className="btn btn--small btn--green">Save password</button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { setAlert, changePassword })(PasswordResset);
