import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Styling/modalForm.css'
Modal.setAppElement('#root');


const InputForm = ({setCloseModal}) => {

    const [userName, setUserName] = useState('') 
    const [userEmail, setUserEmail] = useState('') 
    const [userBirth, setUserBirth] = useState('') 
    const [userColour, setUserColour] = useState('') 
    const [userSalary, setUserSalary] = useState(null) 
    const [falseValidate, setFalseValidate] = useState(false)
  
    function submitForm() {
      if (userName === '' || userBirth === '' || userColour === '' || userEmail === '') {
        console.log('here')
        setFalseValidate(true)
      } else {
          setFalseValidate(false)
        console.log('User Details Confirmed')
        console.log(userName)
        console.log(userEmail)
        console.log(userBirth)
        console.log(userColour)
        console.log(userSalary)
      }
      setCloseModal()
    }
  
  return (
        <div className="inputForm">
            <form>
                <input title='Name' placeholder='Name' onChange={(text) => setUserName(text)} />
                <input title='Email' placeholder='Email' onChange={(text) => setUserEmail(text)} />
                <input title='Birth' placeholder='Date of Birth' onChange={(text) => setUserBirth(text)} />
                <input title='Colour' placeholder='Favourite  Colour' onChange={(text) => setUserColour(text)} />
                <div>
                    <input type="range" className="custom-range" min="0" max="50000" 
                    onChange={(event) => setUserSalary(event.target.value)} />
                    <span>Salary : {userSalary}</span>
                </div>               
                <div className="rangeDisplay"></div>
            </form>
            <div className='formBottom'>
                {falseValidate ? <div><span className='validationAlert'>Please Enter All Inputs, Thank You</span></div> : null}
                <button className='submitFormButtom' onClick={() => submitForm()}>Submit</button>
            </div>
        </div>
  );
}

export default InputForm;