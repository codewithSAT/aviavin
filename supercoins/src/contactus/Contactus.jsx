import './contact.css';
import React, { useState } from 'react';

const Contactus = () => {
  const [person, setPerson] = useState({});
  const [data, setdata] = useState([]);
  const [showform, setshowform] = useState(true);

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
    }
  };

  //   const handleDelete = (did) => {
  //     const newList = data.filter((person) => {
  //       if (person.id !== did) return true;
  //     });
  //     setCount(count - 1);
  //     setdata(newList);
  //   };
  return (
    <>
      {showform ? (
        <div className="formLayout">
          <h2>
            We value your Interest. Please fill in the below details and submit
            your request.
          </h2>
          <div className="element">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={person.firstname}
              placeholder="Enter your First name"
              onChange={handleChange}
            ></input>
          </div>

          <div className="element">
            <label htmlFor="lastname">Last Name</label>
            <input
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
        </div>
      ) : (
        <div className="formLayout">
          <h2>
            We had received your request. Our team will get back to you with in
            24 hours.
          </h2>
          <h3>Thank you for your Interest...!!</h3>
        </div>
      )}
      {/* {data.map((person) => {
          const { id, firstname, lastname, email } = person;
        return (
            <>
            <h4 key={id}>
              {firstname} - {lastname} - {email}
              <button onClick={() => handleDelete(id)}>x</button>
            </h4>
          </>
        );
    })}
      {count !== 0 && (
          <button
          onClick={() => {
              setCount(0);
            setdata([]);
        }}
        >
          Remove all {count} users
        </button>
      )} */}
    </>
  );
};

export default Contactus;
