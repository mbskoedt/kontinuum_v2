// fetch data from WP

fetch("https://blog.kontinuum.one/wp-json/wp/v2/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendPosts(json);
  });

function appendPosts(posts) {
  for (let post of posts) {


    if (`${post.acf.main_hashtag}` === "music") {
      document.querySelector("#grid-container").innerHTML += `
    <div class="box background-color-white artist-box">
      <div class="black-header-box">
        <h3>${post.title.rendered}</h3>
      </div>
      <section class="box-information">
        <h5 class="artist-hashtags"> ${post.acf.add_hashtags} </h5>
        <img src="${post.acf.artist_image.url}" id="${post.id}" class="artist-image artist-image-border-red pointer" onclick="displayMoreInfo(this)">

        <button type="button" id="${post.id}" class="read-more-button music-red btnSort pointer" onclick="displayMoreInfo(this)">
          <p>Read More</p>
          <div id="${post.id}" class="fa fa-arrow-up read-more-triangle point-right margin-right color-red"></div>
        </button>
      </section>
    </div>
    <div class="box background-color-red color-box">
      <h3>${post.acf.main_hashtag}</h3>
    </div>
    <article id="${post.id}" class="more-info">
      <section class="article-content">${post.content.rendered}</section>
    </article>
    `;
    }
    if (`${post.acf.main_hashtag}` === "art") {
      document.querySelector("#grid-container").innerHTML += `
    <div class="box background-color-purple color-box">
      <h3>${post.acf.main_hashtag}</h3>
    </div>
  <div class="box background-color-white artist-box">
    <div class="black-header-box">
      <h3>${post.title.rendered}</h3>
    </div>
    <section class="box-information">
      <h5 class="artist-hashtags"> ${post.acf.add_hashtags} </h5>
      <img src="${post.acf.artist_image.url}" id="${post.id}" class="artist-image artist-image-border-purple pointer" onclick="displayMoreInfo(this)">

      <button type="button" id="${post.id}" class="read-more-button art-purple btnSort pointer" onclick="displayMoreInfo(this)">
        <p>Read More</p>
        <div id="${post.id}" class="fa fa-arrow-up read-more-triangle point-left color-purple"></div>
      </button>
    </section>
  </div>
  <article id="${post.id}" class="more-info">
    <section class="article-content">${post.content.rendered}</section>
  </article>
  `;
    }
    if (`${post.acf.main_hashtag}` === "ticket") {
      document.querySelector("#grid-container").innerHTML += `
<div class="box background-color-green color-box">
  <h3>${post.acf.main_hashtag}</h3>
</div>
<div class="box background-color-white ticket-box">
<div class="black-header-box">
  <h3>${post.title.rendered}</h3>
</div>
<section class="box-information">
  <h5 class="artist-hashtags"> ${post.acf.add_hashtags} </h5>
${post.content.rendered}
  <button type="button" class="CTA-button pointer">
  <a class="color-white" href="#tickets" onclick="showPage('tickets')">Go to Tickets
    </a>
  </button>
</section>
</div>
<article id="${post.id}" class="more-info">
  <section class="article-content">${post.content.rendered}</section>
</article>
`;
    }
    if (`${post.acf.main_hashtag}` === "ticketMenuTab") {
      document.querySelector("#ticket-container").innerHTML += `
      <div class="sub-tabs-container">
      <h3>${post.title.rendered}</h3>
      <div class="sub-tabs-content">
      <h5 class="artist-hashtags"> ${post.acf.add_hashtags} </h5>
      <section class="article-content">${post.content.rendered}</section>
      <button type="button" class="CTA-button pointer">
      <a class="color-white" href="#tickets" onclick="showPage('tickets')">Go to Tickets
        </a>
      </button>
      </div>
      </div>
  `;
    }
    if (`${post.acf.main_hashtag}` === "locationMenuTab") {
      document.querySelector("#location-container").innerHTML += `
      <div class="sub-tabs-container">
      <h3>${post.title.rendered}</h3>
      <div class="sub-tabs-content">
      <h5 class="artist-hashtags"> ${post.acf.add_hashtags} </h5>
    <section class="article-content">${post.content.rendered}</section>
    </div>
    </div>
`;
    }
    if (`${post.acf.main_hashtag}` === "aboutMenuTab") {
      document.querySelector("#about-container").innerHTML += `
      <div class="sub-tabs-container">
      <h3>${post.title.rendered}</h3>
      <div class="sub-tabs-content">
      <h5 class="artist-hashtags"> ${post.acf.add_hashtags} </h5>
    <section class="article-content">${post.content.rendered}</section>
    </div>
    </div>
`;
    }
    if (`${post.acf.main_hashtag}` === "contactMenuTab") {
      document.querySelector("#contact-container").innerHTML += `
      <div class="sub-tabs-container">
      <h3>${post.title.rendered}</h3>
      <div class="sub-tabs-content">
      <h5 class="artist-hashtags"> ${post.acf.add_hashtags} </h5>
    <section class="article-content">${post.content.rendered}</section>
    </div>
    </div>
    `;
    }
  }
  window.instgrm.Embeds.process();
}

// Button animation

function displayMoreInfo(element) {
  let arrows = document.getElementsByClassName("read-more-triangle")
  let moreInfoTabs = document.getElementsByClassName("more-info")
  let id = element.id

  for (let arrow of arrows) {
    if (id === arrow.id) {
      if (arrow.classList.contains("rotateDown")) {
        arrow.classList.remove("rotateDown")
        arrow.classList.add("rotateTop");
      } else {
        arrow.classList.remove("rotateTop");
        arrow.classList.add("rotateDown");
      }

      for (let moreInfo of moreInfoTabs) {
        if (id === moreInfo.id) {
          if (moreInfo.classList.contains("displayBlock")) {
            moreInfo.classList.remove("displayBlock")
          } else {
            moreInfo.classList.add("displayBlock");

          }
        }
      }
    }
  }
}
