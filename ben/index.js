// Created by Steven Masley 

function feet_to_miles() {
  feet = document.getElementById("feet_input").value
  miles = feet * .065
  miles = Math.round(miles * 100) / 100

  document.getElementById("miles_output").innerText = miles
}