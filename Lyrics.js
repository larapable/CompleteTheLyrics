import { Route, Routes } from 'react-router-dom';
import Singer from './Singers';
import TheFirst from './TheFirst';
import TheSecond from './TheSecond';
import TheThird from './TheThird';
import TheFourth from './TheFourth';



function CompleteTheLyrics() {

  return (
    <div style={{textAlign:'center'}}>
      <h1>Complete The Lyrics</h1>
    
     <Routes>
        <Route path="singers" element={<Singer/>}>
          <Route path="first" element={<TheFirst/>}/>
          <Route path="second" element={<TheSecond/>}/>
          <Route path="third" element={<TheThird/>}/>
          <Route path="fourth" element={<TheFourth/>}/>
        </Route>
     </Routes>

    </div>
  );
}

export default CompleteTheLyrics;
