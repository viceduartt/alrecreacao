import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const logo = "logo.svg"
const whatsapp = "images/icons/whatsapp.svg"

function Header() {
	const tiggleMenu = () => {
		const btn = document.querySelector(".header-monu .container")

		if (btn.classList.contains("show") === true) {
			btn.classList.remove("show")
		} else {
			btn.classList.add("show")

		}
	}

	useGSAP(() => {
		const animaHeader = () => {
			const header = document.querySelector("header");
			const menu = document.querySelectorAll("header nav ul li a");
			const logo = document.querySelector(".logo-group img");
			const text_logo = document.querySelector(".logo-group span");


			gsap.set(text_logo, {
				opacity: 0
			})

			gsap.set(logo, {
				scale: 0.5,
				opacity: 0
			})

			gsap.set(menu, {
				y: -60,
				opacity: 0
			})

			const animaLogo = () => {


				gsap.to(text_logo, {
					duration: 1,
					opacity: 1,
				})



				gsap.to(logo, {
					duration: 1,
					opacity: 1,
					scale: 1,
				})
			}

			const animaMenu = () => {


				gsap.to(menu, {
					duration: 0.5,
					y: 0,
					opacity: 1,
					stagger: 0.2
				})
			}


			gsap.set(header, {
				y: -50,
				opacity: 0
			})

			gsap.to(header, {
				duration: 1.5,
				y: 0,
				opacity: 1,
				ease: "power2.out",
				onComplete: () => {
					animaLogo()
					animaMenu()
				}
			})
		}

		const configMenu = () => {
			const btn = document.querySelector(".header-monu .container")
			const icon = document.querySelector(".header-monu .container .img")
			const menu = document.querySelector(".header-mobile")
			const links = document.querySelectorAll(".header-mobile li")

			links.forEach((link) => {
				link.addEventListener("click", () => {
					btn.classList.remove("show")

					gsap.to(menu, {
						duration: 1,
						opacity: 0,
						backgroundColor: "#6e6e6e00",
						left: "50%",
					})

					gsap.to(".header-mobile nav ul", {
						duration: 1,
						opacity: 0
					})

					gsap.to(icon, {
						duration: 1,
						maskImage: "url('images/icons/menu.svg')"

					})
				})
			})

			gsap.to(menu, {
				opacity: 0
			})

			btn.addEventListener("click", () => {

				if (btn.classList.contains("show") === false) {
					gsap.to(menu, {
						duration: 1,
						opacity: 1,
						backgroundColor: "#fff",
						left: "0%",
					})

					gsap.to(".header-mobile nav ul", {
						duration: 1,
						opacity: 1
					})

					gsap.to(icon, {
						duration: 1,
						opacity: 1,
						maskImage: "url('images/icons/close.svg')"

					})

				} else {
					gsap.to(menu, {
						duration: 1,
						opacity: 0,
						backgroundColor: "#6e6e6e00",
						left: "50%",
					})

					gsap.to(".header-mobile nav ul", {
						duration: 1,
						opacity: 0
					})

					gsap.to(icon, {
						duration: 1,
						maskImage: "url('images/icons/menu.svg')"

					})
				}
			})
		}

		const t = setTimeout(() => {
			animaHeader()

			if (window.innerWidth <= 880) {

				configMenu()
			}

		}, 100);
	}, [])

	if (window.innerWidth <= 880) {
		return (
			<>
				<div className="header-monu">
					<div className="logo-group">
						<img src={logo} alt="" />
					</div>

					<div className="container" onClick={() => { tiggleMenu() }}>
						<div className="img"></div>
					</div>

				</div>

				<header className="header-mobile">


					<nav>
						<ul>
							<li><a className="link-header" href="#home">Inicio</a></li>
							<li><a className="link-header" href="#services">Serviços</a></li>
							<li><a className="link-header" href="#contact">Contato</a></li>

							<li><a href="https://wa.me/5531989475183?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20recreação!" className="whatsapp-header">
								<img src={whatsapp} alt="" />

								<span>Whatsapp</span>
							</a></li>

						</ul>
					</nav>
				</header>
			</>
		);
	} else {

		return (
			<header>
				<div className="logo-group">
					<img src={logo} alt="" />
					<span>AL Reacreção</span>
				</div>

				<nav>
					<ul>
						<li><a className="link-header" href="#home">Inicio</a></li>
						<li><a className="link-header" href="#services">Serviços</a></li>
						<li><a className="link-header" href="#contact">Contato</a></li>

						<li><a href="https://wa.me/5531989475183?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20recreação!" className="whatsapp-header">
							<img src={whatsapp} alt="" />

							<span>Whatsapp</span>
						</a></li>

					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
