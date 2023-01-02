import React from "react";

//  images



function Film(){


  return(
    <div className="movie-main">


      <div class="cards-list">
  
        <div class="card 1">
          <a href="/movie01">
            <div class="card_image"> <img src="" /> </div>
            <div class="card_title title-white">
              <p className="title-serie">Movie 1</p>
            </div>
          </a>
        </div>
  
    <div class="card 2">
    <a href="/movie02">
    <div class="card_image">
      <img src="" />
      </div>
    <div class="card_title title-white">
      <p className="title-serie">Card Title</p>
    </div>
    </a>
  </div>
  
  <div class="card 3">
  <a href="/movie03">
    <div class="card_image">
      <img src="" />
    </div>
    <div class="card_title">
      <p className="title-serie">Card Title</p>
    </div>
    </a>
  </div>
    
    <div class="card 4">
    <a href="/movie04">
    <div class="card_image">
      <img src="" />
      </div>
    <div class="card_title title-black">
      <p className="title-serie">Card Title</p>
    </div>
    </a>
    </div>

    <div class="card 5">
    <a href="/movie05">
    <div class="card_image">
      <img src="" />
      </div>
    <div class="card_title title-black">
      <p className="title-serie">Card Title</p>
    </div>
    </a>
    </div>

    <div class="card 6">
    <a href="/movie01">
    <div class="card_image">
      <img src="" />
      </div>
    <div class="card_title title-black">
      <p className="title-serie">Card Title</p>
    </div>
    </a>
    </div>

    <div class="card 7">
      <a href="/movie07">
        <div class="card_image">
          <img src="" alt="Film07" />
        </div>
        <div class="card_title title-black">
          <p className="title-serie">Film 07</p>
        </div>
      </a>
    </div>
  
  </div>
    </div>
  )
}

export default Film;