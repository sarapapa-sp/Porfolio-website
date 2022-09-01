import "./Intro.css";
import Me from "../../img/sun.png";
const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-left">
            <div className="left-wrapper">
                <h2 className="i-intro">Hello , my name is </h2>
                <h1 className="i-name">Shubham Pawar</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">
                            Backend Developer
                        </div>
                        <div className="i-title-item">
                            Full stack Developer
                        </div>
                        <div className="i-title-item">
                            Artificial intelligence
                        </div>
                        <div className="i-title-item">
                            Cyber Security
                        </div>
                        <div className="i-title-item">
                            Automation
                        </div>

                    </div>
                </div>
                <div className="i-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatibus dolorum dolore, dolorem qui totam nemo voluptate, enim praesentium consequatur eaque nam aspernatur modi repudiandae libero culpa, accusantium harum quam!
                </div>
            </div>
        </div>
        <div className="intro-right">
            <div className="i-right-bg">
                
            </div>
            <img className="i-right-img" src={Me} alt="" />
        </div>
    </div>
  )
}

export default Intro