export default function NavBackground(props){
    const overrideScroll = `
        body {
            overflow:hidden;
        }
    `;
    const isMobile = props.isMobile;
    const hamburgerOpen = props.hamburgerOpen;

    if (isMobile && hamburgerOpen){
        return(
                <div className="nav-bg">
                    <span/>
                    <style>{overrideScroll}</style>
                </div>
            )
    }
    else{
        return(
                <div className="nav-bg-inactive">
                    <span/>
                </div>
            )
    }
}