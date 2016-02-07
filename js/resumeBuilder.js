var work = {
	"jobs": [
	{
		"employer" : "ADT",
		"title" : "Technical Sales Representative",
		"location" : "Boulder, CO",
		"dates" : "February 2016 - present",
		"description" : []
	},
	{
		"employer" : "Setpoint Systems",
		"title" : "Technical Sales Engineer",
		"location" : "Denver, CO",
		"dates" : "August 2014 - October 2015",
		"description" : ["Created and delivered technical presentations for 12 " + 
				"engineering firms and 3 building owners to educate customers and " + 
				"address concerns related to Building Automation Systems (BAS) for " + 
				"Direct Digital Controls.", "Secured over $1M for Plan and " + 
				"Specification jobs and brought in ~$5M in Design-Build opportunities " + 
				"by independently estimating over $9M in New Construction BAS bids."
				]
	},
	{
		"employer" : "Ingersoll Rand (Trane)",
		"title" : "Marketing Engineer",
		"location" : "La Crosse, WI",
		"dates" : "June 2012 - July 2014",
		"description" : ["Led technical product presentations with engineers and " +
				"building owners to troubleshoot issues and increase likelihood of " +
				"obtaining strategic engagements.", "Created product " + 
				"requirements documentation for the future generation of packaged " +
				"chiller controls with input from customer interviews and surveys.",
				"Beta tested software iterations to identify bugs and prioritize their " +
				"remediation, and helped create internal software testing methodologies.",
				"Hosted international visitors to build relationships with customers and " +
				"ensure satisfaction with the integrity of Trane products and services.",
				"Improved project bids through use of Build of Material Optimization " + 
				"to increase the likelihood of obtaining strategic engagements."
				]


	},
	{	"employer" : "3M",
		"title" : "Engineering Technical Aide",
		"location" : "St. Paul, MN",
		"dates" : "July 2010 - May 2012",
		"description": [ "Analyzed and organized test data using uncertainty analysis,"+
				" linear regression, and error propagation for reports within an ISO " +
				"certified quality management system." , "Determined material investment" +
				" and research opportunities by investigating the structural properties " + 
				"of both standard and prototype materials; quantified results and " + 
				"presented recommendations."]
	}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "Web Portfolio",
		"titleURL"	: "https://github.com/mitchwa1/Udacity-Front-End-ND-P1-PortfolioSite.git",
		"dates" : "January 2016 - present",
		"description" : ["Project 1 - Udacity Front-End NanoDegree.  I built a 'mock-portfolio' " +
				"including a google maps API using Polymer to show locations of where I have lived"],
		"images" : ["images/Project1.png"]
	},
	{
		"title" : "Mechanical Engineering Capstone - Lung Biopsy Needle",
		"titleURL"	: "http://www.mdc.umn.edu/",
		"dates" : "2012",
		"description" : ["Collaborated with a team of six individuals to design and " +
		 		"prototype an innovative lung biopsy needle that resulted in two University " +
		 		"Invention disclosures." , "Directed five customer interviews with medical " + 
		 		"professionals to validate product ideation and receive continuous "
		 		+ " feedback during the development process."],
		"images" : []
	}
	]
};

var bio = {
	"name" : "Mitch Andrus",
	"role" : "Front-End Web Developer",
	"contacts" : {
		"mobile": "867-5309",
		"email" : "<a class='cust-links' href=mailto:Mitchw543@gmail.com>Mitchw543@gmail.com</a>",
		"linkedIn" : "<a class='cust-links' href=https://www.linkedin.com/in/mitchandrus target='_blank'>Mitch Andrus</a>",
		"github" : "<a class='cust-links' href=https://github.com/mitchwa1 target='_blank'>Mitchwa1</a>",
		"location" : "<a class='cust-links' href=https://www.google.com/search?q=denver+colorado&oq=denver+colorado&aqs=chrome.0.69i59j69i65j69i60j69i64j69i60.2445j0j1&sourceid=chrome&es_sm=119&ie=UTF-8 target='_blank'>Denver, CO</a>"
	},
	"picture" : "images/Me.jpg",
	"welcomeMessage" : "Passionate about delivering a consistent and high-quality" +
	" customer experience, improving product offerings, and continuous learning.",
	"skills" : [ 
		"Front-End Development", "HTML CSS JavaScript", "Technical Sales", "Business Development", "Mountaineering"
	]
};

var education = {
	"schools": [
	{
		"name" : "University of Minnesota, Twin Cities",
		"location" : "Minneapolis, MN",
		"degree" : "B.S.",
		"majors" : ["Mechanical Engineering"],
		"dates" : "2012",
		"url" : "http://me.umn.edu/index.shtml",
		"activities" : ["American Society of Mechanical Engineers (ASME)" ,
		"National Organization for Business & Engineering (NOBE)" ,
		"Minnesota Space Grant Consortium (NASA)"]
	},
	],
	"onlineCourses": [
	{
		"title" : "Front-End NanoDegree",
		"school" : "Udacity",
		"dates" : "January 2016 - present",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
		"description" : "Taking various courses focused on Front-End design using HTML, CSS and JavaScript " +
				"- with the end goal to build six portfolio projects using responsive design optimized " +
				"for security and performance."
	},
	{
		"title" : "JavaScript: Understanding the Weird Parts",
		"school" : "UDemy",
		"dates" : "December 2015",
		"url" : "https://www.udemy.com/understand-javascript/",
		"description" : "JavaScript course focused on: Scope, closures, prototypes, 'this', " + 
				"build your own framework, ES6 and more."
	},
	{
		"title" : "Coding Exercises",
		"school" : "Code Wars",
		"dates" : "November 2015 - present",
		"url" : "http://www.codewars.com/users/mitchwa1",
		"description" : "Completing various exercises in order to challenge my coding ability."
	},
	{
		"title" : "Various Courses",
		"school" : "Code Academy",
		"dates" : "September 2015 - present",
		"url" : "https://www.codecademy.com/learn/all",
		"description" : "Command Line, Learn SQL, Python, HTML & CSS, JavaScript, jQuery, AngularJS."
	}
	]
};

var volunteering = {
	"projects" : [
	{
		"title" : "Reading Partners",
		"titleURL"	: "http://readingpartners.org/location/colorado/",
		"dates" : "November 2015 - present",
		"description" : ["Mentor to a young student, volunteering 2-4 hrs/week " + 
				"during the academic year."],
		"images" : []
	} ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

/**
* Make bio.name to internationalized.
* The last name will be all-uppercased, and the first name will be
* capitalized.
*/
function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() +
  name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork() {
  	if(work.jobs.length > 0) {
	
		//$("#workExperience").append(HTMLworkStart);

		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedTitle =  HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployer =  HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedDates =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation =  HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWork =  formattedEmployer + formattedTitle + formattedDates + formattedLocation; // misssing + formattedDescription
			$(".work-entry:last").append(formattedWork);
			$(".work-entry:last").append(HTMLworkDescriptionStart);
			for (var role = 0; role < work.jobs[job].description.length; role ++) {
				var formattedDescription =  HTMLworkDescription.replace("%data%", work.jobs[job].description[role]);
				$(".work-description:last").append(formattedDescription);
		  }
		}

	}
}

displayWork();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#",projects.projects[i].titleURL);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(HTMLprojectDescriptionStart);

			for (var role = 0; role < projects.projects[i].description.length; role ++) {
				var formattedDescription =  HTMLprojectDescription.replace("%data%", projects.projects[i].description[role]);
				$(".project-description:last").append(formattedDescription);
			}
			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			
			for (var role = 0; role < education.schools[i].activities.length; role ++) {
				var formattedSchoolActivities =  HTMLschoolActivities.replace("%data%", education.schools[i].activities[role]);
				$(".education-entry:last").append(formattedSchoolActivities);
		  }
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				/* $(".education-entry:last").append(formattedOnlineURL); //I just put URL in title link */
				$(".education-entry:last").append(HTMLonlineDescriptionStart);

				var formattedOnlineDescription =  HTMLonlineDescription.replace("%data%", education.onlineCourses[i].description);
				$(".education-entry:last").append(formattedOnlineDescription);
			}
		}
		
	}
}

education.display();

volunteering.display = function() {
	if(volunteering.projects.length > 0) {
		for(i in volunteering.projects) {
			$("#volunteering").append(HTMLvolunteeringStart);

			var formattedVolunteeringTitle = HTMLvolunteeringTitle.replace("%data%", volunteering.projects[i].title).replace("#",volunteering.projects[i].titleURL);
			var formattedVolunteeringDates = HTMLvolunteeringDates.replace("%data%", volunteering.projects[i].dates);

			$(".volunteering-entry:last").append(formattedVolunteeringTitle);
			$(".volunteering-entry:last").append(formattedVolunteeringDates);
			$(".volunteering-entry:last").append(HTMLvolunteeringDescriptionStart);

			for (var role = 0; role < volunteering.projects[i].description.length; role ++) {
				var formattedVolunteeringDescription =  HTMLvolunteeringDescription.replace("%data%", volunteering.projects[i].description[role]);
				$(".volunteering-description:last").append(formattedVolunteeringDescription);
			}
			for(img in volunteering.projects[i].images) {
				var formattedVolunteeringImage = HTMLvolunteeringImage.replace("%data%", volunteering.projects[i].images[img]);
				$(".volunteering-entry:last").append(formattedProjectImage);
			}
		}
	}
}

volunteering.display();
// Add the internationalization button to the bottom of the page.
$('#main').append(internationalizeButton);
//google map
$("#mapDiv").append(googleMap);