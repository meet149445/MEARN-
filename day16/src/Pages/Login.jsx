import React,{useRef} from 'react'
import styles from './Home.module.css';


export default function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
const handleSubmit = (e) =>{
  e.preventDefault();
  const username = usernameRef.current.value;
  const password = passwordRef.current.value;
  console.log('Username : ',username);
  console.log('Password : ',password);
  //local stotrage
  localStorage.setItem('username',username);
  localStorage.setItem('password',password);

  //sesssion storage
  sessionStorage.setItem('username',username);
  sessionStorage.setItem('password',password);
};



const handleDelete = ()=>{
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  alert('Account deleted successfully!');
};
  return (
    <div>
           <section className={styles.login} id='login'>
        <h2>Login</h2>
        <br />
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className={styles.data}  ref={usernameRef}/>
          <input type="password" placeholder="Password" className={styles.data} ref={passwordRef}/>
          <button type="submit" className={styles.button} >Login</button>
        </form>
        <button type="button" className={styles.data} onClick={handleDelete}>Delete Account</button>
      </section>
    </div>
  )
}
