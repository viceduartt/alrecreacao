import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Differences() {
   useGSAP(() => {
      const animaCards = () => {
         const cards = document.querySelectorAll(".card-difference")
         const view = document.querySelector(".group-differences")

         gsap.set(cards, {
            scale: 0.6,
            opacity: 0,
            backgroundColor: "#979797ff",

            y: "100%"
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
                  duration: 0.5,
                  scale: 0.6,
                  opacity: 0,
                  y: "100%",
                  backgroundColor: "#979797ff",
                  stagger: 0.5
               })
            }
         })

         obs.observe(view)
      }

      const t = setTimeout(() => {
         clearTimeout(t)

         animaCards()
      }, 599)
   }, [])
   return (
      <>
         <section className="differences">
            <div className="content">
               <div className="group-heading-unique ">
                  <h3>Por que nos escolher?</h3>

                  <div className="group-heading">
                     <h2>Nossos Diferenciais</h2>
                     <span>Proporcionamos tranquilidade aos adultos e experiências inesqueciveis às crianças</span>
                  </div>
               </div>

               <div className="group-differences">
                  <div className="list-cards">
                     <div className="card-difference protection">
                        <div className="container">

                           <div className="img"></div>
                        </div>

                        <div className="text">
                           <h4>Segurança</h4>
                           <p>Ambiente seguro e supervisionado por profissionais treinados em primeiros socorros.</p>
                        </div>
                     </div>

                     <div className="card-difference heart">
                        <div className="container">
                           <div className="img"></div>


                        </div>

                        <div className="text">
                           <h4>Cuidado</h4>
                           <p>Atenção individualizada respeitando cada criança, sua faixa etária e necessidades.</p>
                        </div>
                     </div>

                     <div className="card-difference list">
                        <div className="container">
                           <div className="img"></div>


                        </div>

                        <div className="text">
                           <h4>Organização</h4>
                           <p>Atividades planejadas e cronograma estruturado para aproveitar cada momento.</p>
                        </div>
                     </div>

                     <div className="card-difference happy">
                        <div className="container">

                           <div className="img"></div>

                        </div>

                        <div className="text">
                           <h4>Diversão</h4>
                           <p>Brincadeiras criativas que encantam as crianças e criam memórias inesquecíveis.</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </section>
      </>
   )
}

export default Differences;
