import React, { useEffect } from 'react'
import {useState} from 'react'

import './projects.css'
import alaadin from '../../assets/project/alaadin.png'
import imageshala from '../../assets/project/imageshala.png'
import vidhyavani from '../../assets/project/vidhyavani.png'
import cookcrazi from '../../assets/project/cookcrazi.png'
import evolve from '../../assets/project/ev-olve.png'
import sawaalkhazana from '../../assets/project/sawaalkhazana.png'
import magicnotes from '../../assets/project/magicnotes.png'
import {Container, Row, Col, Nav, Tab} from 'react-bootstrap'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import colorSharp from '../../assets/img/color-sharp2.png'
const projects=[
  {
    title: 'Alaadin',
    link: 'https://alaadin.netlify.app/',
    tech:'React',
    desc:'This is a web app like gemini. It is made using react. It uses Google Gemini API for creating responses',
    img:alaadin

  },
  {
    title: 'Imageshala',
    link: 'http://image-shala-testing-1-1.onrender.com/',
    tech:'HTML, CSS, JS, ExpressJS, Cloudinary, MongoDB',
    desc:'A user centric website to make user aware of text to image generation. Some functionalities of website are: Some blogs to teach text to image generation, a library of free images on common topics, image generation tool, download generated image with imageshala logo, share generated image to community, users can take inspiration of text prompts andrespective images from community section',
    img:imageshala
  },
  {
    title: 'Vidhyavani',
    link: 'https://digtechjs.github.io/vidhyavani/',
    tech:'HTML, CSS, JS',
    desc:'This is a web app which have some bhajans.',
    img:vidhyavani
  },
  
  {
    title:'CookCrazi',
    link:'https://digtechjs.github.io/cookCrazi/',
    tech:'HTML, CSS, JS',
    desc:'A WebApp using which user can get random recipes, can save favorite recipes and search recipes.',
    img:cookcrazi
  },
  {
    title:'EV-olve',
    link:'https://ev-olve.netlify.app/',
    tech:'React',
    desc:'It is a landing page for a EV Car company',
    img:evolve

  },
  {
    title:'Sawaal Khazana',
    link:'https://sawaalkhazana.netlify.app/',
    tech:'React',
    desc:'This is a quiz app for where user have to choose one out of four options of questions. At last score of user will be displayed',
    img:sawaalkhazana

  },
  {
    title:'Magic Notes',
    link:'https://digtechjs.github.io/NotesMaker/',
    tech:'HTML, JS, Bootstrap',
    desc:'This is a website which is used to create note. You  can create notes, delete notes and search notes using their content',
    img:magicnotes

  }

];

export const Projects = () => {
  // //console.log(projects);
  let a=projects.length/3;
  const [activeKey, setActiveKey] = useState('first');
  
  const handleClick= (eventKey) => {
    console.log(eventKey);
    
    setActiveKey(eventKey);
  };
  

  return (
    <section className="project" id="projects">
      {/* <img src={colorSharp} alt="" className="background-image-left" /> */}
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey='first' >
                    <Nav variant="pills" defaultActiveKey='first' >
                      <Nav.Item>
                        <Nav.Link eventKey='first'  active={activeKey === 'first'}  onClick={()=>handleClick('first')} >Section A</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'  active={activeKey === 'second'} onClick={()=>handleClick('second')}>Section B</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'  active={activeKey === 'third'}   onClick={()=>handleClick('third')}>
                          Section C
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                      <Row>
                          {
                            
                            projects.filter((project,index)=>index<a-1)
                            .map((project,index)=>{
                              //console.log(project.title)
                              return (
                                <ProjectCard key={index} {...project}/>
                              
                              )
                              
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            
                            projects.filter((project,index)=>index<2*a-1&&index>=a-1)
                            .map((project,index)=>{
                              //console.log(project.title)
                              return (
                                <ProjectCard key={index} {...project}/>
                              
                              )
                              
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            
                            projects.filter((project,index)=>index>=2*a-1)
                            .map((project,index)=>{
                              //console.log(project.title)
                              return (
                                <ProjectCard key={index} {...project}/>
                              
                              )
                              
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        
    </section>
  )
}
