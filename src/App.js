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
      <div className='container1'>
        <div className='Second'>
          <p className='S1'>About</p>
          <p className='S2'>Studio</p>
          <p className='S3'>Interiart ia an award-winning architecture and interior design practice based<br/>in NYC.We work internationally on projects of residential & commerical interior<br/>
          design that require a creative approach. Our talented and experienced<br/>designers leverage their know ledge and expertise to create unique and<br/>comfortable interiors for you.</p>
          <p className='S4'>Our team knows that interior design can be stressful for the client and we do <br/> our best to make it as easy as possible. We listenn to your needs, ideas, and<br/>
          inputs. And most importantly, we make it exciting and enjoyable for our clients.</p>
        </div>
      </div>
        
      {/* OurService */}
      <div className='container2'>
        <p className='O1'> Our</p>
        <p className='O2'>Services</p>

        <div className='image01'>
            <div className='pic01'></div>
              <p className='interior'>INTERIOR DESIGN</p>
              <p className='inter'>interior design services offer a vast<br/>variety of solutions for our client'<br/>homes and offices.</p>
        </div>

        <div className='image02'>
            <div className='pic02'></div>
            <div className='decorative'>DECORATIVE SERVICES</div>
            <div className='deco'>OUr professional decorators will be<br/>happy to help you change your<br/>house's inner look.</div>
        </div>

        <div className='image03'>
            <div className='pic03'></div>
            <div className='space'>SPACE PLANNING</div>
            <div className='spa'>We create a better interior<br/>experiences through our space planning services.</div>
        </div>

        <div className='image04'>
            <div className='pic04'></div>
            <p className='project'>PROJECT MANAGEMENT</p>
            <p className='pro'>We provide proper project<br/>management as it's one of the main<br/>success factors in interior design.</p>
        </div>
        <button className='button'>FREE CONSULTATION</button>
      </div>

      
      {/* OurPortfolio */}
      <div className='container3'>
        <div className='portfolio-topic-line'>
          <p className='all'>All</p>
          <p className='comercial'>COMERCIAL</p>
          <p className='residential'>RESIDENTAIL</p>
          <p className='office'>OFFICE</p>
          <p className='other'>OTHER</p>
          <p className='viewmore'>VIEW MORE</p>
        </div>

        <div className='portfolio-pic'>
          <div className='portfolio-pic-line01'>
            <div className='portfolio-pic01'></div>
            <div className='portfolio-pic02'></div>
            <div className='portfolio-pic03'></div>
            <div className='portfolio-pic04'></div>
          </div>

          <div className='portfolio-pic-line02'>
            <div className='portfolio-pic05'></div>
            <div className='portfolio-pic06'></div>
            <div className='portfolio-pic07'></div>
            <pic className='portfolio-pic08'></pic>
          </div>
        </div>
      </div>

      <div className='container4'>
        <div className='pricing-header'>
          <p className='our'>Our</p>
          <p className='pricing'>Pricing</p>
        </div>

        <div className='banner-pricing'>
          <div className='banner-card01'>
            <p className='basic-card01'>Basic</p>
            <p className='number-card01'>$25</p>
            <p className='month-card01'>per month</p>
            <p className='interior-card01'>Interior Design</p>
            <p className='project-card01'> Project Discussion</p>
            <p className='space-card01'> Space Planning</p>
            <p className='online-card01'>Online Consultation</p>
            <button className='button'>BUY NOW</button> 
          </div>

          <div className='banner-card02'>
            <p className='standart-card02'>Standant</p>
            <p className='number-card02'>$50</p>
            <p className='month-card02'>per month</p>
            <p className='color-card02'>Color Analysis</p>
            <p className='space-card02'>Home Remodeling</p>
            <p className='3d-card02'>3D Interior Model</p>
            
          </div>
          <div className='banner-card03'></div>
        </div>
      </div>


    </div>
  );
}

export default App;
