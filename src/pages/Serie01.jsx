import React from 'react'
import Film01 from '../assets/images/film01.jpg'


export default function VẻĐẹpĐíchThực() {


  return (
    <div className="VẻĐẹpĐíchThực">
      <div className="item-serie">
        <h1 className="title">Vẻ Đẹp Đích Thực</h1>
        <img className="film01" src={Film01} alt="film01" />
        <div className="resume"> 
          <p className="text">NỘI DUNG PHIM VẺ ĐẸP ĐÍCH THỰC
            Vẻ Đẹp Đích Thực - True Beauty là bộ phim truyền hình Hàn Quốc năm 2020 dựa trên truyện tranh trên mạng cùng tên, kể về cách một nữ sinh trung học tự ti về ngoại hình của mình và một nam sinh trung học có quá khứ đen tối khi họ gặp nhau.</p>
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
              <p>Episode 1 A</p>
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzRhYjIwOTg4NWExMzRkNzNiMzliYzk2NTA0YjdlMzAx" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

              <p>Episode 1 B</p>
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzIxZWMyZjRmNDkyMTE5MTZlM2Q5YmYzZmM0YTE2ODc1" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
            
            </div>
            <div id="tab-two-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 2 (lien video) */}
                <p>Episode 2 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2ZlMjJmZDU5NWI1MzgzZjljZTFmN2UyYWJkMTA1ODRm" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 2 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzViZGY0NGFkMzg4ZjM3Zjg0NGYzOGQzMjc2MWM4YWUx" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
            </div>
            <div id="tab-three-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 3 (lien video) */}
                <p>Episode 3 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2ZlYTgzNGJlYWY4OWNiMGI4ZTNkY2MyMTc3M2JkYWI4" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 3 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzZhNTU3ZDFmM2QxZTBiZDllYmU2Y2ExNDBhMWU1MTk0" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
            </div>
            <div id="tab-four-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 4 (lien video) */}
                <p>Episode 4 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzNjZmRkNzY2NDMyNzEzMWI3NWMxNjI0YzJhYzcyNDU2" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 4 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzNjZmRkNzY2NDMyNzEzMWI3NWMxNjI0YzJhYzcyNDU2" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
            </div>
            <div id="tab-five-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 5 (lien video) */}
                <p>Episode 5 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzVjYTQxMDY1MDQwZDY1YjYwOTI2OTI3YjM1ZDhiYWU4" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 5 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzY4YzFmMjVkY2JkODJlMDQ4YzZkNzIzYjE2YjQ1NmRm" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-six-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 6 (lien video) */}
                <p>Episode 6 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzhhZTBlZjAzMDBjZGVlZWNkMzk2MzZlODczYmY4Nzlm" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 6 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2ZlMWFmNTNlZTQ3ZTUzNGJhNjdiYmMwZGJiNmMyZjY3" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
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
              <p>Episode 7 A</p>
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzI1MTA1ZWUyMWY2N2Q2YjIzOTVjYTY0ZTQzNzc4ZjBi" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

              <p>Episode 7 B</p>
              <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzNhOWJhNDUxMmI0NzY0MTJiOWM1MWZiMDcxY2IwN2Vj" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
            
            </div>
            <div id="tab-eight-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 8 (lien video) */}
                <p>Episode 8 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzc4YjQyZjA2NGQyMmJiNmE2NWQ0ZTk1NmJlY2IyZTAy" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 8 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzNlNGU2N2NiZWRlZmZmMzliZDczZjk4ZjAxZTdlMDY2" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
            </div>
            <div id="tab-nine-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 9 (lien video) */}
                <p>Episode 9 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzBmYjQ5ODdmMTE3YTFlYWRlZjJhZWY5MjcxZGFkZjE0" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 9 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzZjNTVlNzUzMzU1ZDgyNDA1ZDYwNGRkM2RjOTYxNTYw" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-ten-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 10 (lien video) */}
                <p>Episode 10 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2Y1YjI1NGE0YTI2ODhhMTQyZGUxMGE2OGQ3NmQ4MGI5" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 10 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzRhNDRhMjMwMTA1Y2NkYmNjNTljMjc3MjBhNzk4MmRh" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-eleven-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 11 (lien video) */}
                <p>Episode 11 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzc3NjViMDM2YWQ5OTY4MzRhNjllYWEyN2FjYzYwNTQy" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 11 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzdkYTc2YmNjZTNjNTY2ODQzZWEwYjNlNzIyZWYyMmVl" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-twelve-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 12 (lien video) */}
                <p>Episode 12 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzViOGY5Yzc2OWJhZWJlZTA4YWFkOTJlMzY1MjFiNzE4" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 12 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzZiMjgzYjhjOWFhOWRjYWRhOWVkZjQ5ODE4ZDMxOTM3" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>

            <div id="tab-thirteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 13 (lien video) */}
                <p>Episode 13 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzcwYzZhYmIwNDJiNzZmODcxYTM1NGM4YjlmNTk3MTM5" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 13 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzYyODE2NDI5NjQwNzBjOGZjNmRmMjM3MjBlZTgxMjgx" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fourteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 14 (lien video) */}
                <p>Episode 14 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2ViYTc5M2UwMjMwMTBhZWEzY2I0MzM4ZDJhMTIzYTc0" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 14 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzVhMzY3MjZjZDFkOWVhNmY5ZTM1MGMyZTY3YTQzZjE4" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-fiveteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 15 (lien video) */}
                <p>Episode 15 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzdjMzkzNTI4MTMwNDUyMDZhZGQwNWM3OWY4NjYyZTFj" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 15 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlLzhlZTM1OTJkN2QyNTFlM2Y3ZmU0ZGE0Njk3ODU1OTJi" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>
            <div id="tab-sixteen-panel" class="panel" style={{height:"1100px", textAlign:"center"}}>
                {/* Episode 16 (lien video) */}
                <p>Episode 16 A</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2Q4Njk2Y2MzZTM0NDdhYzQ0MjM3YTkzNmE4MGIwNWQ4" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

                <p>Episode 16 B</p>
                <iframe width="40%" height="40%" src="https://player.meophimz.tv/embed?url=aHR0cHM6Ly9hYS5uZ3VvbnBoaW1tb2kuY29tL3NoYXJlL2NhNDkxYjE4ZjNlYzk0MTcwZjM3YTliNTYxZjIwNjBj" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
                
            </div>


        </div>

      </div>


    </div>
  )
  
} 