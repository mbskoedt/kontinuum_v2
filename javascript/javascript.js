"use strict";

// loading screen

var loadingScreen = document.getElementById("loading-screen");

function playOnLoad() {
  loadingScreen.play();
}

function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 2500);

  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function() {
  setDefaultPage();
  show('loading', false);
});

// SPA

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  let headerHeight = document.getElementById('header').offsetHeight - document.getElementById('menu').offsetHeight;
  if (pageId === "artists") {
    document.querySelector(`#${pageId}`).style.marginTop = "90vh";
  } else {
    document.querySelector(`#${pageId}`).style.marginTop = headerHeight + "px";
  }

  setActiveTab(pageId);
  collapseMenu();
}

// set default page
function setDefaultPage() {
  let page = "artists";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".menu a");
  for (let page of pages) {
    if ("#" + pageId === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}


// go to artist window from arrow

function goToArtists() {
  let artistWindow = document.getElementById("artists-header");
  artistWindow.scrollIntoView();
}

function toTheTop() {
  let artistWindow = document.getElementById("pages-wrapper");
  artistWindow.scrollIntoView();
}

// remove :checked from menu

function collapseMenu() {
  document.getElementById('menu-btn').checked = false;
}

// gives 100 pixels to href-requests

window.addEventListener("hashchange", function() {
  window.scrollTo(window.scrollX, window.scrollY - 100);
});

// close cookies

function closeCookies() {
  let cookieAlert = document.getElementById("cookie-alert");
  cookieAlert.classList.add("displayNone");
}

// show/hide video player

let heroVideo = document.getElementById("hero-video");

function showControls() {
  heroVideo.setAttribute("controls", "controls")
}

function removeControls() {
  heroVideo.removeAttribute("controls")
}
