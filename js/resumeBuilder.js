var bio = {
	"name": "Andrew Godwin",
	"role": "Front-end web developer",
	"contactInfo": {
		"email": "andrew.godwin86@gmail.com",
		"twitter": "AndrewGodwin86",
		"github": "AndrewGodwin86",
		"blog": "http://www.andrewrgodwin.com",
		"location": "Teddington, UK"
	},
	"pictureURL": "images/me.jpg",
	"welcomeMessage": "Hi, welcome to my resume!",
	"skills": ["Programming", "Maths", "JavaScript"]
};

bio.display = function(){

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace(/%data%/g, bio.contactInfo.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contactInfo.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contactInfo.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedBlog = HTMLblog.replace(/%data%/g, bio.contactInfo.blog);
	$("#topContacts").append(formattedBlog);
	$("#footerContacts").append(formattedBlog);

	var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	$("#header").prepend(formattedPic);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}
bio.display();


var work = {
	"jobs": [
		{
			"employer": "GodwinConsulting.Net",
			"position": "Consultant",
			"url": "http://www.godwinconsulting.net",
			"workDates": "2008 - present",
			"location": "London, UK",
			"description": "Carrying out various tasks including software audits, IT service assessments, web development."
		},
		{
			"employer": "Make Architects",
			"position": "Business and Information Systems Coordinator",
			"url": "http://www.makearchitects.com",
			"workDates": "Sept 2009 - May 2014",
			"location": "London, UK",
			"description": "Responsible for managing and developing the business systems of the practice, including Intranet, DAM system, ERP system. Research and development into new technologies."
		},
		{
			"employer": "Northumbrian Universities Officer Training Corps, British Army",
			"position": "Officer Cadet",
			"url": "http://www.army.mod.uk/UOTC/30765.aspx",
			"workDates": "2007-2009",
			"location": "Newcastle-upon-Tyne, UK",
			"description": "Section commander, leading groups of 8-10 cadets in training operations"
		}
	]
};

work.display = function() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("#", work.jobs[job].url).replace("%data%", work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		$(".work-entry:last").append(formattedEmployer+formattedJobTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].workDates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

var projects = {
	"projects": [
		{
			"title": "Personal website",
			"dates": "2014",
			"description": "Design and development of my blog",
			"url": "http://www.andrewrgodwin.com",
			"images": []
		},
		{
			"title": "Paper-Stories.com",
			"dates": "2014",
			"description": "Development and build of portfolio and blog site",
			"url": "http://www.paper-stories.com",
			"images": ["images/Project1-1.jpg"]
		}
	]
};

projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("#", projects.projects[project].url).replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
projects.display();

var education = {
	"schools": [
		{
			"schoolName": "Newcastle University",
			"url": "http://www.newcastle.ac.uk",
			"dates": "2005-2009",
			"degree": "MMath (Hons)",
			"location": "Newcastle-upon-Tyne, UK",
			"major": ["Mathematics"]
		}
	],
	"onlineCourses": [
		{
			"onlineSchool": "Udacity",
			"onlineTitle": "Front end web developer Nanodegree",
			"onlineDates": "Present",
			"onlineURL": "https://www.udacity.com/course/nd001"
		}
	]
};

education.display = function(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedName = HTMLschoolName.replace("#", education.schools[school].url).replace("%data%", education.schools[school].schoolName);
		$(".education-entry:last").append(formattedName+formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[0]);
		$(".education-entry:last").append(formattedMajor);
	}

	if (education.onlineCourses){

		$("#education").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("#", education.onlineCourses[course].onlineURL).replace("%data%", education.onlineCourses[course].onlineTitle);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].onlineSchool);
			$(".education-entry:last").append(formattedTitle+formattedSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].onlineDates);
			$(".education-entry:last").append(formattedDates);

			var formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[course].onlineURL).replace("%data%", education.onlineCourses[course].onlineURL);
			$(".education-entry:last").append(formattedURL);
		}
	}
}
education.display();


// Add Google Map
$("#mapDiv").append(googleMap);


