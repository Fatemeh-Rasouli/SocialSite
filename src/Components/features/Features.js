import React ,{useEffect}from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import './Features.css'
import phoneFeaturs from '../../assets/phone-features.png'
import { featuresList } from './data.js'
import { BsHexagon } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
        AOS.init({
      duration:1000
    });
    }, []);
  return (
    <section id="featurs">
      <div className="container features">
        <div className="title"data-aos="fade-up">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>ویژیگی های اصلی</h2>
          <p>سیستم‌های ما به‌صورت کامل محافظت شده و در تمامی پلتفرم‌ها، از موبایل تا دسکتاپ، امنیتی بی‌نقص را تضمین می‌کنند.</p>
        </div>
        <div className="featurs-content">
          <div className="featurs-right" data-aos="fade-right">
            <img src={phoneFeaturs} alt="" />
          </div>
          <div className="featurs-left"data-aos="fade-left">
            {
              
                featuresList.map(feature => {
                  console.log(feature.heading); 
                  return (
                    <div className="feature" key={feature.id}>
                      <div className="feature-icon">
                        <BsHexagon color="#fc5412" size={55} />
                        <div className="inner-icon">{feature.icon}</div>
                      </div>
                      <div className="feature-text">
                        <h2>{feature.heading}</h2>
                        <p>{feature.text}</p>
                      </div>
                    </div>
                  )
                })
            }
          </div>
        </div>
      </div>
    </section>

  )
}

export default Features
