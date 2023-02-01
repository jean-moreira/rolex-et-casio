"use strict";

// First Clock selector arrows

const hourArrow = document.querySelector(".hour");
const minuteArrow = document.querySelector(".minute");
const secondeArrow = document.querySelector(".seconde");

// Second Clock selector time

const hourMinText = document.getElementById("hourMinText");
const secText = document.getElementById("secondText");
const ampmText = document.getElementById("ampmText");
const dateText = document.getElementById("dayAndMonth");

// get actual time

function updateClock() {
  //    actualiser la fonction chaque seconde

  setTimeout(updateClock, 1000);

  //   obtenir l'heure et la date

  const currentDate = new Date();

  const heure = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let seconde = currentDate.getSeconds();
  let dayNumber = currentDate.getDate();
  let monthNumber = currentDate.getMonth() + 1;

  const heureDeg = (heure / 12) * 360;
  const minuteDeg = (minute / 60) * 360;
  const secondeDeg = (seconde / 60) * 360;

  //   adapt arrow depending on degrees
  hourArrow.style.transform = `rotate(${heureDeg}deg)`;
  minuteArrow.style.transform = `rotate(${minuteDeg}deg)`;
  secondeArrow.style.transform = `rotate(${secondeDeg}deg)`;

  //   date display
  dateText.textContent = `${dayNumber}/${monthNumber}`;

  //   convertir format ampm

  let ampmIndicator = heure <= 12 ? "AM" : "PM";
  let heureAMPM = heure % 12;

  // display as the convention: midnight as AM and noon as PM

  if (heure == 0) {
    ampmIndicator = "AM";
    heureAMPM = 0;
  } else if (heure == 12) {
    ampmIndicator = "PM";
    heureAMPM = 12;
  }

  // add a 0 when there is only a single number

  if (heureAMPM.toString().length == 1) {
    heureAMPM = `0${heureAMPM}`;
  }
  if (minute.toString().length == 1) {
    minute = `0${minute}`;
  }
  if (seconde.toString().length == 1) {
    seconde = `0${seconde}`;
  }
  if (dayNumber.toString().length == 1) {
    dayNumber = `0${dayNumber}`;
  }
  if (monthNumber.toString().length == 1) {
    monthNumber = `0${monthNumber}`;
  }

  hourMinText.textContent = `${heureAMPM}:${minute}`;
  ampmText.textContent = ampmIndicator;
  secText.textContent = seconde;
  dateText.textContent = `${dayNumber}/${monthNumber}`;
}

updateClock();
