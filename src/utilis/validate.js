
 const checkValidData = (email, password) => {
    
const isEmailValid =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if(!isEmailValid) return "Email Id is not valid";
if(!isPasswordValid) return "Passowrd is not valid";
return null;

};


export default checkValidData;