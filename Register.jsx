import {useState} from 'react';
import axios from 'axios';

const Register = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handlesSignup = async (e) =>{
        e.preventDefault();
        try{
            const res= await axios.post('http://localhost:3001/api/signup',(username,password));
            alert('Signup succesfull! Your ID: ' + res.data.userId);
              }catch (err){
            alert('Signup faild: ' + err.response.data);

           }
        };
    return(
        <div>
            <div className='Ngilo-user'>
                <div className='user-login'>
                <form onSubmit={handlesSignup}>
                    <label>Username</label>
                    <input type ="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type ="Password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </form>

                </div>
                
            </div>
         </div>
    )
    }

export default Register;