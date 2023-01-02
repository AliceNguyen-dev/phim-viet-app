import React from 'react'
import Film05 from '../assets/images/film05.jpg'


export default function Serie05() {


  return (
    <div className="serie05">
      <div className="item-serie">
        <h1 className="title">BẠN GÁI TÔI LÀ HỒ LY CHÍN ĐUÔI</h1>
        <img className="film01" src={Film05} alt="film01" />
        <div className="resume"> 
          <p className="text">Nội dung phim Bạn Gái Tôi Là Hồ Ly Chín Đuôi:
          Bộ phim này kể về những chuyện hài hước khi sống chung với nhau của hồ ly chín đuôi đã ngủ say 500 năm tình cờ được giải thoát và một người đàn ông. Kể lại về hồ ly chín đuôi mang sắc thái cổ điển theo phong cách hiện đại, khác hoàn toàn với hình tượng hồ ly chín đuôi hiện còn lưu giữ, \"hồ ly chín đuôi\" chính là điểm nhấn lớn nhất của bộ phim dài tập này.</p>
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
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzQzN2Q0NmE4NTcyMTRjOTk3OTU2ZWFmMGUzYjIxYTU1" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
              
            
            </div>
            <div id="tab-two-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 2 (lien video) */}
                <p>Episode 2</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzI1NzAyZDQyMzRmNGM3ZGM1NDJhZGRlNjQ0MjZhN2Nh" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-three-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 3 (lien video) */}
                <p>Episode 3</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzliOGVmMjcyMjljNDIxOTg2MzE4MTNmMWQyZjYwYWFm" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-four-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 4 (lien video) */}
                <p>Episode 4</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzY4NTIxNzU1NzM4M2NkMTk0YjRmMTBhZTRiMzllZWJm" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-five-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 5 (lien video) */}
                <p>Episode 5</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2MyYWU1Y2IyNDI2ZDk2ZWQxOWE1MGIwYjdkN2M4ZTEx" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-six-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 6 (lien video) */}
                <p>Episode 6</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2I1NjUyMmNiOTVhYTg5YzIwN2UxMjk1MDkzNjJjY2Uz" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
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
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2YxOGVlNDU4NDBlMTgzMjk5MzlhY2YxMDk1Y2RjNWE5" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
              
            
            </div>
            <div id="tab-eight-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 8 (lien video) */}
                <p>Episode 8</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2M1N2RhYTBiYzljNGQ4ZTM1YTIxZTlhMjgwMWFlY2Iy" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-nine-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 9 (lien video) */}
                <p>Episode 9</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzVlMmI2Njc1MDUyOWQ4YWU4OTVhZDI1OTExMTg0NjZm" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-ten-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 10 (lien video) */}
                <p>Episode 10 </p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzM3NmM2YjlmZjNiZWRiYmVhNTY3NTFhODRmZmZjMTBj" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-eleven-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 11 (lien video) */}
                <p>Episode 11</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzYyMzI2ZGM3YzRmN2I4NDlkNmYwMTNiYTQ2NDg5ZDZj" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
            </div>
            <div id="tab-twelve-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 12 (lien video) */}
                <p>Episode 12</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzBiNzk0YTAzNzQ0YTAzODAwMzEzY2EwZjJlMjkxMjk0" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>

            <div id="tab-thirteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 13 (lien video) */}
                <p>Episode 13</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzQ4YzRhNzU2ZDBjZTg0MmEwMzliMmVlOWUzZjA1MTc0" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fourteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 14 (lien video) */}
                <p>Episode 14</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzlkZGM3MGIzNjE3YzNlNjVjMDNmYTYzYzIzMGExNzA1" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fiveteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 15 (lien video) */}
                <p>Episode 15</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzQ0ZDVlYzMwM2E4MTMzOWMwZDA1ZWMzY2FiMGZjY2Zh" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-sixteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 16 (lien video) */}
                <p>Episode 16</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzdlYjVhYzM2MDE0YTc2NjI5YzQwMDY5ZTQ2MTM2YTYx" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>


        </div>

      </div>


    </div>
  )
  
} 