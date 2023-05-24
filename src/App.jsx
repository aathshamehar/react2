import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import './Card.css'





const KeralaStateComponent = () => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };


    const cities = [
      {  id: 1, name: 'Kasarkod', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Kasrkod-beach-park-Honnavar.jpg/1200px-Kasrkod-beach-park-Honnavar.jpg' },
      {  id: 2, name: 'Kannur', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Muzhappilangad_Drive-in_Beach_2.jpg/1024px-Muzhappilangad_Drive-in_Beach_2.jpg' },
      {  id: 3, name: 'Calicut', image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRwnTyfBU1t9qnloBvM4AYe4eVXKmfztoyzesrlbOVQdjHGCoRIO7LU3jJJOPVpsUwEetTV0HiQMx7GYoA1eumymdp41Q' },
      {  id: 4, name: 'Wayanad', image: 'https://www.wayanad.com/files/menuboxes/108009770.jpg' },
      {  id: 5, name: 'Malappuram', image: 'https://cdn.s3waas.gov.in/s382aa4b0af34c2313a562076992e50aa3/uploads/2018/04/2018041752-2.jpg' },
      {  id: 6, name: 'Palakkad', image: 'https://www.tusktravel.com/blog/wp-content/uploads/2022/12/Malampuzha-Park-Palakkad-Kerala.jpg' },
      {  id: 7, name: 'Thrissur', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsc376BoB-Tnb7m10osDSXsV15oXL98UD4zMduln4AQ&usqp=CAU&ec=48665701' },
      {  id: 8, name: 'Kochi', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/f0/eb/backwater-tourism.jpg?w=700&h=-1&s=1' },
      {  id: 9, name: 'Alappuzha', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/1024px-Alappuzha_Boat_Beauty_W.jpg' },
      {  id: 10, name: 'Idukki', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Munnar_Top_station.jpg/1024px-Munnar_Top_station.jpg' },
      {  id: 11, name: 'Kollam', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/13_Arch_bridge_Kazhuthurutty_Kerala.jpg' },
      {  id: 12, name: 'Kottayam', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vembanad_Lake_at_Kumarakom.jpg/1280px-Vembanad_Lake_at_Kumarakom.jpg' },
      {  id: 13, name: 'Pathanamthitta', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/33kVsubstationperunad.jpeg/1280px-33kVsubstationperunad.jpeg' },
      {  id: 14, name: 'Thiruvananthapuram', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Padmanabhapuram_Clock_Tower.jpg/1280px-Padmanabhapuram_Clock_Tower.jpg' }
    ];
    const filteredCities = cities.filter(
      (city) =>
        city.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        city.id.toString().includes(filterValue)
    );
  
    return (
    <div className='bg-img'>
      <Container >
        <h1 className="text-center">KERALA STATE</h1>
  
        <Form.Group controlId="filterInput">
          <Form.Control
            type="text"
            placeholder="Filter by city or ID"
            value={filterValue}
            onChange={handleFilterChange}
          />
        </Form.Group>
  
        <Row>
          {filteredCities.map((city) => (
            <Col key={city.id} sm={12} md={6} lg={4} className="my-3" >
              <Card>
                <Card.Img  variant="top" src={city.image} alt={city.name}  style={{height: '13rem'}}/>
                <Card.Body>
                  <Card.Title>{city.name}</Card.Title>
                  <Card.Text>ID: {city.id}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    );
  };
  
  export default KeralaStateComponent;