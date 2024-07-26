import React, { useState } from 'react';
// import style from '/SideNav.module.css';


function SideNav() {
    const [user, setUser] = useState('John Doe');

  return (
    <div>
        <div className='profile'>
            <img src='../assets/profile.png' alt='profile'/>
            <div className='info'>
                <p>{user}</p>
            </div>
        </div>

        {/* <Calender /> */}

        {/* <Notification /> */}

        {/* <Todo /> */}
    </div>
  )
}

export default SideNav