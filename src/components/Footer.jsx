const logo = "logo.svg"

const whatsapp = "images/icons/whatsapp.svg"
const tikTok = "images/icons/tiktok.svg"
const instagram = "images/icons/instagram.svg"
const facebook = "images/icons/facebook.svg"

function Footer() {
   return (
      <>
         <footer>
            <div className="top">
               <div className="group-logo">
                  <img src={logo} alt="" />

                  <div className="group-text">
                     <span className="name">AL Recreação</span>
                     <span className="slogan">Celebrando a magia da infância</span>
                  </div>
               </div>

               <div className="list-links">
                  <a href="/">
                     <img src={whatsapp} alt="" />
                  </a>

                  <a href="/">
                     <img src={tikTok} alt="" />
                  </a>

                  <a href="/">
                     <img src={instagram} alt="" />
                  </a>

                  <a href="/">
                     <img src={facebook} alt="" />
                  </a>

               </div>

               <div className="group-info">
                  <span className="info-text">alrecreacao2021@gmail.com</span>
                  <span className="info-text">(31) 98947-5183</span>
               </div>
            </div>

            <div className="botton">
               <div className="group-text">
                  <span className="msg-public">Feito com ❤️ para celebrar momentos especiais</span>

                  <span className="copy">© 2026 AL Recreação. Todos os direitos reservados</span>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Footer;
