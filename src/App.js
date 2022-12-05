import "./components/pic/sofa.png";
import * as React from "react";
import sofa from "./components/pic/sofa.png";

function App() {
	return (
		<div>
			<nav className="navbar">
				<p className="navbar-text">this is a navbar</p>
			</nav>

			<div>
				<div className="wrapper">
					<div className="motto-box">
						<p className="motto">We create your Spece better</p>
						<p className="hero-description">
							Ours team createscomfotable spaces for our Clients. We've been
							designing your every day life and work through great idea since
							1999
						</p>
						<button type="button" className="button">
							GET STARTED
						</button>
					</div>
					<img src={sofa} alt="landing_image" width={705} height={750} />
				</div>
			</div>

			<div className="content-mockup">other content</div>
		</div>
	);
}

export default App;
