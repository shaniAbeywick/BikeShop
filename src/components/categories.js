import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';


const categoriesData = [
  {
    id: 1,
    link: '#product',
    image: require('../assets/images/img2.jpg'),
    title: 'Children Bikes',
    subtitle: 'See More'
  },
  {
    id: 2,
    link: '#product',
    image: require('../assets/images/img3.jpg'),
    title: 'Electric Bikes',
    subtitle: 'See More'
  },
  {
    id: 3,
    link: '#product',
    image: require('../assets/images/img4.jpg'),
    title: 'Gravel Bikes',
    subtitle: 'See More'
  },
  {
    id: 3,
    link: '#product',
    image: require('../assets/images/img5.jpg'),
    title: 'Mountain Bikes',
    subtitle: 'See More'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppCategories() {
  return (
    <section id="categories" className="block categories-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Categories</h2>
          <div className="subtitle">Our Bicycle Categories</div>
        </div>
        <Row className='categorylist'>
          {
            categoriesData.map(categories => {
              return (
                <Col sm={3} key={categories.id}>
                  <div className='portfolio-wrapper'>
                    <a href={categories.link}>
                      <Image src={categories.image} />
                      <div className='label text-center'>
                        <h3>{categories.title}</h3>
                        <p>{categories.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppCategories;