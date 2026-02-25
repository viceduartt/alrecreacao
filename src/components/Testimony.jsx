import { useGSAP } from "@gsap/react"
import gsap from "gsap"



function Testimony() {
   const configToggle = (e) => {
      if (e.classList.contains("active") === true) {
         e.classList.remove("active")
      } else {
         e.classList.add("active")
      }

      console.log(e)
   }


   useGSAP(() => {
      const configPLayer = () => {
         const players = document.querySelectorAll('.card-video .container')

         const configPlay = (btn_img, btn, feedback, player, bg, video) => {
            gsap.to(btn_img, {
               duration: 0.3,
               opacity: 0,
               onComplete: () => {
                  gsap.set(btn_img, {
                     width: "40%",
                     height: "46%",
                     top: "24%",
                     left: "36%",
                     maskImage: "url('images/icons/play.svg')"
                  })
                  gsap.to(btn_img, {
                     duration: 0.1,
                     opacity: 1,
                  })
               }
            })


            gsap.to(btn, {
               duration: 0.3,
               opacity: 1
            })

            gsap.to(video, {
               scale: 1,
               top: "-30%",
               duration: 0.4
            })


            gsap.to(player, {
               duration: 0.5,
               opacity: 1
            })

            gsap.to(feedback, {
               duration: 0.5,
               opacity: 1,
            })

            gsap.to(bg, {
               duration: 0.5,
               opacity: 1,
            })

         }

         const configPause = (btn_img, btn, feedback, player, bg, video) => {
            gsap.to(btn_img, {
               duration: 0.2,
               opacity: 0,
               onComplete: () => {
                  gsap.set(btn_img, {
                     width: "44%",
                     height: "45%",
                     top: "26%",
                     left: "30%",
                     maskImage: "url('images/icons/pause.svg')"
                  })
                  gsap.to(btn_img, {
                     duration: 0.3,
                     opacity: 1,
                  })
               }
            })

            gsap.to(btn, {
               duration: 0.3,
               opacity: 0
            })

            gsap.to(video, {
               scale: 0.6,
               duration: 0.7,
            })

            gsap.to(player, {
               duration: 0.5,
            })

            gsap.to(feedback, {
               duration: 0.5,
               opacity: 0,
            })

            gsap.to(bg, {
               duration: 0.5,
               opacity: 0,
            })
         }

         players.forEach((player) => {
            const btn_player_img = player.querySelector('.img')
            const btn = player.querySelector('.play')
            const video = player.parentElement.querySelector("video")
            const feedback = player.parentElement.querySelector(".feadback")
            const bg = player.parentElement.querySelector(".bg")

            player.addEventListener("mouseenter", () => {

               if (player.classList.contains("active") === true) {
                  gsap.to(btn, {
                     duration: 0.3,
                     opacity: 1
                  })
               } else {

                  gsap.to(video, {
                     scale: 0.6,
                     duration: 0.7,
                     top: "-60%"

                  })
               }



            })


            player.addEventListener("mouseleave", () => {

               if (player.classList.contains("active") === false) {



                  gsap.to(video, {
                     scale: 1,
                     top: "-30%",
                     duration: 0.7
                  })
               } else {
                  gsap.to(btn, {
                     duration: 0.3,
                     opacity: 0
                  })
               }
            })

            player.addEventListener("click", () => {


               if (player.classList.contains("active") === true) {
                  configPlay(btn_player_img, btn, feedback, player, bg, video)
                  video.pause()

               } else {
                  configPause(btn_player_img, btn, feedback, player, bg, video)
                  video.play()

               }

            })
         })

      }

      const animaCardsVideo = () => {
         const cardsVideos = document.querySelectorAll(".card-video")
         const view = document.querySelector(".group-videos")


         const animaFeedback = (type) => {
            const stars = document.querySelectorAll('.card-video .container-star .img')
            const textName = document.querySelectorAll('.card-video .group-message .name')
            const textType = document.querySelectorAll('.card-video .group-message .type')

            gsap.set(stars, {
               backgroundColor: "#fff",
               opacity: 0,
               y: "60%"
            })

            gsap.set(textName, {
               opacity: 0,
               y: "60%"
            })

            gsap.set(textType, {
               opacity: 0,
               y: "60%"
            })

            if (type === 0) {
               gsap.to(stars, {
                  duration: 0.5,
                  opacity: 1,
                  y: "0%",
                  stagger: 0.3,
                  backgroundColor: "#e2ce1f",
               })

               gsap.to(textName, {
                  delay: 2.5,

                  duration: 0.5,
                  opacity: 1,
                  y: "0%",
               })

               gsap.to(textType, {
                  delay: 2,
                  duration: 0.5,
                  opacity: 1,
                  y: "0%",
               })


            }

         }

         gsap.set(cardsVideos, {
            scale: 1,
            opacity: 0,
            y: "-10%"
         })

         const obs = new IntersectionObserver((event) => {


            if (event[0].isIntersecting === true) {
               gsap.to(cardsVideos, {
                  delay: 1,
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  stagger: 0.5
               })

               animaFeedback(0)
            } else {
               animaFeedback(1)
               gsap.to(cardsVideos, {
                  delay: 1,
                  scale: 0.5,
                  opacity: 0,
                  y: "10rem",
                  duration: 0.5,
                  stagger: 0.5
               })
            }
         })

         obs.observe(view)
      }

      const t = setTimeout(() => {
         clearTimeout(t)

         configPLayer()
         animaCardsVideo()
      }, 500);
   }, [])
   return (
      <>
         <section className="testimony">
            <div className="content">
               <div className="group-heading-unique ">
                  <h3>Histórias Reais</h3>

                  <div className="group-heading">
                     <h2>Veja o que nossos clientes dizem</h2>
                     <span>Depoimentos em vídeo de famílias que confiaram na AL Recreação</span>
                  </div>
               </div>

               <div className="group-videos">
                  <div className="list-video">
                     <div className="card-video">
                        <div className="preview">

                           <video src="videos/testimony/1.mp4"></video>
                           <div className="bg"></div>
                        </div>

                        <div className="container" onClick={(e) => { configToggle(e.target) }}>
                           <div className="play">
                              <div className="img"></div>

                           </div>
                        </div>

                        <div className="feadback">
                           <div className="group-stars">
                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>


                           </div>

                           <div className="group-message">
                              <span className="name">Victor Eduardo</span>

                              <span className="type">Recreação clinica</span>

                           </div>
                        </div>
                     </div>

                     <div className="card-video">
                        <div className="preview">

                           <video src="videos/testimony/2.mp4"></video>
                           <div className="bg"></div>

                        </div>

                        <div className="container" onClick={(e) => { configToggle(e.target) }}>
                           <div className="play">
                              <div className="img"></div>

                           </div>
                        </div>

                        <div className="feadback">
                           <div className="group-stars">
                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>


                           </div>

                           <div className="group-message">
                              <span className="name">Victor Eduardo</span>

                              <span className="type">Recreação clinica</span>

                           </div>
                        </div>
                     </div>

                     <div className="card-video">
                        <div className="preview">

                           <video src="videos/testimony/3.mp4"></video>
                           <div className="bg"></div>

                        </div>

                        <div className="container" onClick={(e) => { configToggle(e.target) }}>
                           <div className="play">
                              <div className="img"></div>

                           </div>
                        </div>

                        <div className="feadback">
                           <div className="group-stars">
                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>

                              <div className="container-star">
                                 <div className="img"></div>

                              </div>


                           </div>

                           <div className="group-message">
                              <span className="name">Victor Eduardo</span>

                              <span className="type">Recreação clinica</span>

                           </div>
                        </div>
                     </div>

                  </div>



               </div>
            </div>
         </section>

      </>
   )
}

export default Testimony;
