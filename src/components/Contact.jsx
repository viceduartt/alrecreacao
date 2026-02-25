import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const logo = "logo.svg"
const whatsapp = "images/icons/whatsapp.svg"
const addensa = "images/icons/addensa.svg"
const phone = "images/icons/phone.svg"
const email = "images/icons/email.svg"
const send = "images/icons/send.svg"

function Contact() {
   useGSAP(() => {
      const animaContact = () => {
         const cards = document.querySelectorAll(".content .card")

         gsap.set(cards, {
            scale: 0.8,
            opacity: 0,

            y: "20%"
         })

         const obs = new IntersectionObserver((e) => {
            if (e[0].isIntersecting === true) {
               gsap.to(cards, {
                  duration: 1,
                  scale: 1,
                  opacity: 1,
                  y: "0%",
                  stagger: 0.5
               })
            } else {
               gsap.to(cards, {
                  scale: 0.8,
                  opacity: 0,
                  y: "20%"
               })
            }
         })

         cards.forEach((card) => {
            obs.observe(card)
         })
      }

      const t = setTimeout(() => {
         animaContact()
      }, 500)
   }, [])
   return (
      <>
         <section className="contact" id="contact">
            <div className="content">
               <div className="group-heading-unique ">
                  <h3>Vamos conversar</h3>

                  <div className="group-heading">

                     <h2>Entre em Contato</h2>
                     <span>Solicite seu orçamento sem compromisso! Estamos prontos para tornar seu evento especial.</span>
                  </div>
               </div>

               <div className="group-links-whatsapp">
                  <div className="card-links card">
                     <h4>Informações de Contato</h4>

                     <div className="list-contact-info">
                        <a href="https://wa.me/5531989475183?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20recreação!" className="contact-link whatsapp">

                           <div className="group">

                              <div className="container">
                                 <div className="img whatsapp"></div>

                              </div>

                              <div className="group-text">
                                 <span className="type">Whatsapp</span>

                                 <span className="msg">(31) 98947-5183</span>
                              </div>
                           </div>
                        </a>

                        <button href="" className="contact-link phone">
                           <div className="group">

                              <div className="container">
                                 <div className="img phone"></div>

                              </div>

                              <div className="group-text">
                                 <span className="type cel">Telefone</span>


                                 <span className="msg">(31) 98947-5183</span>
                              </div>
                           </div>
                        </button>

                        <a href="mailto:alrecreacao2021@gmail.com" className="contact-link email">
                           <div className="group">

                              <div className="container">
                                 <div className="img email"></div>
                              </div>

                              <div className="group-text">
                                 <span className="type">Email</span>

                                 <span className="msg">alrecreacao2021@gmail.com</span>
                              </div>
                           </div>
                        </a>

                        <a href="#" className="contact-link addens">
                           <div className="group">

                              <div className="container">
                                 <div className="img addens"></div>

                              </div>

                              <div className="group-text">
                                 <span className="type">Endereço</span>

                                 <span className="msg">Belo Horizonte e região</span>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>

                  <div className="card-whatsapp card">
                     <div className="container">

                        <img className="whatsapp" src={whatsapp} alt="" />
                     </div>

                     <div className="group-text">
                        <h4>Fale conosco pelo WhatsApp</h4>
                        <p>Resposta rápida! Tire suas dúvidas e solicite orçamento de forma prática.</p>

                        <a href="https://wa.me/5531989475183?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20recreação!" className="btn-whatsapp">
                           <div className="img"></div>
                           <span>Iniciar Conversa</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Contact;
