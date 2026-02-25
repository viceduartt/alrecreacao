import Header from "./Header";
import Hero from "./Hero";
import Testimony from "./Testimony";
import Differences from "./Differences";
import Contact from "./Contact";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Services from "./Services";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
	useGSAP(() => {
		const animaLoading = () => {
			gsap.to(".loading", {
				duration: 2,
				opacity: 0
			})
		}

		const animaHeadings = () => {
			const groupsHeading = document.querySelectorAll(".group-heading-unique ")

			const animation = (event) => {
				const e = event[0].target
				const h3 = e.querySelector("h3")
				const h2 = e.querySelector("h2")
				const p = e.querySelector("span")

				if (event[0].isIntersecting === true) {
					gsap.to(h3, {
						duration: 1,
						opacity: 1,
						y: 0,
						scale: 1.3,
						onComplete: () => {

							gsap.to(h2, {
								duration: 0.5,
								opacity: 1,
								y: 0,
								onComplete: () => {

									gsap.to(p, {
										duration: 0.5,
										opacity: 1,
									})
								}
							})
						}
					})

					gsap.set(h3, {
						opacity: 0,
						y: -60
					})

					gsap.set(h2, {
						opacity: 0,
						y: -60
					})

					gsap.set(p, {
						opacity: 0,
					})
				} else {
					gsap.to(h3, {
						duration: 1,
						opacity: 0,
						y: -60,
						onComplete: () => {

							gsap.to(h2, {
								duration: 0.5,
								opacity: 0,
								y: -60,
								onComplete: () => {

									gsap.to(p, {
										duration: 0.5,
										opacity: 0,
									})
								}
							})
						}
					})
				}
			}

			const obs = new IntersectionObserver(animation, {

			})


			groupsHeading.forEach((groupHeading) => {
				obs.observe(groupHeading)
			})
		}

		const t = setTimeout(() => {
			animaLoading()
			animaHeadings()
		}, 500)
	}, [])
	return (
		<>
			<div className="loading"></div>
			<Header></Header>

			<main className="home">

				<Hero></Hero>
				<Testimony></Testimony>
				<Differences></Differences>
				<Services></Services>
				<Feedback></Feedback>
				<Contact></Contact>
			</main>

			<Footer></Footer>
		</>
	)
}

export default Home;
