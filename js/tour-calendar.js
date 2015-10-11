(function ($) {
	
	$.fn.tourcalendar = function (options) {
		
		// Event Model
		// var data = {
		// 	title: "Monetizing Applications",
		// 	startTime: "18:00",
		// 	endTime: "19:00",
		// 	date: new Date(),
		// 	description: "Learn more about how you can make your applicaiton work for you.",
		// 	venue: "135 Beggers Street, Pretoria, Gauteng, 0002",
		// 	position: "left",
		// 	action: "http://www.google.com"
		// };
		
		// Default Options
		var settings = $.extend({
			data: []
		}, options );
		
		return this.each( function () {
			
			// Initialize table with a body
			$(this).html("<tbody></tbody>");
			
			// Main table body
			var body = $(this).children('tbody');
			
			// Store all rendered dates
			var existing = [];
			
			for (var x = 0; x < settings.data.length; x++) {
				
				if(x == 0){
					body.append(createRow(settings.data[x]));
				}
								
				if(existing.indexOf(settings.data[x].date.toString()) == -1 && x !== 0){
					body.append(createRow(settings.data[x]));
				}else if(x !== 0){
					var el = $(body).children('tr[data-tc-date="' + settings.data[x].date.toString() + '"]');
					if(settings.data[x].position == "left"){
						$(el).children('td.tc-left').append(createCard(settings.data[x]));
					}else if(settings.data[x].position == "right"){
						$(el).children('td.tc-right').append(createCard(settings.data[x]));
					}
				}
				
				existing.push(settings.data[x].date.toString());
			}				
		});		
	}
	
	function createRow(data){		
		var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		var content = "";
		
		if(data.position == "left"){	
			content =
			'<tr data-tc-date="' + data.date + '">'
				+ '<td class="tc-left">'
					+ createCard(data)
				+ '</td>'
				+ '<td class="tc-middle">'
					+ '<div class="tc-date">'
						+ data.date.getDate() + '<br />'
						+ months[data.date.getMonth()].substring(0, 3)
					+ '</div>'
				+ '</td>'
				+ '<td class="tc-right">'
					+ '<div class="tc-card-empty"></div>'
				+ '</td>'
			+ '</tr>';		
		}if(data.position == "right"){	
			content =
			'<tr data-tc-date="' + data.date + '">'
				+ '<td class="tc-left">'
					+ '<div class="tc-card-empty"></div>'
				+ '</td>'
				+ '<td class="tc-middle">'
					+ '<div class="tc-date">'
						+ data.date.getDate() + '<br />'
						+ months[data.date.getMonth()].substring(0, 3)
					+ '</div>'
				+ '</td>'
				+ '<td class="tc-right">'
					+ createCard(data)
				+ '</td>'
			+ '</tr>';		
		}
		return content;
	}
	
	function createCard(data){
		var content = "";		
		switch (data.position) {
			case "left":			
				content =
					'<div class="tc-card">'
						+ '<span class="tc-pull-right">' + data.startTime + ' - ' + data.endTime + '</span>'
						+ '<h5>' + data.title + '</h5>'
						+ '<p class="tc-description">'
							+ data.description
						+ '</p>'
						+ '<p class="tc-venue">'
							+ '<strong>Venue:</strong> ' + data.venue
						+ '</p>'
						+ '<div class="tc-book">'
							+ '<a href="' + data.action + '">Book</a>'
						+ '</div>'
					+ '</div>';			
				break;
			case "right":
				content = 
					'<div class="tc-card">'
						+ '<span class="tc-pull-right">' + data.startTime + ' - ' + data.endTime + '</span>'
						+ '<h5>' + data.title + '</h5>'
						+ '<p class="tc-description">'
							+ data.description
						+ '</p>'
						+ '<p class="tc-venue">'
							+ '<strong>Venue:</strong> ' + data.venue
						+ '</p>'
						+ '<div class="tc-book">'
							+ '<a href="' + data.action + '">Book</a>'
						+ '</div>'
					+ '</div>';		
				break;
		}
		
		return content;
	}
	
}(jQuery));