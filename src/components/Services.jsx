import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const img1 = "images/recreacao_crista/01.svg"
const img2 = "images/recreacao_crista/02.svg"
const img3 = "images/recreacao_crista/03.svg"
const img4 = "images/recreacao_crista/04.svg"
const img5 = "images/recreacao_crista/11.svg"
const img6 = "images/recreacao_crista/06.svg"
const img7 = "images/recreacao_crista/07.svg"
const img8 = "images/recreacao_crista/08.svg"
const img9 = "images/recreacao_crista/09.svg"
const img10 = "images/recreacao_crista/10.svg"



function Services() {
   useGSAP(() => {
      const animaServices = () => {
         const cards = document.querySelectorAll(".card-service")
         const view = document.querySelector(".group-services")

         gsap.set(cards, {
            scale: 0.6,
            opacity: 0,
            backgroundColor: "#979797ff",

            y: "10%"
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
            }
         })

         obs.observe(view)
      }

      const t = setTimeout(() => {
         clearTimeout(t)

         animaServices()
      }, 500)
   }, [])

   if (window.innerWidth <= 800) {

      return (
         <>
            <section className="services" id="services">
               <div className="bg-blur">

                  <div className="window-images">

                     <div className="header">
                        <div className="group-text-close">

                           <div className="group-text">

                              <h5>Festas de Aniversario</h5>
                              <p>Animação completa com brincadeiras, jogos e muita diversão para tornar o dia especial inesquecível.</p>
                           </div>

                           <button className="btn-close">
                              <div className="img"></div>
                           </button>
                        </div>
                     </div>

                     <div className="group-imgs">

                        <div className="img-focus">
                           <img src={img1} alt="" />
                        </div>

                        <div className="list-images">
                           <img src={img1} className="img-carrosel" id="img_1" alt="" />
                           <img src={img1} className="img-carrosel" id="img_2" alt="" />
                           <img src={img1} className="img-carrosel" id="img_3" alt="" />
                           <img src={img1} className="img-carrosel" id="img_4" alt="" />
                           <img src={img1} className="img-carrosel" id="img_5" alt="" />
                           <img src={img1} className="img-carrosel" id="img_6" alt="" />
                           <img src={img1} className="img-carrosel" id="img_7" alt="" />
                        </div>
                     </div>

                  </div>
               </div>

               <div className="content">
                  <div className="group-heading-unique ">
                     <h3>O que oferecemos</h3>

                     <div className="group-heading">
                        <h2>Nossos Serviços</h2>
                        <span>Soluções completas de recreação para todo tipo de evento e celebração</span>
                     </div>
                  </div>


                  <div className="group-services">
                     <div className="list-services">
                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img7} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Festas de Aniversario</h4>
                              <p>Animação completa com brincadeiras, jogos e muita diversão para tornar o dia especial inesquecível.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img4} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação em Restaurante</h4>
                              <p>Momentos animados com jogos e atividades divertidas para transformar a experiência em família em algo leve e inesquecível.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img5} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação em Eventos</h4>
                              <p>Dinâmicas criativas e muita interação para garantir energia, alegria e experiências marcantes em qualquer ocasião.</p>
                           </div>
                        </div>
                     </div>

                     <div className="list-services">
                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img6} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Cerimonial</h4>
                              <p>Entretenimento organizado e acolhedor para envolver convidados e tornar cada celebração ainda mais especial.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img1} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação em Set de Gravação</h4>
                              <p>Atividades estratégicas e descontraídas para manter o clima leve, produtivo e cheio de boas vibrações.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img2} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Escolar</h4>
                              <p>Brincadeiras educativas e interativas que estimulam aprendizado, cooperação e desenvolvimento com diversão.</p>
                           </div>
                        </div>
                     </div>

                     <div className="list-services">
                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img3} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Personalizada</h4>
                              <p>Experiências sob medida com jogos e dinâmicas adaptadas para criar momentos únicos e memoráveis.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img9} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Clínica e Hospitalar</h4>
                              <p>Atividades sensíveis e acolhedoras que promovem alegria, conforto e bem-estar em ambientes de cuidado.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img8} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Colônia de Férias</h4>
                              <p>Programação vibrante com jogos, oficinas e aventuras que transformam o período de férias em pura diversão.</p>
                           </div>
                        </div>
                     </div>

                     <div className="list-services">
                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img10} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Cristã</h4>
                              <p>Dinâmicas inspiradoras com valores, integração e alegria para fortalecer vínculos e criar momentos significativos.</p>
                           </div>
                        </div>
                     </div>


                  </div>
               </div>
            </section>
         </>
      );
   } else {
      return (
         <>
            <section className="services" id="services">
               <div className="bg-blur">

                  <div className="window-images">

                     <div className="header">
                        <div className="group-text-close">

                           <div className="group-text">

                              <h5>Festas de Aniversario</h5>
                              <p>Animação completa com brincadeiras, jogos e muita diversão para tornar o dia especial inesquecível.</p>
                           </div>

                           <button className="btn-close">
                              <div className="img"></div>
                           </button>
                        </div>
                     </div>

                     <div className="group-imgs">

                        <div className="img-focus">
                           <img src={img1} alt="" />
                        </div>

                        <div className="list-images">
                           <img src={img1} className="img-carrosel" id="img_1" alt="" />
                           <img src={img1} className="img-carrosel" id="img_2" alt="" />
                           <img src={img1} className="img-carrosel" id="img_3" alt="" />
                           <img src={img1} className="img-carrosel" id="img_4" alt="" />
                           <img src={img1} className="img-carrosel" id="img_5" alt="" />
                           <img src={img1} className="img-carrosel" id="img_6" alt="" />
                           <img src={img1} className="img-carrosel" id="img_7" alt="" />
                        </div>
                     </div>

                  </div>
               </div>

               <div className="content">
                  <div className="group-heading-unique ">
                     <h3>O que oferecemos</h3>

                     <div className="group-heading">
                        <h2>Nossos Serviços</h2>
                        <span>Soluções completas de recreação para todo tipo de evento e celebração</span>
                     </div>
                  </div>

                  <div className="group-services">
                     <div className="list-services">
                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img7} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Festas de Aniversario</h4>
                              <p>Animação completa com brincadeiras, jogos e muita diversão para tornar o dia especial inesquecível.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img4} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação em Restaurante</h4>
                              <p>Momentos animados com jogos e atividades divertidas para transformar a experiência em família em algo leve e inesquecível.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img5} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação em Eventos</h4>
                              <p>Dinâmicas criativas e muita interação para garantir energia, alegria e experiências marcantes em qualquer ocasião.</p>
                           </div>
                        </div>
                     </div>

                     <div className="list-services">
                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img6} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Cerimonial</h4>
                              <p>Entretenimento organizado e acolhedor para envolver convidados e tornar cada celebração ainda mais especial.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img1} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação em Set de Gravação</h4>
                              <p>Atividades estratégicas e descontraídas para manter o clima leve, produtivo e cheio de boas vibrações.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img2} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Escolar</h4>
                              <p>Brincadeiras educativas e interativas que estimulam aprendizado, cooperação e desenvolvimento com diversão.</p>
                           </div>
                        </div>
                     </div>

                     <div className="list-services">
                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img3} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Personalizada</h4>
                              <p>Experiências sob medida com jogos e dinâmicas adaptadas para criar momentos únicos e memoráveis.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img9} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Clínica e Hospitalar</h4>
                              <p>Atividades sensíveis e acolhedoras que promovem alegria, conforto e bem-estar em ambientes de cuidado.</p>
                           </div>
                        </div>

                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img8} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Colônia de Férias</h4>
                              <p>Programação vibrante com jogos, oficinas e aventuras que transformam o período de férias em pura diversão.</p>
                           </div>
                        </div>
                     </div>

                     <div className="list-services">
                        <div className="card-service">
                           <div className="image">
                              <div className="container">

                                 <img className="preview" src={img10} alt="Logo" />
                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Recreação Cristã</h4>
                              <p>Dinâmicas inspiradoras com valores, integração e alegria para fortalecer vínculos e criar momentos significativos.</p>
                           </div>
                        </div>

                        <div className="card-service off">
                           <div className="image">
                              <div className="container">

                                 <div className="preview"></div>

                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Festas de Aniversario</h4>
                              <p>Animação completa com brincadeiras, jogos e muita diversão para tornar o dia especial inesquecível.</p>
                           </div>
                        </div>

                        <div className="card-service off">
                           <div className="image">
                              <div className="container">

                                 <div className="preview"></div>

                                 <div className="bg"></div>
                              </div>

                              <div className="container-btn">

                                 <button className="show-images">
                                    <div className="img"></div>

                                    <span>Ver Galeria</span>
                                 </button>
                              </div>

                           </div>


                           <div className="group-text">
                              <h4>Festas de Aniversario</h4>
                              <p>Animação completa com brincadeiras, jogos e muita diversão para tornar o dia especial inesquecível.</p>
                           </div>
                        </div>
                     </div>


                  </div>
               </div>
            </section>
         </>
      );
   }
}

export default Services;
