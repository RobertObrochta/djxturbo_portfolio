import React, { useEffect, useState } from 'react'

const Header = () => {    
    const title = "Tadeusz Obrochta";

    return (
        <header className='header'>
            <h1 className='name'>{title}</h1>       
        </header>
    )
}


export default Header
