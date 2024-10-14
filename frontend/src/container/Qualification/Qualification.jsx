import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './QualificationStyles.css';

const Qualification = () => {
    return (
        <section className="qualification section" style={{ fontFamily: 'var(--font-base)' }}>
            <h2 className="section_title head-text">Qualification</h2>
            <span className="section_subtitle bold-text app__flex" style={{ color: 'var(--secondary-color)', marginTop: '0.5rem' }}>
                My personal journey
            </span>

            <div className="qualification_container container" style={{ marginTop : '-30px' }}>
                {/* Static Education Button */}
                <div className="qualification_tabs">
                    <div className="qualification_button button--flex qualification_active">
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>
                </div>

                <div className="qualification_content qualification_active">
                    {/* --------- Qualification 1 ------- */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Schooling</h3>
                            <span className="qualification_subtitle">Saraswati Vidya Mandir, Sugauli</span>
                            <div className="qualification_calender">
                                <i className="uil uil-schedule"></i> 2008-2017
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    {/* --------- Qualification 2 ------- */}
                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">High School</h3>
                            <span className="qualification_subtitle">CMJ Institute of Education, Motihari</span>
                            <div className="qualification_calender">
                                <i className="uil uil-schedule"></i> 2017-2021
                            </div>
                        </div>
                    </div>

                    {/* --------- Qualification 3 ------- */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Computer Science Engineer</h3>
                            <span className="qualification_subtitle">IIIT Bhubaneswar, Odisha</span>
                            <div className="qualification_calender">
                                <i className="uil uil-schedule"></i> 2022-2026
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    {/* --------- Qualification 4 ------- */}
                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Mern Stack Developer</h3>
                            <span className="qualification_subtitle">IIIT Bhubaneswar</span>
                            <div className="qualification_calender">
                                <i className="uil uil-schedule"></i> 2023-2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppWrap(
    MotionWrap(Qualification, 'app__qualification'),
    'qualification',
    'app__whitebg'
);
