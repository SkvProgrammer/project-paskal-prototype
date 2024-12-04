import React from 'react'
import '../App.css'
function Main() {
  return (
    <div classNameName="main-content">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://techsourcecanada.ca/images/blog/26/Avocor-Future-Trends-2.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://technoarete.org/computer-applications-in-technology/images/computer-technology.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Main
