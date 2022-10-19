import './landingpage.scss'
import Band from '../images/band.png'
const landingpage = () => {
    return (
        <>
            <main className="landing-main sub-header">
                <div className="text-box">
                    <h1>Music for everyone</h1>
                    <p className='sub-title'>Music, once admitted to the soul,<br /> becomes a sort of spirit,and never dies  Ready? Let’s play.</p>
                   <a className='button' href="/Home">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Get Started
                   </a>
                </div>
                <div className='Band'>
                    <img src={Band} alt="" />
                </div>
                <div className="land-container">
                    <div className="box">
                        <div className="content">
                            <div className="icon">
                            </div>
                            <div className="text">
                                <h3>Play Music</h3>
                                <p>Where words fail, Music speaks</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div className="icon">
                            </div>
                            <div className="text">
                                <h3>Download Songs</h3>
                                <p>Play & Download music</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div className="icon">
                            </div>  
                            <div className="text">
                                <h3>Request songs</h3>
                                <p>Request your favorite Music in website Feeback</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default landingpage