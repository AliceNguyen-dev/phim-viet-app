import React from 'react'
import Film02 from '../assets/images/film02.jpg'


export default function Serie02() {


  return (
    <div className="serie02">
      <div className="item-serie">
        <h1 className="title">Nội dung phim Dù Ghét Vẫn Yêu</h1>
        <img className="film01" src={Film02} alt="film01" />
        <div className="resume"> 
          <p className="text">Nội dung phim Dù Ghét Vẫn Yêu:
          Dù Ghét Vẫn Yêu - Love Returns kể về câu chuyện của Eun Jo. Cô đã bị mất tất cả sau khi bố cô đột ngột qua đời và mẹ kế biến mất. Cô quyết tâm bắt đầu lại cuộc sống của mình và dần dần hiểu được tình yêu gia đình là gì và ý nghĩa đích thực của cuộc sống. Khi theo dõi bộ phim, khán giả sẽ có góc nhìn mới mẻ về mối quan hệ trong gia đình khi mà con cái thì coi bố mẹ như kẻ thù còn bố mẹ thì coi con cái như mối phiền toái của mình. Phim cũng nói lên tầm quan trong của tình yêu và tình cảm gia đình, chứ không phải là huyết thống hay pháp luật.</p>
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
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvZjYxMGExM2RlMDgwZmI4ZGY2Y2Y5NzJmYzAxYWQ5M2Y" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
              
            
            </div>
            <div id="tab-two-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 2 (lien video) */}
                <p>Episode 2</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvNjFkMDA5ZGEyMDhhMzRhZTE1NTQyMGU1NWY5N2FiYzc" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-three-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 3 (lien video) */}
                <p>Episode 3</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvNWZjMzRlZDMwN2FhYzE1OWEzMGQ4MTE4MWM5OTg0N2U" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-four-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 4 (lien video) */}
                <p>Episode 4</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvZmIzZWE3N2EyYjNmOGU3Y2IwZTRlNjY5OTU2OGQ0M2Q" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-five-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 5 (lien video) */}
                <p>Episode 5 </p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvYjRhMGUwZmJhYTlmMTZkODk0N2M0OWY0ZTYxMGI1NDk" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-six-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 6 (lien video) */}
                <p>Episode 6</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvZjkzMjJiMTQ2NTc0ZDlkYTlhZDMyYWQ4NzlhZDM3M2I" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
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
              <p>Episode 7 </p>
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvZjQxZmY4NGU3Y2JkMTI5Mzk3YzExZjhjNWQyMGMwZjQ" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
              
            
            </div>
            <div id="tab-eight-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 8 (lien video) */}
                <p>Episode 8 </p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvZDZhZTAwZDc3NDY4NDcxYzBmYmEzYTUzYTAyNzM4OTE" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-nine-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 9 (lien video) */}
                <p>Episode 9</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvNjNlYjU4YmQ0ZDM0ODZmMDAxNDM4ZjkxMWExMWQzMjM" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-ten-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 10 (lien video) */}
                <p>Episode 10</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvZjE5YzQ0ZDA2OGZlY2FjMWQ2ZDEzYTgwZGY0ZjhlOTY" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-eleven-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 11 (lien video) */}
                <p>Episode 11</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvMWIzODhjOGI3Yzg2M2ZkZTNmNTU5MTQyZmRjMTIzYjA" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-twelve-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 12 (lien video) */}
                <p>Episode 12 </p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvMjM0YTEyNzM0ODdiZjdiMmUyMDYxYjliNTYzNzNhMjk" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>

            <div id="tab-thirteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 13 (lien video) */}
                <p>Episode 13 </p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvMmFlYzQwNWQ0YjU5NTkyMzVjNDllYzFkNzhlZGIwYzI" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fourteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 14 (lien video) */}
                <p>Episode 14 </p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvODA1MTYzYTBmMGYxMjhlNDczNzI2Y2NkYTVmOTFiYWM" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fiveteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 15 (lien video) */}
                <p>Episode 15 </p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvMzY3NjkyMDY4ZjA2OWMxMzViN2Q1YTNhNTllNDcwZDM" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-sixteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 16 (lien video) */}
                <p>Episode 16</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly8xMDgwLmhkcGhpbW9ubGluZS5jb20vc2hhcmUvNjI0ZWMxYzg4MTY1NmVlNjQxODYwNGRmMjkyODQ5NGI" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>


        </div>

      </div>


    </div>
  )
  
} 