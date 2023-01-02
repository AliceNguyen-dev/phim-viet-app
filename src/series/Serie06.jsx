import React from 'react'
import Film06 from '../assets/images/film06.jpg'


export default function Serie06() {


  return (
    <div className="serie06">
      <div className="item-serie">
        <h1 className="title">CÔNG CHÚA THẦN THÁM</h1>
        <img className="film01" src={Film06} alt="film01" />
        <div className="resume"> 
          <p className="text">Nội dung phim Công Chúa Thần Thám:
          Công Chúa Thần Thám xoay quanh cuộc đời nàng công chúa Tâm Dao tinh nghịch, được yêu chiều hết mực. Nàng đã thoát khỏi trận hỏa hoạn từ tẩm điện của vua và bắt đầu con đường đến với nhân gian, chu du các nơi. Với tính cách trượng nghĩa và hiếu kì, nàng đã trở thành người phân xử vụ kiện giải oan cho dân, giúp đỡ bách tính. Trong quá trình tiến gần đến chân tướng của sự thật, nàng cũng nhiều lần đối mặt với nguy hiểm.</p>
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
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvMGE3YzVhY2ZkNWQyZTNmOGM1ZWZiM2E5ZjlmNDY1ZjM" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
              
            
            </div>
            <div id="tab-two-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 2 (lien video) */}
                <p>Episode 2</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvNWI4MDUxOGRmYTVjYzA5NjZhMTFlMWNkMTNlNzE3MjE" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-three-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 3 (lien video) */}
                <p>Episode 3</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvOGVlZjliNmMyYzgzOTdlZTMyYmYzZGE0Yzc1MmJjM2M" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-four-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 4 (lien video) */}
                <p>Episode 4</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvYmFjNmFiNmYyODY0NWRiNWNiYmJiZjAwZWQxMjNmMzY" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-five-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 5 (lien video) */}
                <p>Episode 5</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvMjE4YTZiZWJhNjdjZTMwNDE2MjM1YzQ1ZjAzNTdjMjA" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-six-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 6 (lien video) */}
                <p>Episode 6</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvODc4MzExOGFiZTFkMTJjZWFjZjQ4ZTc0ZmU4Zjk1NTA" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
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
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvN2NiMDFkMjQxZjQ5ODk0YTJmNDFjYzNhZjE3OTIwOWY" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
              
            
            </div>
            <div id="tab-eight-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 8 (lien video) */}
                <p>Episode 8</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvNDFiN2E0MjU3YmVmYjJlODk5OWViMDFjYjNiMzc2YjA" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-nine-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 9 (lien video) */}
                <p>Episode 9</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvOWFlYTNjOTQwZjg2NjU5MjZjOTdiM2QzYzY0YWNlNDQ" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-ten-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 10 (lien video) */}
                <p>Episode 10</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvZWNlY2QzY2ZmMDFiYjYxMzdmMDU3OGJlNTMzN2E1ZjI" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-eleven-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 11 (lien video) */}
                <p>Episode 11</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvNmIwM2VhYjRmMDY3Y2Y4NzM5ZTg1YmQ0MDhmMDVkOTQ" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-twelve-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 12 (lien video) */}
                <p>Episode 12</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvMDEyMWZjMDJiYjc1MDQ4OGU3NzRmZmY5Mzc1NDU3MzQ" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>

            <div id="tab-thirteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 13 (lien video) */}
                <p>Episode 13</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvNzlhYjc5MzQzOWFlYWYwMWI0ZTJjOGQ0Y2VhYjBiNzA" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fourteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 14 (lien video) */}
                <p>Episode 14</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvYTQxMTE3MDZiZGM0YjA0NDUxNzNmNjlmODQxODg4OWI" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fiveteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 15 (lien video) */}
                <p>Episode 15</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvNzdhODEwMjVhYzNhMzFiYWFhMGJkNmRkM2I1NzczZDk" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-sixteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 16 (lien video) */}
                <p>Episode 16</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvOTA2NjcyNTJhMGEwMzYwNDFkZGMzNTUzNzk5NzcyZWY" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>


        </div>

      </div>


    </div>
  )
  
} 