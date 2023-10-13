'use client'
import {useState} from "react";

const Contact = () => {
  const [user,setUser]=useState({
    email:"",
    message:""
  });


  const handleChange =(e)=>{
    const dataType=e.target.name;
    const datavalue=e.target.value;
    setUser((prevData)=>(
      {...prevData,
      [dataType]:datavalue,}
    ))
  }


  const dataSubmit = async(e) =>{
    e.preventDefault();
      setUser({
        email:"",
        message:""
      })
  }
  return (
    <section className="contactpg">
      <div class="form-container">
        <h1 className="text-center text-lg">Suggestions</h1>
        <form class="form" onSubmit={dataSubmit}>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              // autoComplete="off"
              onChange={handleChange}
              value={user.email}
              placeholder="Your email"
              name="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="textarea">Message</label>
            <textarea
              name="message"
              id="textarea"
              autoComplete="off"
              onChange={handleChange}
              value={user.message}
              placeholder="Sugegstions & messages ..."
              rows="10"
              cols="50"
              required
            >
            </textarea>
          </div>
          <button class="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
