/* Parameters
    Time or Date as a single string, or update as separate Hour, Min, Sec etc
*/

const padzero = (num, places) => String(num).padStart(places, '0')

function setValue(field, value) {
    fld = document.getElementById(field);
    if (fld != null) {
        fld.innerHTML = value;
    }
}

function showDateTime() {	
	var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
	var dayNames = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    
    var now = new Date()
    
    // Raw output
    setValue("dtstringfull", now.toString());
	
	h = padzero(now.getHours(), 2);
	m = padzero(now.getMinutes(), 2);
    s = padzero(now.getSeconds(), 2);
    // ampm = (h < 12) ? "AM" : "PM";
	
    // Time
    setValue("hour", h);
	setValue("min", m);
    setValue("sec", s);
    // setValue("ampm", ampm);
    setValue("timestring", `${h}:${m}:${s}`); 

	var y = now.getYear();
	if (y < 1000) {y = y + 1900; }


    // daynum = padzero(now.getDate(), 2);
    daynum = now.getDate();
    var suffix = "xx";
    if (daynum%10==1) {
        suffix = "st"
    } else if (daynum%10==2) {
        suffix = "nd"
    } else if (daynum%10==3) {
        suffix = "rd"
    } else {
        suffix = "th";
    }

    var y2 = now.getYear()-100;
    var m2 = now.getMonth()+1;
    var digit_dt = h + ":" + m + ":" + s + "   " + daynum + "/" + m2 + "/" + y2;
    setValue("dtstring", digit_dt);
    
    // Date
    setValue("year", y);	
    setValue("month", monthNames[now.getMonth()]);
    setValue("daynum", daynum);
    setValue("suffix", suffix);
    setValue("dayname", dayNames[now.getDay()]);
    
}

function mbDigitalClock() {
	showDateTime();
	setTimeout("mbDigitalClock()", 1000);
}


