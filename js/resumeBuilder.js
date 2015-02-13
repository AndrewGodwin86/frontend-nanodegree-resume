/* Bio */
var bio = {
	"name": "Andrew Godwin",
	"role": "Front-end web developer",
	"contacts": {
		"mobile": "+44 7999 123456",
		"email": "andrew.godwin86@gmail.com",
		"twitter": "AndrewGodwin86",
		"github": "AndrewGodwin86",
		"blog": "http://www.andrewrgodwin.com",
		"location": "Teddington, UK"
	},
	"welcomeMessage": "<p>I’m a technologist, programmer, content creator, mathematician and part-time rock star. I’ve developed, managed and worked on a huge variety of technology projects over the years. These have ranged from websites and iOS applications to Intranets, DAM applications, ERP systems and many, many more.</p><br><p>I’ve spent a great deal of time rapidly experimenting and developing with cutting edge technologies, creating engaging and dynamic user experiences and content to set businesses apart from their competitors.</p>",
	"skills": ["Programming", "Maths", "JavaScript", "Project Management", "Web Design", "Video Direction and Editing", "Information Management", "IT Strategy"],
	"biopic": "images/me.jpg",
	"display": function() {
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$(".header").append(formattedPic);

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$(".header").append(formattedName);

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$(".header").append(formattedRole);

		$(".header").append(HTMLtopContacts);

		var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);

		var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);

		var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);

		var formattedBlog = HTMLblog.replace(/%data%/g, bio.contacts.blog);
		$("#topContacts").append(formattedBlog);
		$("#footerContacts").append(formattedBlog);

		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$(".about-content").append(formattedWelcomeMsg);

		if (bio.skills.length > 0) {
			$(".about-content").append(HTMLskillsStart);
			for(skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

bio.display();

/* Work */
var work = {
	"jobs": [
		{
			"employer": "GodwinConsulting.Net",
			"title": "Consultant",
			"location": "London, UK",
			"dates": "2008 - present",
			"description": "Carrying out various tasks including software audits, IT service assessments, web development.",
			"url": "http://www.godwinconsulting.net"
		},
		{
			"employer": "Make Architects",
			"title": "Business and Information Systems Coordinator",
			"location": "Fitzrovia, UK",
			"dates": "Sept 2009 - May 2014",
			"description": "Responsible for managing and developing the business systems of the practice, including Intranet, DAM system, ERP system. Research and development into new technologies.",
			"url": "http://www.makearchitects.com"
		},
		{
			"employer": "Northumbrian Universities Officer Training Corps, British Army",
			"title": "Officer Cadet",
			"location": "Newcastle-upon-Tyne, UK",
			"dates": "2007-2009",
			"description": "Section commander, leading groups of 8-10 cadets in training operations",
			"url": "http://www.army.mod.uk/UOTC/30765.aspx"
		}
	],
	"display": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("#", work.jobs[job].url).replace("%data%", work.jobs[job].employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$(".work-entry:last").append(formattedEmployer+formattedJobTitle);

			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedWorkDates);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};
work.display();

/* Projects */
var projects = {
	"projects": [
		{
			"title": "Personal website",
			"dates": "2014",
			"description": "Design and development of my blog. Based on Wordpress, it uses the Roots.io framework which integrates Bootstrap into a Wordpress theme.",
			"images": [],
			"url": "http://www.andrewrgodwin.com"
		},
		{
			"title": "Paper-Stories.com",
			"dates": "2014",
			"description": "Development and build of portfolio and blog site for artist Kalliopi Kousouri",
			"images": ["images/Project1-1.jpg"],
			"url": "http://www.paper-stories.com"
		},
		{
			"title": "Ecobuild Cinema Film | Make Architects",
			"dates": "2014",
			"description": "In Make's words: <br>\"Exploring the concept of recycling through distinctive design, materiality and construction technique, Make Architects created a unique cinema for the Regeneration Film Festival. <br>The cinema took two days to construct on site, with over 1,200 pieces of reclaimed cardboard being tied together.\"<br>I shot and edited this film using GoPro Hero 3+ cameras.",
			"images": [],
			"url": "https://www.youtube.com/watch?v=oPoNYtPThBQ",
			"embedData": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/oPoNYtPThBQ\" frameborder=\"0\" allowfullscreen></iframe>"
		}
	],
	"display": function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("#", projects.projects[project].url).replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if(projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
			$(".project-entry:last").append(projects.projects[project].embedData);
		}
	}
};
projects.display();

/* Education */
var education = {
	"schools": [
		{
			"name": "Newcastle University",
			"location": "Newcastle-upon-Tyne, UK",
			"degree": "MMath (Hons)",
			"majors": ["Mathematics"],
			"dates": 2009,
			"url": "http://www.newcastle.ac.uk"

		}
	],
	"onlineCourses": [
		{
			"title": "Front end web developer Nanodegree",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/nd001"
		}
	],
	"display": function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedName = HTMLschoolName.replace("#", education.schools[school].url).replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedName+formattedDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
			$(".education-entry:last").append(formattedMajor);
		}

		if (education.onlineCourses) {

			$("#education").append(HTMLonlineClasses);

			for (course in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);

				var formattedTitle = HTMLonlineTitle.replace("#", education.onlineCourses[course].url).replace("%data%", education.onlineCourses[course].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				$(".education-entry:last").append(formattedTitle+formattedSchool);

				var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				$(".education-entry:last").append(formattedDate);

				var formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[course].url).replace("%data%", education.onlineCourses[course].url);
				$(".education-entry:last").append(formattedURL);
			}
		}
	}
};
education.display();

// Google Map
$(".map-container").append(googleMap);


