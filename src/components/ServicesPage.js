import React, { useState } from 'react';
import './ServicesPage.css'; 
import CloudSol from '../assets/Cloud.webp';
import WebDev from '../assets/web.jpg';
import MobileDev from '../assets/Mobile.png';

function ServicesPage() {
    const [modalOpen, setModalOpen] = useState(null);

    const openModal = (modal) => {
        setModalOpen(modal);
    };

    const closeModal = () => {
        setModalOpen(null);
    };

    return (
        <div className="ServicesPage">
            <h1>Our Services</h1>
            <div className="ServicesContainer">
                <div className="Service">
                    <img src={WebDev} alt="Web Development" className="Services" />
                    <div className="container">
                        <p><b>Web Development</b></p>
                        <p className="Service-container">Expertise in HTML, CSS, JavaScript, React, and more.</p>
                        <button className="button teal" onClick={() => openModal('web')}>Learn More</button>
                    </div>
                </div>
                <div className="Service">
                    <img src={MobileDev} alt="Mobile Development" className="Services" />
                    <div className="container">
                        <p><b>Mobile App Development</b></p>
                        <p className="Service-container">Proficiency in Swift, Kotlin, Flutter, and React Native.</p>
                        <button className="button teal" onClick={() => openModal('mobile')}>Learn More</button>
                    </div>
                </div>
                <div className="Service">
                    <img src={CloudSol} alt="cloud Sol" className="Services" />
                    <div className="container">
                        <p><b>IT Consulting / Cloud Solutions</b></p>
                        <p className="Service-container">Specialization in AWS, Azure, Google Cloud, and DevOps.</p>
                        <button className="button teal" onClick={() => openModal('cloud')}>Learn More</button>
                    </div>
                </div>
            </div>

            {/* Web Development Modal */}
            {modalOpen === 'web' && (
                <div className="modal">
                    <div className="modal-content">
                        <header className="modal-container">
                            <span className="button" onClick={closeModal}>×</span>
                            <h2>Web Development</h2>
                        </header>
                        <div className="modal-body">
                            <p>We specialize in creating dynamic and responsive websites tailored to your business needs. From front-end 
                                design to back-end functionality, we deliver optimized web solutions that engage users and drive results.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile App Development Modal */}
            {modalOpen === 'mobile' && (
                <div className="modal">
                    <div className="modal-content">
                        <header className="modal-container">
                            <span className="button" onClick={closeModal}>×</span>
                            <h2>Mobile App Development</h2>
                        </header>
                        <div className="modal-body">
                            <p>Our team builds powerful mobile applications for both iOS and Android platforms. We focus on intuitive design, 
                                smooth performance, and seamless user experiences to bring your app ideas to life.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* IT Consulting / Cloud Solutions Modal */}
            {modalOpen === 'cloud' && (
                <div className="modal">
                    <div className="modal-content">
                        <header className="modal-container">
                            <span className="button" onClick={closeModal}>×</span>
                            <h2>IT Consulting / Cloud Solutions</h2>
                        </header>
                        <div className="modal-body">
                            <p>Leverage our expertise in IT consulting and cloud solutions to optimize your infrastructure. 
                                We provide strategic guidance, cloud migration services, and ongoing support to help your business 
                                scale efficiently.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServicesPage;
