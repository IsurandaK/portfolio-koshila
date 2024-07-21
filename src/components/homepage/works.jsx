import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./emojot.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Emojot (Pvt) Ltd</div>
							<div className="work-subtitle">
								Software Engineering - Internship
							</div>
							<div className="work-duration">Oct 2023 - Jan 2024</div>
						</div>

						<div className="work">
							<img
								src="./uor.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Faculty of Engineering, University of Ruhuna</div>
							<div className="work-subtitle">
								Student Instructor
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
