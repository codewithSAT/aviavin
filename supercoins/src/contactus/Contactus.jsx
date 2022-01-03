import './contact.css';
import React, { useState } from 'react';

const Contactus = () => {
  const [person, setPerson] = useState({});
  const [data, setdata] = useState([]);
  const [showform, setshowform] = useState(true);
  console.log(data);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      person.firstname &&
      person.email &&
      person.lastname &&
      person.phonenumber &&
      person.description
    ) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setdata([...data, newPerson]);
      //   setPerson({ firstname: '', lastname: '', email: '' });
      console.log(data);
      setshowform(false);
      // setTimeout(() => (window.location.href = '/home'), 5000);
    } else {
      document.getElementById('firstname') == '' &&
        document.getElementById('firstname').focus();
      document.getElementById('email') == '' &&
        document.getElementById('email').focus();
      document.getElementById('lastname') == '' &&
        document.getElementById('lastname').focus();
      document.getElementById('phonenumber') == '' &&
        document.getElementById('phonenumber').focus();
      document.getElementById('description') == '' &&
        document.getElementById('description').focus();
      // document.getElementById('firstname').focus();
    }
  };

  /*function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
        Attachments: [
          {
            name: "File_Name_with_Extension",
            path: "Full Path of the file"
          }]
      })
        .then(function (message) {
          alert("Mail has been sent successfully")
        });
    }*/
  return (
    <>
      {showform ? (
        <form className="formLayout">
          <h2>
            We value your Interest. Please fill in the below details and submit
            your request.
          </h2>
          <div className="element">
            <label htmlFor="firstname">First Name </label>
            <input
              required
              type="text"
              id="firstname"
              name="firstname"
              value={person.firstname}
              placeholder="Enter your First name"
              onChange={handleChange}
            ></input>
          </div>

          <div className="element">
            <label htmlFor="lastname">Last Name </label>
            <input
              required
              type="text"
              id="lastname"
              name="lastname"
              value={person.lastname}
              placeholder="Enter your Last name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="element">
            <label htmlFor="email">Email </label>

            <input
              required
              type="text"
              id="email"
              name="email"
              value={person.email}
              placeholder="Enter your email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="element">
            <label htmlFor="phonenumber">Contact number </label>

            <input
              required
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={person.phonenumber}
              placeholder="Enter your phone number (123-456-7890)"
              onChange={handleChange}
            ></input>
          </div>
          <div className="element">
            <label htmlFor="description">Looking for </label>

            <textarea
              required
              type="textArea"
              id="description"
              name="description"
              value={person.description}
              placeholder="Please let us know the details/information required to you."
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="element">
            <button id="btn" type="submit" onClick={handleSubmit}>
              Submit Request
            </button>
          </div>
        </form>
      ) : (
        <div className="formLayout">
          <h2>
            We had received your request. Our team will get back to you with in
            24 hours.
          </h2>
          <h3>Thank you for your Interest...!!</h3>
          {/* <h3>Redirecting to home screen.</h3> */}
        </div>
      )}
    </>
  );
};

export default Contactus;
