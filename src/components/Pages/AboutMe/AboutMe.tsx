import React from 'react';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import './AboutMe.scss';
import ExpandIcon from "./../../Atoms/ExpandIcon";

const AboutMe = () => {

    return (
        <div className="rootAboutMe">
           <h1>About Me</h1>

            <div className="Accordion">
                <Accordion key="Accordion_one" className="Accordion_BG">
                    <AccordionSummary
                        key="Accordion_one_sum"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        expandIcon={<ExpandIcon />}
                    >
                        <Typography className="Accordion_head">Skills</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <div className="Accordion_list">
                            <div className="List_item">
                                <div className="first_subItem">working experience with React, Redux and Redux Saga</div>
                                <div className="second_subItem">2+ years</div>
                            </div>
                            <div className="List_item">
                                <div className="first_subItem">knowledge of JavaScript, ES6</div>
                                <div className="second_subItem">3 years</div>
                            </div>
                            <div className="List_item">
                                <div className="first_subItem">working experience with Git</div>
                                <div className="second_subItem">3 years</div>
                            </div>
                            <div className="List_item">
                                <div className="first_subItem">strong knowledge of HTML5, CSS3, Bootstrap</div>
                                <div className="second_subItem">3 years</div>
                            </div>
                            <div className="List_item">
                                <div className="first_subItem">working experience with  AngularJS</div>
                                <div className="second_subItem">2 year</div>
                            </div>
                            <div className="List_item">
                                <div className="first_subItem">working experience with  Angular 2+</div>
                                <div className="second_subItem">1 year</div>
                            </div>
                            <div className="List_item">
                                <div className="first_subItem">Linux Bash</div>
                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>
                <Accordion key="Accordion_two" className="Accordion_BG">
                    <AccordionSummary
                        key="Accordion_two_sum"
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        expandIcon={<ExpandIcon />}
                    >
                        <Typography className="Accordion_head">Previous jobs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion key="Accordion_three" className="Accordion_BG">
                    <AccordionSummary
                        key="Accordion_three_sum"
                        aria-controls="panel2a-content"
                        id="panel3a-header"
                        expandIcon={<ExpandIcon />}
                    >
                        <Typography className="Accordion_head">Education</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion key="Accordion_four" className="Accordion_BG">
                    <AccordionSummary
                        key="Accordion_four_sum"
                        aria-controls="panel2a-content"
                        id="panel4a-header"
                        expandIcon={<ExpandIcon />}
                    >
                        <Typography className="Accordion_head">Other</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

       </div>
    );
};

export default AboutMe;