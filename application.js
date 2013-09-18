$(document).ready(function(){
	$(".basearrow").hide();
	$(".higharrow").hide();
	$(".camparrow").hide();


$("#base").hover(function(){
	$(".basearrow").show();
	$("h2").replaceWith("<h1><span>Basecamp</span> is the project management tool you wish you had on your last project.</h1>");
	$("h5").replaceWith("<h5>Are you still managing projects with email? Are you still using excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team the modern way.</h5>"); 
},	
function(){
	$(".basearrow").hide();
	$("h1").replaceWith("<h2>Making collaboration productive and enjoyable for people every day.</h2>");
	$("h5").replaceWith("<h5>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h5>");
}
);

$("#high").hover(function(){
	$(".higharrow").show();
	$("h2").replaceWith("<h1><span>Highrise</span> remembers the important things about people you&apos;d normally forget.</h1>");
	$("h5").replaceWith("<h5>Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.</h5>");
},
function(){
	$(".higharrow").hide();
	$("h1").replaceWith("<h2>Making collaboration productive and enjoyable for people every day.</h2>");
	$("h5").replaceWith("<h5>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h5>");
}
);

$("#camp").hover(function(){
	$(".camparrow").show();
	$("h2").replaceWith("<h1>From near or far, <span>Campfire</span> helps teams work together over the web in real-time.</h1>");
	$("h5").replaceWith("<h5>Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It&apos;s game changing. We couldn&apos;t run our own business without Campfire.</h5>");
},
function(){
	$(".camparrow").hide();
	$("h1").replaceWith("<h2>Making collaboration productive and enjoyable for people every day.</h2>");
	$("h5").replaceWith("<h5>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h5>");
}
);

});

function dayDisplay(){			//To display the "Happy "Day"" greeting in top left
	var d=new Date();
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";

	var n = weekday[d.getDay()]; 
	return n;
}
