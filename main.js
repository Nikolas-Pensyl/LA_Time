dayjs.extend(dayjs_plugin_duration);
dayjs.extend(dayjs_plugin_customParseFormat);

function activateCountdown(element) {
  const dateString = "6 8 2021 6:15:00";
  const parseString = "D M YYYY H:mm:ss";
  const targetDate = dayjs(dateString, parseString);
  
  setInterval(() => {
    const now = dayjs();
    const duration = dayjs.duration(targetDate.diff(now));
                                    
     if (duration.asMilliseconds() <= 0) return;
                                    
     element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
     element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
     element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0"); 
     element.querySelector(".until__numeric--days").textContent = duration.days().toString().padStart(2, "0");
  }, 250);
}

activateCountdown(document.getElementById("myCountdown"));

dayjs.locale('en');
