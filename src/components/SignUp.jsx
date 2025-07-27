import React from 'react'

function SignUp({ signup, login }) {

    const { isSignup, setSignup } = signup;
    const { isLogin, setLogin } = login;

    return (
        <section className='SignUp' onClick={(e) => { e.stopPropagation(); setSignup(false); }}>
            <article className="signup-section" onClick={(e) => { e.stopPropagation(); }}>
                <h1>Sign-up</h1>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="uname">Username</label>
                    <input type="text" name="username" id="uname" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button className='btn'>Sign-Up</button>
                <p>Already have an account? <button onClick={() => { setLogin(true); setSignup(false) }}>Log-In</button></p>
            </article>
        </section>
    )
}

export default SignUp
