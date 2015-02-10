
var bio = {
	"name": "Andrew Godwin",
	"role": "Front-end web developer",
	"contactInfo": {
		"email": "andrew.godwin86@gmail.com",
		"twitter": "@AndrewGodwin86",
		"github": "AndrewGodwin86",
		"blog": "http://www.andrewrgodwin.com"
	},
	"pictureURL": "images/me.jpg",
	"welcomeMessage": "Hi, welcome to my resume!",
	"skills": ["Programming", "Maths", "JavaScript"]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
$("#topContacts").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
$("#topContacts").append(formattedBlog);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);




if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

var work = {
	"jobs": [
		{
			"employer": "GodwinConsulting.Net",
			"position": "Consultant",
			"workDates": "2008 - present",
			"workLocation": "London, UK",
			"description": "Carrying out various tasks including software audits, IT service assessments, web development."
		},
		{
			"employer": "Make Architects",
			"position": "Business and Information Systems Coordinator",
			"workDates": "Sept 2009 - May 2014",
			"workLocation": "London, UK",
			"description": "Responsible for managing and developing the business systems of the practice, including Intranet, DAM system etc."
		},
		{
			"employer": "Northumbria Universities Officer Training Corps, British Army",
			"position": "Office Cadet",
			"workDates": "2007-2009",
			"workLocation": "Newcastle, UK",
			"description": "Section commander, leading groups of 8-10 cadets in training operations"
		}
	]
};

function displayWork() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		$(".work-entry:last").append(formattedEmployer+formattedJobTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].workDates);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].workLocation);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

var education = {
	"schools": [
		{
			"schoolName": "Newcastle University",
			"schoolDates": "2005-2009",
			"schoolDegree": "MMath (Hons)",
			"schoolLocation": "Newcastle-upon-Tyne, UK",
			"schoolMajor": ["Mathematics"]
		}
	],
	"onlineCourses": [
		{
			"onlineSchool": "Udacity",
			"onlineTitle": "Front end web developer Nanodegree",
			"onlineDates": "Present"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Personal website",
			"dates": "2014",
			"description": "Design and development of my blog",
			"images": []
		},
		{
			"title": "Paper-Stories.com",
			"dates": "2014",
			"description": "Development and build of portfolio and blog site",
			"images": []
		}
	]
}



/*




$("#header").append(formattedBlog);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);
*/

