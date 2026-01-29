import React from 'react';
import HeroAvatar from './HeroAvatar';

const Hero: React.FC = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Dan Louis A. Dacut</h1>
                        <h2 className="hero-occupation">Full-Stack Web Developer</h2>
                        <p className="hero-sub">I build full-stack web applications with a focus on performance, data oraganization and user experience.</p>
                    </div>
                    <HeroAvatar />
                </div>
            </section>

        </>
    );
};

export default Hero;
