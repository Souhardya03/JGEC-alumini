interface ScholarshipDetail {
	id: number;
	title: string;
	subtitle: string;
	description: string;
	provider: [
		{
			name: string;
			department: string;
			admissionYear: number;
			passingYear: number;
			details: string;
			imageUrl: string;
		}
	];
	whocanApply: string;
	AgeCriteria: string;
	amount: string;
	whentoApply: string;
}

export const ScholarshipDetails: ScholarshipDetail[] = [
	{
		id: 1,
		title:
			"CONFIDENT & PROFESSIONAL PERSONALITY SCHOLARSHIP is sponsored by Mr. Bibhas Bhowmik (JGEC, Civil 1981-85).",
		subtitle: "For 3rd year civil engineering students only",
		description:
			"To promote this noble initiative of Alumni Association among JGECian, Mr. BIbhas Bhowmik ( Graduated from JGEC, CE dept in 1985) has started a scholarship programme in the year 2013 for 3 rd year Civil Engineering students. Purpose of the alumni scholarship programme is to help meritorious students who need some financial assistance to achieve their career goal.",
		provider: [
			{
				name: "Bibhas Bhowmik",
				department: "Civil",
				admissionYear: 1981,
				passingYear: 1985,
				details:
					"Bibhas Bhowmik Graduated in 1985 and post graduated from IIT- Delhi in 1992 with Applied Mechanics and got affiliated membership From Institute of Structural Engineers (UK) in 1996. He worked with Premier Engineering Consultants in India, namely TATA- MAN, DCPL, C E S and EIL till 1995 and then worked with International Contracting and Consulting firms @ UAE and UK, Originated from UK and Netherland. Since past 11 years he is working with National Oil & Gas producing & operating Government organisations in Qatar and UAE as key Technical team member in their Major Projects with Billion + USD worth EPC value. Simultaneously he worked as part time Lecturer for Undergraduate Civil Engineering Degree Curriculum ,Conducted from British Centre of Applied Studies affiliated UK universities off campus units and taught Contracts Management , Structural Mechanics etc. Understanding critical structural scheme and facing challenging projects are Bibhas Bhowmik’s passion.",
				imageUrl:
					"https://jgecalum.org/public/site/images/scholarship/1711114478bibhas_bhowmik.jpg",
			},
		],
		whocanApply:
			"Only 3rd year Civil Engineering students are eligible to apply",
		AgeCriteria: "Age criteria is not applicable for this scholarship",
		amount:
			"INR 15,000 to one 3rd year civil engineering student. Additional one extra scholarship of same amount may be provided to second best selected student depending on candidate's profile and fund situation.",
		whentoApply: "Within 15 February Every year",
	},
];
