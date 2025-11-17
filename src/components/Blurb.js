import React, { useContext } from 'react';

function Blurb() {
    
    let newDate = new Date();
    const firstYearInBiz = 2003;

    return (
        // TODO add parallax when scrolling (blur, saturation, zoom)
        <div className='blurb'>
            <div className="blurb-text">
                <p>For {newDate.getFullYear() - firstYearInBiz} years, Ted has been providing quality entertainment in a variety of settings. He is well-versed in all genres of music, particularly in EDM, pop, rock, and Latin.<br></br><br></br>
                Whether it's a house party, baptism, quinceañera, or a wedding, you're sure to have an unforgettable time.</p>
            </div>
        </div>
    )
}

export default Blurb;
