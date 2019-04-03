import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div id="contact" className="footer-container">
          <div className="business-card" >
  <div className="flipper">
		<div className="front">
			<div className="name">
		      <span className="first">Kiriiak</span> 
		      <span className="last">Valentyn</span>
        	<span className="title" style={{color: 'black'}}>Frontend Developer</span>
		    </div>
		</div>
    <div className="back">
      <div className="container-sm">
      	<figure className="logo-white"></figure>
      </div>
      <div className="container-lg">
      	<ul className="social fa-ul">
      	  <li><i className="fa fa-li fa-globe"></i><a href="https://drive.google.com/file/d/1bZQLIlUHoCaeK0ZbtVLjAO3dzDBpuW5o/view?usp=sharing" target="_blank">CV</a></li>
      	  <li><i className="fa fa-li fa-envelope"></i><a href="mailto:valantine10010@gmail.com">valantine10010@gmail.com</a></li>
      	  <li><i className="fa fa-li fa-phone"></i><a href="tel:+380731200960">+380731200960</a></li>
      	  <li><i className="fa fa-li fa-linkedin-square"></i><a href="https://www.linkedin.com/in/valentyn-kiriiak-043ab3176/" target="_blank">Linkedin</a></li>
      	  <li><i className="fa fa-li fa-github"></i><a href="https://github.com/val10010" target="_blank">GitHub</a></li>
      	</ul>
      </div>
    </div>
	</div>
</div>
    </div>
  );
}

export default Footer;