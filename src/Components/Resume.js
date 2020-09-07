import React, { Component } from 'react';
import pic1 from '../../src/images/artemis.jpg';
import pic2 from '../../src/images/book thief.jpg';
import pic3 from '../../src/images/flipped.jpg';
import pic4 from '../../src/images/oneday.jpg';
import pic5 from '../../src/images/the time machine.jpg';

class Resume extends Component {
    render() {
        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var education = this.props.data.education.map(function (education) {
                return (
                    <div key={education.school}>
                        <h3>{education.school}</h3>
                        <h3>{education.school2}</h3>
                        <p className="info">
                            {education.degree}
                            <span>&bull;</span>
                            <em className="date">{education.graduated}</em>
                        </p>
                        <p>{education.description}</p>
                    </div>
                );
            });
            var work = this.props.data.work.map(function (work) {
                return (
                    <div key={work.company}>
                        <h3>{work.company}</h3>
                        <p className="info">
                            {work.title}
                            <span>&bull;</span>
                            <em className="date">{work.years}</em>
                        </p>
                        <li className="description">{work.description1}</li>
                        <li className="description">{work.description2}</li>
                        <li className="description">{work.description3}</li>
                        <li className="description">{work.description4}</li>

                        <div>
                            <img className="pic" src={pic1} alt="" />
                            <img className="pic" src={pic2} alt="" />
                            <img className="pic" src={pic3} alt="" />
                            <img className="pic" src={pic4} alt="" />
                            <img className="pic" src={pic5} alt="" />
                        </div>
                    </div>
                );
            });
            var skills = this.props.data.skills.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return (
                    <li key={skills.name}>
                        <span
                            style={{ width: skills.level }}
                            className={className}
                        ></span>
                        <em>{skills.name}</em>
                    </li>
                );
            });
        }

        return (
            <section id="resume">
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{work}</div>
                </div>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">{education}</div>
                        </div>
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <p>{skillmessage}</p>

                        <div className="bars">
                            <ul className="skills">{skills}</ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
