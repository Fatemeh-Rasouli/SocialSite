import React, { useEffect } from 'react'
import phoneHeader from '../../assets/phone-header-bg.png'
import './Header.css'
import { BsMouse } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Header = () => {
  useEffect(() => {
      AOS.init({
    duration:1000
  });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-right" data-aos="fade-right">
          <h1>
            <span>پیشرو در سطح جهانی</span>
            <span> امنیت در همه پلتفرم ها</span>
            <span>سیستم پیام رسانی </span>
          </h1>
          <p>امنیت اطلاعات و داده‌های شما اولویت اصلی ماست. سیستم‌های ما به‌صورت کامل محافظت شده و در تمامی پلتفرم‌ها، از موبایل تا دسکتاپ، امنیتی بی‌نقص را تضمین می‌کنند.</p>
          <div className="header-btn">
            <a href="" className="btn btn-dark">بیاین شروع کنیم</a>
            <a href="" className="btn btn-light">چجوری کار میکنیم</a>
          </div>
        </div>
        <div className="header-left" data-aos="fade-left">
          <img src={phoneHeader} alt="" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#featurs">
          <BsMouse color={"#fff"} size={25} className="mouse"/>
        </a>
      </div>

    </section>
  )
}

export default Header
