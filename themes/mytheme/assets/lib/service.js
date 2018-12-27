$(document).ready(function() {
			var ul = document.getElementById("solution");
			var list = ul.querySelectorAll('li');
			for(var i = 0; i < list.length; i++) {
				list[i].index = i;
			}
			var content = [{
					"title": "McKinsey AutoMate",
					"content": {
						"description": "Intelligent process automation ",
						"contact": [
							{
								"src":"./assets/image/ourPeople/people11.jpg",
								"one":"Pascal Bornet",
								"two":"Expert AP",
								"three":"Singapore"
							},
							{
								"src":"./assets/image/ourPeople/people13.jpg",
								"one":"Thierry Chesnais",
								"two":"Partner",
								"three":"Hongkong"
							}
						]
					}
				},
				{
					"title": "DigiMET",
					"content": {
						"description": "Operators tracking",
						"contact": [
							{
								"src":"./assets/image/ourPeople/people21.jpg",
								"one":"David Zhu",
								"two":"Expert AP",
								"three":"Shanghai"
							}
						]
					}
				},
				{
					"title": "DPM",
					"content": {
						"description": "KPI integration ",
						"contact": [
							{
								"src":"./assets/image/ourPeople/people21.jpg",
								"one":"David Zhu",
								"two":"Expert AP",
								"three":"Shanghai"
							}
						]
					}
				},
				{
					"title": "digiTS Kinaxis",
					"content": {
						"description": "Supply/ demand planning",
						"contact": [
							{
								"src":"./assets/image/ourPeople/people53.jpg",
								"one":"Judy Xu",
								"two":"Junior Specialist",
								"three":"Shanghai"
							},
							{
								"src":"./assets/image/ourPeople/people48.jpg",
								"one":"Chester Sun",
								"two":"Junior Specialist",
								"three":"Shanghai"
							}
						]
					}
				},
				{
					"title": "SC Designer",
					"content": {
						"description": "Network planning",
						"contact": [
							{
								"src":"./assets/image/ourPeople/people49.jpg",
								"one":"Darren Wu",
								"two":"IoT analyst",
								"three":"Shanghai"
							}
						]
					}
				},
				{
					"title": "X-ray",
					"content": {
						"description": "Structured spend cube",
						"contact": [
							
						]
					}
				},
				{
					"title": "eCleansheet ",
					"content": {
						"description": "Cost analysis",
						"contact": [
							
						]
					}
				},
				{
					"title": "eRfx ",
					"content": {
						"description": "RFO/ RFI management",
						"contact": [
							
						]
					}
				},
				{
					"title": "R&D Productivity Navigator",
					"content": {
						"description": "ROI improvement",
						"contact": [
							{
								"src":"./assets/image/ourPeople/people40.jpg",
								"one":"Elia Berteletti",
								"two":"Expert AP",
								"three":"Taipei"
							},
							{
								"src":"./assets/image/ourPeople/people62.png",
								"one":"Ohad Kotler",
								"two":"Engagement Manager",
								"three":"Amsterdam"
							}
						]
					}
				},
				{
					"title": "Numetrics",
					"content": {
						"description": "SW resource planning",
						"contact": [
							{
								"src":"./assets/image/ourPeople/people38.jpg",
								"one":"André Rocha",
								"two":"Partner",
								"three":"Tokyo"
							},
							{
								"src":"./assets/image/ourPeople/people63.png",
								"one":"Shannon Johnston",
								"two":"Expert",
								"three":" Toronto"
							}
						]
					}
				},
				{
					"title": "DDS",
					"content": {
						"description": "Sales resource and activity planning",
						"contact": [
							{
								"src":"./assets/image/ourPeople/people64.png",
								"one":"Christian Koestler",
								"two":"Head of client experience& communication",
								"three":"Vienna"
							}
						]
					}
				},
				{
					"title": "Rep Planner",
					"content": {
						"description": "Sales resource and activity planning",
						"contact": [
							{
								"src":"./assets/image/ourPeople/people65.png",
								"one":"Erik Kristjanson",
								"two":"Specialist",
								"three":"San Francisco"
							}
						]
					}
				}
			];
			//      	alert(content[0].automation.description);
			$(".tab-btn").on("click", function() {
				if($(this).hasClass("curr-tab")) {
					return false;
				} else {
					$(this).addClass("curr-tab").siblings(".tab-btn").removeClass("curr-tab");
					$(".content-" + $(this).index()).removeClass("hide-content").siblings(".tab-content").addClass("hide-content");
				}
			});
			$(".read-more").on("click", function() {
				if($(this).hasClass("expended")) {
					$(this).removeClass("expended").children(".text").text("Read more");
					$(this).parent(".tab-content").css({ "height": "215px" });
				} else {
					$(this).addClass("expended").children(".text").text("Slider up");
					$(this).parent(".tab-content").css({ "height": "auto" });
				}
			});
			

			$(".slide-mark").on("click", function() {
				if($(this).hasClass("expended")) {
					$(this).parent(".slide-box").css({ "width": "145px" }).children(".more-mark").hide();
					$(this).removeClass("expended");
				} else {
					$(this).parent(".slide-box").css({ "width": "100%" }).children(".more-mark").show();
					$(this).addClass("expended");
				}
			});
			ul.addEventListener('click',function(e){
				document.getElementById("content").innerHTML="";
				console.log(e.target.index);
				document.getElementById("mod-inner-content").innerHTML = content[e.target.index].content.description;
				
				for(var n = 0; n < content[e.target.index].content.contact.length; n++){
					document.getElementById("content").innerHTML += " <div class='list-item cv'> <img src=' "
					 + content[e.target.index].content.contact[n].src+" ' alt='People' srcset=''> <h3 class='name_tanchu'> "  
					+	content[e.target.index].content.contact[n].one +" </h3><h4 class='loca_tanchu'>  " 
					+	content[e.target.index].content.contact[n].two+"</h4> <h4 class='loca_tanchu'>"
					+	content[e.target.index].content.contact[n].three+"</h4></div>"					
				}
				console.log(document.getElementById("content").html);
				layer.open({
					type: 1,
					title: content[e.target.index].title,
					maxWidth: '1000px',
					area: '800px',
					content: $('#mod-div'),
					end: function() {
						$('#mod-div').hide()
					}
				});
				//              layer.open({
				//                  type: 1,
				//                  title: "",
				//                  area: ["1100px","700px"],
				//                  content: $("#mod-div"),
				//                  cancel: function(index, layero){
				//                      layer.close(index)
				//                      $("#mod-div").hide();
				//                      return false;
				//                  }
				//              });
			});
		});