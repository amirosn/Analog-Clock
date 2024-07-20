var second = 0;
var minute = 0;
var hour = 0;
var t = new Date()


setInterval(
    function() {
        t = new Date();
        second = t.getSeconds() * 6;
        minute = t.getMinutes() * 6;
        hour = t.getHours() * 30 + Math.round(minute / 12);
        document.getElementById("secondHand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minuteHand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hourHand").style.transform = "rotate(" + hour + "deg)";
    }, 1000

);