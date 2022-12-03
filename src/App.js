import './App.css';
import './components/pic/sofa.png';
import * as React from 'react';

function App() {


  return (
    <div className="App">
      
      {/* Header */}
      <nav className='Header'>
        <tr>
          <td><div className='t1'>id Studio</div></td>
          <td><div className='t2'>Services </div></td>
          <td><div className='t3'>Portfolio</div></td>
          <td><div className='t4'>Pricing</div></td>

          <div className='container'>
            <div className='topright'>
                <div className='pic1'></div>
                <td><div className='t5'>(303)555-0105</div></td>
                <td><div className='t6'>EN</div></td>
            </div>
          </div>
          </tr>
      </nav>

      {/* First Text */}
      <div className='First'>
          <p className='F1'>We create your<br/>Spece better</p>
          <p className='F2'>Ours team createscomfotable spaces for our<br/>Clients. We've been designing your every day life and<br/>work through great idea since 1999</p>
          <button className='button'>GET STARTED</button>
      </div>

      {/* Second Text */}
      
      <div className='Second'>
          <div className='topic'> 
          <p className='S1'>About</p>
          <p className='S2'>Studio</p>
          </div>
          <p className='S3'>Interiart ia an award-winning architecture and interior design practice based<br/>in NYC.We work internationally on projects of residential & commerical interior<br/>
          design that require a creative approach. Our talented and experienced<br/>designers leverage their know ledge and expertise to create unique and<br/>comfortable interiors for you.</p>
          <p className='S4'>Our team knows that interior design can be stressful for the client and we do <br/> our best to make it as easy as possible. We listenn to your needs, ideas, and<br/>
          inputs. And most importantly, we make it exciting and enjoyable for our clients.</p>
      </div>


    </div>
  );
}

export default App;
