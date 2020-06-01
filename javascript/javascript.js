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
  if (pageId === "home") {
    document.querySelector(`#${pageId}`).style.marginTop = "90vh";
  } else {
    document.querySelector(`#${pageId}`).style.marginTop = headerHeight + "px";
  }

  setActiveTab(pageId);
  collapseMenu();
}

// set default page
function setDefaultPage() {
  let page = "home";
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

setDefaultPage();

/*
let headerHeight = document.getElementById('header').offsetHeight;
console.log(headerHeight);
document.getElementById('pages-wrapper').style.marginTop = headerHeight + "px";
*/

// Burgermenu functionallity

$(".toggle").on("click", function() {
  $(".toggle").parent().toggleClass('active');
});


// go to artist window from arrow

function goToArtists() {
  let artistWindow = document.getElementById("home-header");
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

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});

// close cookies

function closeCookies() {
    let cookieAlert = document.getElementById("cookie-alert");
    cookieAlert.classList.add("displayNone");
}
