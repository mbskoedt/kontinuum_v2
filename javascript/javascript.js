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
