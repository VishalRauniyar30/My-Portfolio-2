import React from 'react'

const items = ['home', 'about','qualification', 'work', 'skills', 'testimonial', 'contact', 'footer']


const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {items.map((item, index) => (
                <a 
                    href={`#${item}`} 
                    key={item + index} 
                    className='app__navigation-dot'
                    style={ active === item ? { background : '#313BAC' } : {}}
                >
                    
                </a>
            ))}            
        </div>
    )
}

export default NavigationDots