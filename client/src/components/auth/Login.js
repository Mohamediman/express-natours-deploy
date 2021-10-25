import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Alert from '../../alerts/Alert'

import { connect } from 'react-redux'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      })
    
      const { email, password } = formData;
    
      const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value })
      }
    
      const onSubmit = e => {
        e.preventDefault();
        login(email, password);
      }

      if(isAuthenticated){
        return <Redirect to="/" />
      }

    return (
        <div className="login-form">
          {/* <Alert /> */}
            <h2 className="heading-secondary ma-bt-lg">Login into your account</h2>
            <form className="form form--login" onSubmit={e => onSubmit(e)}>
                <div className="form__group">
                    <label htmlFor="email" className="form__label">Enter email address</label>
                    <input type="email" id="email" name="email" className="form__input" 
                    onChange={e => onChange(e)} placeholder="youremail@email.com" required/>
                </div>
                <div className="form__group ma-bt-md">
                    <label htmlFor="password" className="form__label">Password</label>
                    <input type="password" id="password" className="form__input" name="password"
                        onChange={e => onChange(e)} placeholder="........" required minLength="8"/>
                </div>
                <div className="form__group">
                    <button className="btn btn--green">Login</button>
                </div>
            </form>
            
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
