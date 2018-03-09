/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('homepage', {
	title: 'Course Organizer',
		pageHeader: {
			title: 'Course Organizer',
			strapline: 'Tool for remembering all your classes' },
		courses: [{
			number: 'CBEN-402',
			name: ' Senior Design',
			professor: ' -Barankin'
		},{
			number: 'CBEN-403',
			name: ' Process',
			professor: ' -Saminuik'
		}]
	});
};

/* GET 'Location info' page */
module.exports.seniorInfo = function(req, res) {
    res.render('course-info', {
	title: 'CBEN-402 Senior Design',
		pageHeader: {
			title: 'CBEN-402 Senior Design',
			professor: ' -Barankin',
			credits: '3.0',
			time: '11am MWF'
		},
		assignments: [{
			name: 'Progress report',
			due: 'March 16th',
			points: '50pts',
			status: 'in progress'
		},{
			name: 'Presentation',
			due: 'March 24th',
			points: '100pts',
			status: 'not started'
		}]
	});
};

module.exports.processInfo = function(req, res) {
    res.render('course-info', {
	title: 'CBEN-403 Process',
		pageHeader: {
			title: 'CBEN-403 Process',
			professor: ' -Saminuik',
			credits: '3.0',
			time: '2pm MWF'
		},
		assignments: [{
			name: 'HW #7',
			due: 'April 1st',
			points: '56pts',
			status: 'in progress'
		},{
			name: 'Exam #2',
			due: 'April 14th',
			points: '100pts',
			status: 'not started'
		}]
	});
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('addAssignment', {
	title: 'Add Assignment',
		pageHeader: {
			title: 'Add Assignment for CBEN-402'}
	});
};