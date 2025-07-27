import React from 'react'

function LogIn({ login, signup }) {
    const { isLogin, setLogin } = login;
    const { isSignup, setSignup } = signup;
    return (
        <section className='LogIn' onClick={(e) => { e.stopPropagation(); setLogin(false); }}>
            <article className="login-section" onClick={(e) => { e.stopPropagation(); }}>
                <h1>LogIn</h1>
                <div>
                    <label htmlFor="uname">username</label>
                    <input type="text" name="username" id="uname" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" id="password" />
                </div>
                <button className='btn'>LogIn</button>
                <p>Don't have an account? <button onClick={() => { setSignup(true); setLogin(false) }}>Sign-Up</button></p>
            </article>
        </section>
    )
}

export default LogIn;
