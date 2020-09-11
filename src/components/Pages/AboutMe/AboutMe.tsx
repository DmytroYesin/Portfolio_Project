import React from 'react';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import './AboutMe.scss';
import ExpandIcon from "./../../Atoms/ExpandIcon";

const My_Skills = [
    {desc: 'working experience with React, Redux and Redux Saga', exper: '2+ years'},
    {desc: 'knowledge of JavaScript, ES6', exper: '3 years'},
    {desc: 'working experience with Git', exper: '3 years'},
    {desc: 'strong knowledge of HTML5, CSS3, Bootstrap', exper: '3 years'},
    {desc: 'working experience with  AngularJS', exper: '2 years'},
    {desc: 'working experience with  Angular 2+', exper: '1 year'},
    {desc: 'Linux Bash', exper: ''},
];

function SkillsList (props: any) {
    return <>
        {
            props.map((item: any) => {
                return <div className="List_item" key={item.desc}>
                    <div className="first_subItem">{item.desc}</div>
                    <div className="second_subItem">{item.exper}</div>
                </div>
            })
        }
    </>
}

function AboutMe() {

    return (
        <div className="rootAboutMe">
            <h2>About Me</h2>

            <div className="Main_info">
                <div className="Main_info_text_block">
                    <div className="Main_info_name">Dmytro Yesin</div>
                    <div className="Main_info_else">26.06.1994</div>
                    <div className="Main_info_else">Phone: +380507768418</div>
                    <div className="Main_info_else">Gmail: dmytroyesin@gmail.com</div>
                </div>
                <div className="Main_info_picture_block">
                    <img src="/images/Yesin_Avatar.jpg" alt="Avatar" />
                </div>
            </div>

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

                            {SkillsList(My_Skills)}

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

                        <div className="Accordion_list">
                            <div className="prev_jobs_item">
                                <div className="jobs_item_title">
                                    <div className="jobs_item_title-position">Front-End developer</div>
                                    <div className="jobs_item_title-company">Navinox, Kyiv (Software developing)</div>
                                    <div className="jobs_item_title-company">07.2019 – now</div>
                                </div>
                                <div className="jobs_item_description">

                                </div>
                            </div>
                        </div>
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