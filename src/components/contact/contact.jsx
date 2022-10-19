import './contact.scss'
import { useState } from 'react'

const Contact = () =>{
    const [User, setUser] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Message: ""
    })
    let Name, value;
    const handleinputs = (e) => {
        Name = e.target.name
        value = e.target.value
        setUser({ ...User, [Name]: value })

    }
    
    const Postdata = async (e) => {
        e.preventDefault()

        const { Name, Email, Subject, Message } = User

        const res = await fetch("/contact", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Name,
                Email,
                Subject,
                Message
            })
        })

        if (res.status === 200) {
            alert("done")
        }else{
            alert("somthing is wrong")
        }

    }
    return(
        <>
    <section className="contact-us1">
        <div className="row1">
            <div className="contact-col1">
                <div>
                    <i className="fa fa-home"></i>
                    <span>
                        <h5>Address</h5>
                        <p>Indra Park Palam Colony,<br/>Main Sagarpur, Sagar Pur,<br/> Delhi</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <span>
                        <h5>Contact No.</h5>
                        <p>+91 72920 98071 <br/>+91 84487 37079</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-envelope-o"></i>
                    <span>
                        <h5>Email ID</h5>
                        <p>Ayushdeepnegi@gmail.com</p>
                    </span>
                </div>
            </div>
            <div className="contact-col1">
                <form method="post" onSubmit={Postdata} noValidate>
                    <input className='transparent border border-primary'autoComplete='off' type="text"  name="Name" placeholder="Enter Your name" value={User.Name} onChange={handleinputs}  required />
                    <input className='transparent border border-primary'autoComplete='off' type="E-mail" name="Email" placeholder="Enter Email Id" value={User.Email} onChange={handleinputs}  required />
                    <input className='transparent border border-primary'autoComplete='off' type="text" name="Subject" placeholder="Enter Your Subject" value={User.Subject} onChange={handleinputs}  required />
                    <textarea className='transparent border border-primary' autoComplete='off' rows="8" name="Message" placeholder="Message" value={User.Message} onChange={handleinputs}  required ></textarea>
                    <button type="Submit" className="hero-btn red-btn">Message</button>
                </form>
            </div>
        </div>
    </section>
        </>
    )
}

export default Contact ;