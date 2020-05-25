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
        <img src="${post.acf.artist_image.url}" id="${post.id}" class="artist-image artist-image-border-red pointer">

        <button type="button" id="${post.id}" class="read-more-button music-red btnSort pointer">
          <p>Read More</p>
          <div class="fa fa-arrow-up read-more-triangle point-right margin-right color-red"></div>
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
    } else if (`${post.acf.main_hashtag}` === "art") {
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
      <img src="${post.acf.artist_image.url}" id="${post.id}" class="artist-image artist-image-border-purple pointer">

      <button type="button" id="${post.id}" class="read-more-button art-purple btnSort pointer">
        <p>Read More</p>
        <div class="fa fa-arrow-up read-more-triangle point-left color-purple"></div>
      </button>
    </section>
  </div>
  <article id="${post.id}" class="more-info">
    <section class="article-content">${post.content.rendered}</section>
  </article>
  `;
    } else if (`${post.acf.main_hashtag}` === "ticket") {
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
  }
}

// Button animation

let constArrow = 0;
$("#grid-container").on('click', "button.btnSort, .artist-image", function() {
  if (constArrow == 0) {
    $("button.btnSort").children("div.fa-arrow-up").removeClass("rotateTop").addClass("rotateDown")
    constArrow++
    console.log(constArrow)
    let id = this.id
    $('#grid-container .more-info').each(function() {
      if (id == this.id) {
        $("#" + this.id + ".more-info").addClass("displayBlock")
      }
    });
  } else {
    $("button.btnSort").children("div.fa-arrow-up").removeClass("rotateDown").addClass("rotateTop")
    constArrow--
    console.log(constArrow)
    $("#" + this.id + ".more-info").removeClass("displayBlock")
  }
})
