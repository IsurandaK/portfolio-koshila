import React from "react";
import publicationImage_1 from './publications/publication_1.png';
import publicationImage_2 from './publications/publication_2.png';

function article_1() {
	return {
		date: "3 July 2024",
		title: "Aspect-Based Sentiment Analysis Techniques: A Comparative Study",
		description:
			"Since the dawn of the digitalisation era, customer feedback and online reviews are unequivocally major sources of insights for businesses. Consequently, conducting comparative analyses of such sources has become the de facto modus operandi of any business that wishes to give itself a competitive edge over its peers and improve customer loyalty. Sentiment analysis is one such method instrumental in gauging public interest, exposing market trends, and analysing competitors.",
		keywords: [
			"Aspect-Based Sentiment Analysis Techniques: A Comparative Study",
			"Koshila",
			"Koshila Isuranda",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid blue;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Click below to read the paper</div>
						<a href="https://arxiv.org/pdf/2407.02834" target="_blank" rel="noopener noreferrer">
							<img
							src={publicationImage_1}
							alt="publication"
							className="randImage"
							/>
					</a>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "20 March 2024",
		title: "“GradesGo”-A Comprehensive Practical Framework for Calculating Grade One Admission Marks",
		description:
			"\"GradesGO\" is a comprehensive approach to the grade 1 admission mark calculation process in government schools. It aims to streamline operations, reduce paperwork, and enhance transparency.",
		keywords: [
			"GradesGo",
			"Koshila",
			"Koshila Isuranda",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid blue;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Click below to read the paper</div>
						<a href="https://scholar.google.com/scholar?cluster=4603733225395364291&hl=en&oi=scholarr" target="_blank" rel="noopener noreferrer">
							<img
							src={publicationImage_2}
							alt="publication"
							className="randImage"
							/>
					</a>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
