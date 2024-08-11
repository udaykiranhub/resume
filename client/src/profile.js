import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import profileImage from './profileimage.jpeg'; // Uncomment and update the path to your profile image
import "./profile.css";
const Profile = () => {
  return (
<div className='profile'>

<Container className="my-5" style={{"padding":"50px 50px 50px 50px"}}>
    
      
    <Card className="p-3 shadow-lg" style={{ transition: 'transform 0.2s' }}>
      <Card.Body>
        <div className="text-center">
<center>    <Image  src={profileImage}   className="mb-3" style={{  width: '150px',height: '150px',
borderRadius:"50%",
              objectFit: 'cover',
              border: '5px solid #ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          /></center>
        </div>
        <Card.Title className="text-center">
       <center>   
          <h1>Uday Kiran Pedda</h1>
       
       
       </center>
        </Card.Title>
        <Card.Text className="text-center mb-3">
    <center>  
      <p><strong>Date of Birth:</strong> July 9, 2004</p>
    
     <p><strong>email:</strong>peddaudaykiran1@gmail.com</p>
     <p><strong>Phone:</strong>6305355185</p>
    
    </center>
        </Card.Text>
        <Card.Text>
          <h5>Summary</h5>
          <p>
            I am a passionate MERN Stack developer and Ethereum blockchain Web3 developer with a knack for solving complex problems. With a strong foundation in full-stack development and blockchain technology, I have successfully completed several projects independently. My skills include writing smart contracts using Solidity, building responsive web applications, and continuous learning to stay updated with the latest technological advancements.
          </p>
          <p>
            I pride myself on my creative thinking and problem-solving skills, which I apply to develop innovative solutions. My goal is to contribute to impactful projects and collaborate with like-minded professionals in the tech industry.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>


</Container>
</div>
  );
};

export default Profile;
