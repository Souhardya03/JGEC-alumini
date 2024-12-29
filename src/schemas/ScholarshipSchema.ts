import * as Yup from "yup";

export const ScholarshipSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	studentId: Yup.number()
		.max(11, "Must be 11 digits")
		.required("Required")
		.typeError("Student ID must be a number"),
	dob: Yup.number().required("Required"),
	contactHome: Yup.number()
		.max(10, "Must be 10 digits")
		.required("Required")
		.typeError("Must be a number"),
	contact: Yup.number()
		.max(10, "Must be 10 digits")
		.required("Required")
		.typeError("Must be a number"),
	numberofdirectfamilyMembers: Yup.number().required("Required"),
	fatherOccupation: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),
	totalEarningMembers: Yup.number().required("Required"),
	totalFamilyIncome: Yup.number().required("Required"),
	eachFamilyIncome: Yup.number().required("Required"),
	jgecIntakeYear: Yup.number()
		.max(4, "Must be 4 digits")
		.required("Required")
		.typeError("Passing Year must be a number"),
	extraCurricularActivities: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),
	percentHigherSecondary: Yup.number().required("Required"),
	gradeSemester1: Yup.number().required("Required"),
	gradeSemester2: Yup.number().required("Required"),
	gradeSemester3: Yup.number().required("Required"),
	gradeSemester4: Yup.number().required("Required"),
	gradeSemester5: Yup.number().required("Required"),
	average: Yup.number().required("Required"),
	message: Yup.string().required("Required"),
	department: Yup.string().required("Required"),
	residentialAddress: Yup.string().required("Required"),
	specialAchievement: Yup.string().required("Required"),
	jobCampusing: Yup.string().required("Required"),
});
