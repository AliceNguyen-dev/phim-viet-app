import React from "react";

//  images
import Film01 from "../assets/images/film01.jpg";
import Film02 from "../assets/images/film02.jpg";
import Film03 from "../assets/images/film03.jpg";
import Film04 from "../assets/images/film04.jpg";
import Film05 from "../assets/images/film05.jpg";
import Film06 from "../assets/images/film06.jpg";
import Film07 from "../assets/images/film07.jpg";



function Serie(){


  return(
    <div className="serie-main">


      <div class="cards-list">
  
        <div class="card 1">
          <a href="/serie01">
            <div class="card_image"> <img src={Film01} /> </div>
            <div class="card_title title-white">
              {/* <p className="title-serie">Vẻ Đẹp Đích Thực</p> */}
            </div>
          </a>
        </div>
  
    <div class="card 2">
    <a href="/serie02">
    <div class="card_image">
      <img src={Film02} />
      </div>
    <div class="card_title title-white">
      {/* <p className="title-serie">Card Title</p> */}
    </div>
    </a>
  </div>
  
  <div class="card 3">
  <a href="/serie03">
    <div class="card_image">
      <img src={Film03} />
    </div>
    <div class="card_title">
      {/* <p className="title-serie">Card Title</p> */}
    </div>
    </a>
  </div>
    
    <div class="card 4">
    <a href="/serie04">
    <div class="card_image">
      <img src={Film04} />
      </div>
    <div class="card_title title-black">
      {/* <p className="title-serie">Card Title</p> */}
    </div>
    </a>
    </div>

    <div class="card 5">
    <a href="/serie05">
    <div class="card_image">
      <img src={Film05} />
      </div>
    <div class="card_title title-black">
      {/* <p className="title-serie">Card Title</p> */}
    </div>
    </a>
    </div>

    <div class="card 6">
    <a href="/serie06">
    <div class="card_image">
      <img src={Film06} />
      </div>
    <div class="card_title title-black">
      {/* <p className="title-serie">Card Title</p> */}
    </div>
    </a>
    </div>

    <div class="card 7">
      <a href="/serie07">
        <div class="card_image">
          <img src={Film07} alt="Film07" />
        </div>
        <div class="card_title title-black">
          {/* <p className="title-serie">Film 07</p> */}
        </div>
      </a>
    </div>
  
  </div>
    </div>
  )
}

export default Serie;