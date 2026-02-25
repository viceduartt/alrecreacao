import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const feedback = "images/feedbacks/1.svg"

const star = "images/icons/feedback.svg"

function Feedback() {
   useGSAP(() => {
      const animaFeedbacks = () => {
         const cards = document.querySelectorAll(".list-xards .feedback")
         const view = document.querySelector(".group-feedback")

         gsap.set(cards, {
            scale: 0.6,
            opacity: 0,
            backgroundColor: "#979797ff",

            y: "50%"
         })

         const obs = new IntersectionObserver((e) => {
            if (e[0].isIntersecting === true) {
               gsap.to(cards, {
                  duration: 0.5,
                  scale: 1,
                  opacity: 1,
                  y: "0%",
                  backgroundColor: "#ffffffff",
                  stagger: 0.5
               })
            } else {
               gsap.to(cards, {
                  scale: 0.6,
                  opacity: 0,
                  backgroundColor: "#979797ff",
                  y: "50%"
               })
            }
         })

         obs.observe(view)
      }

      const t = setTimeout(() => {
         animaFeedbacks()
      }, 500)
   }, [])
   return (
      <>
         <section className="feedback">
            <div className="content">
               <div className="group-heading-unique ">
                  <h3>Depoimentos</h3>

                  <div className="group-heading">

                     <h2>O que dizem sobre nós</h2>
                     <span>A satisfação dos nossos clientes é nossa maior recompensa</span>

                  </div>
               </div>

               <div className="group-feedback">
                  <div className="list-xards">
                     <div className="feedback">
                        <div className="group-stars">
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                        </div>


                        <div className="msg-profile">
                           <p>"A equipe foi incrível! As crianças se divertiram muito e nós, pais, pudemos aproveitar a festa com tranquilidade. Super recomendo!"</p>

                           <div className="group-profile">
                              <img src={feedback} alt="" />

                              <div className="text">
                                 <span className="name">Ana maria</span>

                                 <span className="type">Festa de Aniversário</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="feedback">
                        <div className="group-stars">
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                        </div>


                        <div className="msg-profile">
                           <p>"A equipe foi incrível! As crianças se divertiram muito e nós, pais, pudemos aproveitar a festa com tranquilidade. Super recomendo!"</p>

                           <div className="group-profile">
                              <img src={feedback} alt="" />

                              <div className="text">
                                 <span className="name">Ana maria</span>

                                 <span className="type">Festa de Aniversário</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="feedback">
                        <div className="group-stars">
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                           <img src={star} alt="" />
                        </div>


                        <div className="msg-profile">
                           <p>"A equipe foi incrível! As crianças se divertiram muito e nós, pais, pudemos aproveitar a festa com tranquilidade. Super recomendo!"</p>

                           <div className="group-profile">
                              <img src={feedback} alt="" />

                              <div className="text">
                                 <span className="name">Ana maria</span>

                                 <span className="type">Festa de Aniversário</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>

            </div>


         </section >
      </>
   )
}

export default Feedback;
