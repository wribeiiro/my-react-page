import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Links</h2>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Education</Link>
            <Link to='/'>Experience</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://api.whatsapp.com/send?phone=+5547996142411&text=Hi' target={"_blank"}><i class='fab fa-whatsapp' /> (47) 99614-2411</a>
            <a href='https://www.facebook.com/wellissonribeiiro' target={"_blank"}><i class='fab fa-facebook-f' /> /wellissonribeiiro</a>
            <a href='https://www.github.com/wribeiiro' target={"_blank"}><i class='fab fa-github' /> /wribeiiro</a>
            <a href='https://www.linkedin.com/in/wellisson-ribeiro-655a0b179/' target={"_blank"}><i class='fab fa-linkedin' /> /wellisson-ribeiro</a>
            <a href='mailto:welleh10@gmail.com'><i class='fa fa-at' /> welleh10</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Wellisson Ribeiro&nbsp;
              <i class='fa fa-code' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
