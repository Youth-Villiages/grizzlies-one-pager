const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

function countdown() {
    var today = new Date();
    var eventDate = new Date("December 22, 2020 00:00:00");

    var currentTime = today.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var sec = Math.floor(remTime/1000);
    var min = Math.floor(sec/60);
    var hrs = Math.floor(min/60);
    var days = Math.floor(hrs/24);

    hrs = hrs % 24;
    min = min % 60;
    sec = sec % 60;

    hrs = (hrs<10) ? "0" + hrs : hrs;
    min = (min<10) ? "0" + min : min;
    sec = (sec<10) ? "0" + sec : sec;
    

    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    setTimeout(countdown, 1000);
}

countdown();
function show_hide() {
  if (document.getElementById("appear").style.display == 'none') {
    document.getElementById("appear").style.display = 'block';
  }else{
    document.getElementById("appear").style.display = 'none';
  }
}
