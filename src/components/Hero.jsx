import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";




function Hero() {
   useGSAP(() => {
      const animaHero = () => {
         const slogan = document.querySelector(".slogan")

         const animaSlogan = () => {
            gsap.set(slogan, {
               opacity: 0,
               y: -30,
               scale: 0.6
            })
            gsap.to(slogan, {
               delay: 9,
               duration: 1,
               opacity: 1,
               y: 0,
               scale: 1
            })
         }

         const animaHeading = () => {
            gsap.registerPlugin(TextPlugin);

            if (window.innerWidth <= 620) {



               gsap.to("h1 .simple", {
                  delay: 0.2,
                  duration: 1,
                  text: "Celebrando a ",
                  onComplete: () => {
                     gsap.to("h1 .h-gradient", {
                        duration: 1.5,
                        text: "magia da infância",
                     });

                     gsap.to("h1 .h-gradient", {
                        duration: 1,
                        delay: 1.5,

                     })
                  }
               });

            } else {
               

               gsap.to("h1 .simple", {
                  delay: 0.2,
                  duration: 1,
                  text: "Celebrando a ",
                  onComplete: () => {
                     gsap.to("h1 .h-gradient", {
                        duration: 1.5,
                        text: "magia da <br /> infância",
                     });

                     gsap.to("h1 .h-gradient", {
                        duration: 1,
                        delay: 1.5,

                     })
                  }
               });
            }

         }

         const animaP = () => {
            const p = document.querySelector(".hero p")

            gsap.to(p, {
               duration: 4.5,
               delay: 2.3,
               text: "Resgatamos valores e a inocência das crianças através de brincadeiras, jogos e oficinas. Diversão com segurança e carinho em cada momento especial! 🎈"
            })
         }

         const animaBtn = () => {
            const btns = document.querySelectorAll(".group-btns a")
            const timeline = gsap.timeline()

            gsap.set(btns, {
               opacity: 0,
               scale: 0.5,
            })

            timeline.to(btns, {
               delay: 6.5,
               duration: 1,
               opacity: 1,
               stagger: 0.5,
               scale: 1
            })
         }

         const animaStatics = () => {
            const cards = document.querySelectorAll(".card-static")
            const timeline = gsap.timeline()

            gsap.set(cards, {
               opacity: 0,
               scale: 0.5,
            })

            timeline.to(cards, {
               delay: 7.5,
               duration: 1,
               opacity: 1,
               stagger: 0.2,
               scale: 1
            })
         }

         animaSlogan()
         animaHeading()
         animaP()
         animaBtn()
         animaStatics()

      }

      const t = setTimeout(() => {
         clearTimeout(t)

         animaHero()
      }, 500)
   }, [])

   return (
      <>
         <section className="hero" id="home">
            <div className="content">
               <div className="slogan">
                  <div className="group-img">
                     <div className="img"></div>
                  </div>
                  <h2>Recreação Pedagógica de Qualidade</h2>
               </div>

               <div className="action">
                  <div className="group-text">
                     <h1>
                        <span className="simple">
                        </span>

                        <span className="h-gradient"></span>
                     </h1>

                     <p ></p>
                  </div>

                  <div className="group-btns">
                     <a href="https://wa.me/5531989475183?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20recreação!" className="btn-whatsapp">

                        <div className="img"></div>

                        <span>Solicitar Orçamento</span>
                     </a>

                     <a href="#services" className="btn-services">
                        <span className="">Conhecer Serviços</span>
                     </a>

                  </div>
               </div>

               <div className="statics">
                  <div className="card-static c-events">
                     <div className="icon-ca"></div>

                     <span>+500 eventos realizados</span>
                  </div>

                  <div className="card-static c-team">
                     <div className="icon-ct"></div>


                     <span>Equipe capacitada</span>
                  </div>

                  <div className="card-static c-feadback">
                     <div className="icon-cf"></div>


                     <span>100% satisfação</span>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Hero;
