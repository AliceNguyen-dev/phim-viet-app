import React from 'react'
import Film04 from '../assets/images/film04.jpg'


export default function Serie04() {


  return (
    <div className="serie04">
      <div className="item-serie">
        <h1 className="title">YÊU KHÔNG KIỂM SOÁT</h1>
        <img className="film01" src={Film04} alt="film01" />
        <div className="resume"> 
          <p className="text">Nội dung phim Yêu Không Kiểm Soát:
          Yêu Không Kiểm Soát là câu chuyện tình yêu lãng mạn có sự tham gia của Kim Woo Bin và Bae Suzy của Miss A. Shin Joon Young (Kim Woo Bin) và Noh Eul (Bae Suzy) từng yêu nhau thời còn là học sinh nhưng vì số phận trớ trêu mà họ phải chia xa. Gặp lại nhau khi đã trưởng thành, Shin Joon-young đã là một ca sĩ/diễn viên hạng A kiêu căng ngạo mạn trong khi Noh Eul là một nhà sản xuất đạo/diễn luôn mặc cảm tự ti và tôn thờ vật chất. Liệu sự tái hợp của họ có giúp nối lại tình xưa?</p>
        </div>
      </div>
       
      <div class="worko-tabs" style={{textAlign:"center"}}>
  
        <input class="state" type="radio" title="tab-one" name="tabs-state" id="tab-one" checked />
        <input class="state" type="radio" title="tab-two" name="tabs-state" id="tab-two" />
        <input class="state" type="radio" title="tab-three" name="tabs-state" id="tab-three" />
        <input class="state" type="radio" title="tab-four" name="tabs-state" id="tab-four" />
        <input class="state" type="radio" title="tab-five" name="tabs-state" id="tab-five" />
        <input class="state" type="radio" title="tab-six" name="tabs-state" id="tab-six" />

        <div class="tabs flex-tabs">
            <label for="tab-one" id="tab-one-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 1</label>
            <label for="tab-two" id="tab-two-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 2</label>
            <label for="tab-three" id="tab-three-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 3</label>
            <label for="tab-four" id="tab-four-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 4</label>
            <label for="tab-five" id="tab-five-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 5</label>
            <label for="tab-six" id="tab-six-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 6</label>



            <div id="tab-one-panel" class="panel active" style={{height:"1100px", textAlign:"center"}}>
              
              {/* Episode 1 (lien video) */}
              <p>Episode 1</p>
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2UzYmM0ZTdmMjQzZWJjMDVkNjZhMDU2OGEzMzMxOTY2" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
              
            
            </div>
            <div id="tab-two-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 2 (lien video) */}
                <p>Episode 2</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2ViMjFjYzAxNDNkOTZkYmM4ZTNhNThmMWE4MWU0ZGQy" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-three-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 3 (lien video) */}
                <p>Episode 3</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzZhMTMzODJhNTIwZTA0MjAwMTQwMjczNTBhMGIzZWI0" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-four-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 4 (lien video) */}
                <p>Episode 4</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzkzODFmYzkzYWQ2NmY5ZWM0YjJlZWY3MTE0N2E2NjY1" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-five-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 5 (lien video) */}
                <p>Episode 5</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2MwMDE5M2U3MGU4ZTI3ZTcwNjAxYjI2MTYxYjRhZTg2" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-six-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 6 (lien video) */}
                <p>Episode 6</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzY0NjdjMzI3ZWFmODk0MGI0ZGQwN2EwOGM2M2M1ZTg1" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>


        </div>

      </div>


    //  Deuxieme partie

    <div class="worko-tabs" style={{textAlign:"center"}}>
  
        <input class="state" type="radio" title="tab-seven" name="tabs-state" id="tab-seven" checked />
        <input class="state" type="radio" title="tab-eight" name="tabs-state" id="tab-eight" />
        <input class="state" type="radio" title="tab-nine" name="tabs-state" id="tab-nine" />
        <input class="state" type="radio" title="tab-ten" name="tabs-state" id="tab-ten" />
        <input class="state" type="radio" title="tab-eleven" name="tabs-state" id="tab-eleven" />
        <input class="state" type="radio" title="tab-twelve" name="tabs-state" id="tab-twelve" />
        <input class="state" type="radio" title="tab-thirteen" name="tabs-state" id="tab-thirteen" />
        <input class="state" type="radio" title="tab-fourteen" name="tabs-state" id="tab-fourteen" />
        <input class="state" type="radio" title="tab-fiveteen" name="tabs-state" id="tab-fiveteen" />
        <input class="state" type="radio" title="tab-sixteen" name="tabs-state" id="tab-sixteen" />

        <div class="tabs flex-tabs">
            <label for="tab-seven" id="tab-seven-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 7</label>
            <label for="tab-two" id="tab-two-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 8</label>
            <label for="tab-nine" id="tab-nine-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 9</label>
            <label for="tab-ten" id="tab-ten-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 10</label>
            <label for="tab-eleven" id="tab-eleven-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 11</label>
            <label for="tab-thirteen" id="tab-thirteen-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 13</label>
            <label for="tab-fourteen" id="tab-fourteen-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 14</label>
            <label for="tab-fiveteen" id="tab-fiveteen-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 15</label>
            <label for="tab-sixteen" id="tab-sixteen-label" class="tab" style={{fontFamily:"Barlow Condensed sans serif", fontSize:"25px"}}>Episode 16</label>



            <div id="tab-one-panel" class="panel active" style={{height:"1100px", textAlign:"center"}}>
              
              {/* Episode 7 (lien video) */}
              <p>Episode 7</p>
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzIxMThkOGExYjcwMDRlZDViYWY1MzQ3YTRmOTlmNTAy" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
              
            
            </div>
            <div id="tab-eight-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 8 (lien video) */}
                <p>Episode 8</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2VjMjAwMTk5MTFhNzdhZDM5ZDAyMzcxMGJlNjhhYWEx" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-nine-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 9 (lien video) */}
                <p>Episode 9</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzcyZmU2ZjlmZGFiNWY0ZDQ2NWFjNmRhMDI4ZTQ1NDRj" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-ten-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 10 (lien video) */}
                <p>Episode 10</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzYxMDdkOTFmYzlhMGIwNGJjMDQ0YWE3ZDhjMTQ0M2Jk" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-eleven-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 11 (lien video) */}
                <p>Episode 11</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzBlOWI3MzRhYTI1Y2E4MDk2Y2I3YjU2ZGMwZGQ4OTI5" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-twelve-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 12 (lien video) */}
                <p>Episode 12</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2IwZWI5YTk1ZThiMDg1ZTQwMjVlYWUyZjBkNzZhNmE2" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>

            <div id="tab-thirteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 13 (lien video) */}
                <p>Episode 13</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzk2ZjJkNjA2OWRiOGFkODk1YzM0ZTIyODVkMjVjMGVk" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fourteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 14 (lien video) */}
                <p>Episode 14</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2ZhZjAyYjIzNThkZTg5MzNmNDgwYTE0NmY0ZDJkOThl" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fiveteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 15 (lien video) */}
                <p>Episode 15</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzdjYjM2ZTIzNTI5ZTRkZTRjNDE0NjA5NDBjYzg1ZTZl" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-sixteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 16 (lien video) */}
                <p>Episode 16</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2ZlMWY5YzcwYmRmMzQ3NDk3ZTFhMDFiNmM0ODZiZGI5" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>


        </div>

      </div>


    </div>
  )
  
} 