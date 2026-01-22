import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Dan Louis A. Dacut</h1>
                    <h2 className="hero-occupation">Full-Stack Web Developer</h2>
                    <p className="hero-sub">I build full-stack web applications with a focus on performance and user experience.</p>
                </div>
                {/* avatar sits fixed on the right via .pageAvatar; keep empty spacer for layout balance on very large screens */}
                <div className="hero-spacer" aria-hidden />
            </div>
        </section>
    );
};

export default Hero;