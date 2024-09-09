import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
const footerStyle = {
  width: '100%',
  height: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#282c34',
  color: 'white',
  fontSize: '1rem',
  padding: '0 20px',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
};


  const heartStyle = {
    color: 'red',
    margin: '0 5px',
    animation: 'heartbeat 1.5s infinite',
    fontSize: '1.5rem',
  };

  const linkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    color: 'white',
    marginLeft: '15px',
    fontSize: '1.5rem',
  };

  return (
    <footer style={footerStyle}>
      <div>
        Made with <span style={heartStyle}>♥</span> by Vivek Sharma
      </div>
      <div style={linkContainerStyle}>
        <a
          href="https://github.com/viveknov12"
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={iconStyle} />
        </a>
              <a
                className='mr-[40px]'
          href="https://www.linkedin.com/in/vivek-sharma-b19983212/"
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={iconStyle} />
        </a>
      </div>
      <style jsx>{`
        @keyframes heartbeat {
          0%,
          20%,
          40%,
          60%,
          100% {
            transform: scale(1);
          }
          30%,
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
