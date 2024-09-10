import React from 'react'
import Card from 'react-bootstrap/Card';
import hackdiva from '../../assets/achievements/hackdiva.jpg'

const AchievementCard = ({image, title, description}) => {
  return (
    <Card >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {/* <Card.Title>{title}</Card.Title> */}
        <Card.Text>
          {description}
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default AchievementCard