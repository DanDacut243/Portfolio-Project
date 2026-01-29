import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GrowthTab from '../components/GrowthTab';
import styles from '../styles/layout.module.css';
import aboutStyles from '../styles/about.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <div className={aboutStyles.profileContainer}>
                    <div className={aboutStyles.profilePicture}>
                        <Image
                            src="/images/1000058707.jpg"
                            alt="Profile Picture"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <h1>About Me</h1>
                <p className={styles.lead}>I am a full-stack developer who focuses on accessible and well-tested user interfaces. I enjoy turning complex problems into simple, beautiful interfaces.</p>

                <section className={styles.section}>
                    <h2>The Hero Statement</h2>
                    <p>I build accessible, high-performance websites and softwares with databases that are secured and organized for a cleaner and stable web system for users</p>
                </section>

                <section className={styles.section}>
                    <h2>The Big Three</h2>
                    <p>Select three projects that show growth: one that shows what you know, one that shows what you learned, and one that shows what you aspire to do.</p>
                </section>

                <GrowthTab />
            </main>
            <Footer />
        </div>
    );
};

export default About;