import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../App.css"

const productData = [
  {
    id: 1,
    image: require('../assets/images/item1.jpg'),
    title: 'Bicycle1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/item2.jpg'),
    title: 'Bicycle2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/item3.png'),
    title: 'Bicycle3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.twitter.com'
  }
]

function AppProduct() {
  return (
    <section id="product" className="block product-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Children Bicycles</h2>
          <div className="subtitle">Check out our latest collection of kids bikes</div>
        </div>
        <Row>
          {
            productData.map(product => {
              return (
                <Col sm={4} key={product.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>

                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                          {product.description}
                        </Card.Text>
                        <a href={product.link} className="btn btn-primary">Buy Now <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppProduct;