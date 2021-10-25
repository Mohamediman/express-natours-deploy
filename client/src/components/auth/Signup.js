import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { setAlert } from '../../actions/setAlert'

import { connect } from 'react-redux'
import { register } from '../../actions/auth'


const Signup = ({ isAuthenticated, register, setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    
      const { name, email, password, confirmPassword } = formData;
    
      const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value })
      }
    
      const onSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword){
            setAlert("Passwords do not match", "error");
        } else {
            const newUser = {name, email, password, confirmPassword }
            setAlert("Success Registration", "success");
            register(newUser)
        }
      }
    
      if(isAuthenticated){
        return <Redirect to="/" />
      }
    return (
        <div className="login-form">
            {/* <Alert /> */}
            <h2 className="heading-secondary ma-bt-lg">Singup</h2>
            <form className="form form--login" onSubmit={e => onSubmit(e)}>
                <div className="form__group">
                    <label htmlFor="name" className="form__label">Name</label>
                    <input type="name" id="name" className="form__input" 
                       name="name" onChange={e => onChange(e)} placeholder="your name" required/>
                </div>
                <div className="form__group">
                    <label htmlFor="email" className="form__label">Enter email address</label>
                    <input type="email" id="email" className="form__input" 
                    name="email" onChange={e => onChange(e)} placeholder="youremail@email.com" required/>
                </div>
                <div className="form__group ma-bt-md">
                    <label htmlFor="password" className="form__label">Password</label>
                    <input type="password" id="password" className="form__input" 
                        name="password" onChange={e => onChange(e)} placeholder="........" required minLength="8"/>
                </div>
                <div className="form__group ma-bt-md">
                    <label htmlFor="confirmPassword" className="form__label">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="form__input" 
                        name="confirmPassword" onChange={e => onChange(e)} placeholder="........" required minLength="8"/>
                </div>
                <div className="form__group">
                    <button className="btn btn--green">Signup</button>
                </div>
            </form>
        </div>
    )
}

Signup.propTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, setAlert })(Signup)
