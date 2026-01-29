import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <p>&copy; {new Date().getFullYear()} Dan Louis A. Dacut, All rights reserved.</p>
                <nav aria-label="Footer navigation">
                </nav>
            </div>
        </footer>
    );
};

export default Footer;