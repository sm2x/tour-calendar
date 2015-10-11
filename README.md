### Welcome to Tour Calendar
The Tour Calendar plugin is ideal for bands, events, etc. that need to represent their tour dates in an elegent horizontal timeline view.

### Getting Started

* Download the zip
* Clone the repo
* Bower `$ bower install tour-calendar`

### What's in the download?
The download includes the css, sass and a sample page illustrating how to use the plugin.

    Tour-Calendar/
    ├── index.html
    ├── css/
    │   └── tour-calendar.css
    ├── js/
    │   └── tour-calendar.js
    │   └── jquery-2.1.4.js
    ├── sass/
    │   └── tour-calendar.scss
    └── img/
        └── pin-gray.png

### Usage

Below is a screenshot of what the calendar looks like when it is running.

![Tour Calendar Snapshot](https://pbs.twimg.com/media/CRDbh_DWgAUUFH5.png:large)

    <script type="text/javascript">
						
		var events = [];
		
		events.push({
			title: "The Shins",
			startTime: "12:54",
			endTime: "23:34",
			date: new Date(2015, 9, 11),
			description: "Come watch the unforgetable and unmissable for only one night!",
			venue: "135 Beggers Street, Pretoria, Gauteng, 0002",
			position: "left",
			action: "http://www.google.com"
		});
		
		events.push({
			title: "Yeah Yeah Yeahs",
			startTime: "23:54",
			endTime: "12:45",
			date: new Date(2015, 9, 11),
			description: "Come watch the unforgetable and unmissable for only one night!",
			venue: "135 Beggers Street, Pretoria, Gauteng, 0002",
			position: "right",
			action: "http://www.google.com"
		});
		
		events.push({
			title: "Years & Years",
			startTime: "23:34",
			endTime: "12:54",
			date: new Date(2015, 9, 13),
			description: "Come watch the unforgetable and unmissable for only one night!",
			venue: "135 Beggers Street, Pretoria, Gauteng, 0002",
			position: "left",
			action: "http://www.google.com"
		});
		
		events.push({
			title: "Thumpers",
			startTime: "03:04",
			endTime: "23:95",
			date: new Date(2015, 9, 14),
			description: "Come watch the unforgetable and unmissable for only one night!",
			venue: "135 Beggers Street, Pretoria, Gauteng, 0002",
			position: "right",
			action: "http://www.google.com"
		});
		
		events.push({
			title: "Bon Iver",
			startTime: "23:43",
			endTime: "10:00",
			date: new Date(2015, 9, 14),
			description: "Come watch the unforgetable and unmissable for only one night!",
			venue: "135 Beggers Street, Pretoria, Gauteng, 0002",
			position: "right",
			action: "http://www.google.com"
		});
		
		$("#timeline").tourcalendar({
			data: events
		});
			
	</script>

### Browser Support

* Chrome Latest

### License

All parts of Skeleton are free to use and abuse under the MIT license.

    The MIT License (MIT)
    
    Copyright (c) [year] [fullname]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

### Authors and Contributors
This project is created and maintained by Mazi Muhlari (@MaziMuhlari) in 2015.

### Support or Contact
Having trouble with Pages? Create a new github issue or send your questions to [Mazi Muhlari on Twitter](https://twitter.com/MaziMuhlari) and we’ll help you sort it out.
