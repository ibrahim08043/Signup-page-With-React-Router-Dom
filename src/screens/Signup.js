import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css"
function Signup() {
    const [firstname, setfirstname] = useState("")
    const [fathername, setfathername] = useState("")
    const [password, setpassword] = useState("")
    const [Email, setemailaddress] = useState("")
    const navigate = useNavigate();

    function gotohome(e) {
        e.preventDefault();
        let arr = {
            frName: firstname,
            lsname: fathername,
            Email,
            password,
        }
        if (firstname == "") {
            alert("please fill your Name")
        } if (fathername == "") {
            alert("please fill your Father Name")
        } if (password == "") {
            alert("please fill your password")
        } if (Email == "") {
            alert("please give your Email Address")
        } else {
            console.log(e)
            navigate("login", {
                state: arr

            })
        }
    }


    return (
        <div>
            <h1 >Sign Up</h1>

            <input onChange={(e) => setfirstname(e.target.value)} type={'text'} placeholder="Name" />
            <br />
            <br />
            <input onChange={(e) => setfathername(e.target.value)} type={'text'} placeholder="Father name" />
            <br />
            <br />
            <input onChange={(e) => setemailaddress(e.target.value)} type={'email'} placeholder="Email address" />
            <br />
            <br />
            <input onChange={(e) => setpassword(e.target.value)} type={'password'} maxLength='11' placeholder="assword" />
            <br />
            <br />

            <button type='submit' onClick={gotohome}>Singup</button>
            <br />
            <br />


        </div>
    )
}

export default Signup