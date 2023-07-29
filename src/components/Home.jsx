import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <>
    <div style={{margin:60+'px'}}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                        alt="First slide" 
                    />
                    <Carousel.Caption>
                        <h1>Find Your Next Destination</h1>
                        <p></p>
                    </Carousel.Caption>
                    <p className='ref'>Photo by <a href="Author_Link">Sean Oulashin</a> on <a href="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80">Unsplash</a></p>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Where Will You Go Next</h1>   
                        <p></p>    
                    </Carousel.Caption>
                    <p className='ref'>Photo by <a href="Author_Link">Jeremy Bishop</a> on <a href="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80">Unsplash</a></p>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Explore New Destinations</h1>
                        <p></p>
                    </Carousel.Caption>
                    <p className='ref'>Photo by <a href="Author_Link">Roman Kraft</a> on <a href="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80">Unsplash</a></p>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Third slide" 
                    />
                    <Carousel.Caption>
                        <h1>Take The Next Step</h1>
                        <p></p>
                    </Carousel.Caption>
                    <p className='ref'>Photo by <a href="Author_Link">Spencer Davis</a> on <a href="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80">Unsplash</a></p>
            </Carousel.Item>
        </Carousel >
        </div>
        </>
    );
}

export default Home;