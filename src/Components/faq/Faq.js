import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Faq.css'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { questions } from './data.js'
import Question from './Question.js'

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <section id="faq">
      <div className=" faq">
        <div className="faq-title" data-aos="fade-up">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>سوالات متدوال</h2>
          <p>پیشرو در سطح جهانی امنیت در همه پلتفرم هاسیستم پیام رسانی</p>
        </div>
        <div className="questions">
          {
            questions && questions.map((question) =>
              <Question key={question.id} title={question.title} answer={question.answer}
              />

            )
          }
        </div>
      </div>

    </section>
  )
}

export default Faq
