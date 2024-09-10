import { Col } from "react-bootstrap"
import './projectcard.css'

export const ProjectCard=(({title,link,tech,desc,img })=>{
    const goto=(link)=>{
        window.open(link, '_blank');
        
    }
    return (
        <Col sm={6} md={6} className="card">
            <div className="proj-imgbx">
                <img className="img" src={img} alt="" onClick={()=>goto(link)} />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <div className="tech">Technology: {tech}</div>
                    <span>{desc}</span>
                </div>
            </div>
        </Col>
        
    )
})
