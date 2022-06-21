import React, { useState, useEffect } from "react";
// import {FiChevronRight, FiChevronLeft } from 'react-icons/fi';

// import { FaBeer, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';




function Slider() {
	const [people, setPeople] = useState(1);
	const [index, setIndex] = useState(0);

	useEffect(()=>{
		const lastIndex = people.length -1;
		if(index < 0){
			setIndex =(lastIndex);
		}
		if(index > lastIndex){
			setIndex(0);
		}
	}, [index, people]);

	useEffect(()=>{
		let slider = setInterval(()=>{
			setIndex(index +1);
		}, 3000);
		return () => clearInterval(slider);
	},[index])

	return (
		[
			<section>Slider Project</section>,
			<section className="wrapper">
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					let position = 'nextSlide';
					if(personIndex === index){
						position = 'activeSlide';
					}
					if(personIndex === index -1 || (index === 0 && personIndex === people.length -1))
					{
						position = 'lastSlide';
					}
					return (
						<article className={"slider-wrapper " + position} key={id}>
							<div className="img-fluid">
								<img src={image} alt="" />
							</div>
							<div className="info">
								<h4 style={{ textTransform: "uppercase" }}>{name}</h4>
								<span style={{ textTransform: "capitalize" }}> {title}</span>
								<p>{quote}</p>
							</div>

						</article>
					);

				})}

			</section>,
			<button className="prev" onClick={()=> { setIndex(index -1)}}><FaChevronLeft className="icon"></FaChevronLeft> Previous</button>,
			<button className="next" onClick={()=> {setIndex(index +1)}}>Next <FaChevronRight className="icon"></FaChevronRight></button>,

		]
	);

}

export default Slider;
