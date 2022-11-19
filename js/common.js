function getZoneTime(offset) {
    var localtime = new Date();
    var localmesc = localtime.getTime();
    var localOffset = localtime.getTimezoneOffset() * 60000;
    var utc = localOffset + localmesc;
    var calctime = utc + (3600000 * offset);
    var nd = new Date(calctime);

    return nd.toJSON().replace("T"," ").replace("Z"," ");
}

function DateAdd (interval,number,date){ 
    date=convertToDate(date); 
    switch(interval.toLowerCase()){ 
        case "y": return new Date(date.setFullYear(date.getFullYear()+number)); 
        case "m": return new Date(date.setMonth(date.getMonth()+number)); 
        case "d": return new Date(date.setDate(date.getDate()+number)); 
        case "w": return new Date(date.setDate(date.getDate()+7*number)); 
        case "h": return new Date(date.setHours(date.getHours()+number)); 
        case "n": return new Date(date.setMinutes(date.getMinutes()+number)); 
        case "s": return new Date(date.setSeconds(date.getSeconds()+number)); 
        case "l": return new Date(date.setMilliseconds(date.getMilliseconds()+number)); 
    } 
}; 
function dateFormat(date){ 
    date=convertToDate(date); 
    var defyear = parseInt(date.getFullYear());
    var defmonth = parseInt(date.getMonth()+1,10);
    var defday=date.getDate();
    var result=""; 
    if(defmonth<10&&defday<10){ 
        result=defyear+'-0'+defmonth+'-0'+defday; 
    }else if(defmonth<10){ 
        result=defyear+'-0'+defmonth+'-'+defday; 
    }else if(defday<10){ 
        result=defyear+'-'+defmonth+'-0'+defday; 
    }else{  www.jquerycn.cn
        result=defyear+'-'+defmonth+'-'+defday; 
    } 
    return result; 
};

function timeZero(value) {
    if (value >= 10) {
        return value;
    } else {
        return '0'+value;
    }
}

String.prototype.replaceAll = function(s1,s2){ 
    return this.replace(new RegExp(s1,"gm"),s2); 
}; 

function convertToDate(expr){ 
    if(typeof expr=='string'){ 
        expr=expr.replaceAll('-','/');
        return new Date(Date.parse(expr)); 
    }else{ 
        return expr; 
    } 
};

var fhTime = DateAdd("s", 39, DateAdd("n", 17, DateAdd("d", 13, DateAdd("m", 6, DateAdd("y",4,getZoneTime(6))))));

$('.timer').html(fhTime.getFullYear()+"-"+timeZero(fhTime.getMonth())+"-"+timeZero(fhTime.getDay())+" "+timeZero(fhTime.getHours())+":"+timeZero(fhTime.getMinutes()));
$('.timer-y').html(fhTime.getFullYear());