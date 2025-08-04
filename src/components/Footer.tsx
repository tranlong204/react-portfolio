
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className="bg-transparent text-sm text-gray-500 py-10">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <div className="space-x-4">
          <a href="https://github.com/tranlong204" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/tranlong204/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        </div>
        <p>
          A special thanks to <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer" className="underline">Yuji Sato</a> for providing the original template
        </p>
      </div>
    </footer>
  );
}

export default Footer;
