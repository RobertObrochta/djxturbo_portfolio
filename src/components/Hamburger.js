export default function Hamburger({isOpen}){
    // x
    if (isOpen){
        return(
                <div className="hamburger hamburger-close">
                    <span />
                    <span />
                    <span/>
                </div>
            )
    }

    // burger itself
    else{
          return(
                <div className="hamburger">
                    <span />
                    <span />
                    <span/>
                </div>
            )
    }
   
}