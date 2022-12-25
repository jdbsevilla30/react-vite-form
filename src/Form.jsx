import React, { useState, useEffect, useRef } from 'react'
export default function Form() {

    const [formData, setFormData] = useState(
        {
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            registrant: "",
            gradeLevel: "",
            getNews: false,
            contactNumber: "",
        }
    )

    function handleChange(event) {

        const { name, checked, type, value } = event.target
        setFormData((prevFormData) => ({

            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))

    }

    function handleReset() {
        setFormData(() => ({
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            registrant: "",
            gradeLevel: "",
            getNews: false,
            contactNumber: "",
        }))
    }

    function handleSubmit(event) {

        const passwordRedOutline = document.getElementById("password")
        const confirmPasswordRedOutline = document.getElementById("confirmPassword")

        event.preventDefault();

        const { password, confirmPassword, email } = formData

        const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const whiteSpace = /(\s)/
        const spaceRegExp = /^[^\s]+$/;
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;

        if (password.length < 8
            || whiteSpace.test(password) || !uppercaseRegExp.test(password)
            || !lowercaseRegExp.test(password) ||
            !digitsRegExp.test(password) || !specialCharRegExp.test(password) || password !== confirmPassword) {
            passwordRedOutline.classList.add("red-outline")
            confirmPasswordRedOutline.classList.add("red-outline")
            alert("Your password must be at least 8 characters including a lowercase letter, an uppercase letter, a symbol and a number. You must also match your password!!!")
        }

        else {

            passwordRedOutline.classList.remove("red-outline")
            confirmPasswordRedOutline.classList.remove("red-outline")
            alert(
                `
      PLEASE SAVE YOUR DETAILS
      Username: ${formData.userName} \n
      First Name: ${formData.firstName} \n
      Last Name: ${formData.lastName} \n 
      Email: ${formData.email} \n 
      Contact#:  ${formData.contactNumber} \n
      `)
            handleReset()
        }

    }

    return (
        <form onSubmit={handleSubmit} className="form" >
            <label htmlFor="username">Username</label>
            <input
                id="username"
                placeholder="Username"
                name="userName"
                type="text"
                value={formData.userName}
                onChange={handleChange}
                onInvalid={e => e.target.setCustomValidity('Your username cannot be blank!')}
                onInput={e => e.target.setCustomValidity('')}
                required
            />
            <label htmlFor="password">Password</label>
            <input

                id="password"
                placeholder="Password"
                name="password"
                type="password"

                value={formData.password}
                onChange={handleChange}
                required
            />
            <label htmlFor="confirmPassword">Confirm</label>
            <input
                id="confirmPassword"
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
            />
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                placeholder="First Name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                onInvalid={e => e.target.setCustomValidity('Please enter your first name')}
                onInput={e => e.target.setCustomValidity('')}
                required
            />

            <label htmlFor="lastName">Enter your Last Name</label>
            <input
                id="lastName"
                placeholder="Last Name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                onInvalid={e => e.target.setCustomValidity('Please enter your last name')}
                onInput={e => e.target.setCustomValidity('')}
                required
            />

            <label htmlFor="email">Enter your Email</label>
            <input
                id="email"
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="contactNumber">Contact #</label>
            <input
                placeholder="Contact #"
                name="contactNumber"
                type="number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
            />

            <input type="submit" />

        </form>
    )
}