function About({image, title, btnText}) {
  return (
    <section id="about">
        <div className="about-image">
            <img src={image} alt={title} />	
        </div>
        <div className="about-text">
            <h2>{ title }</h2>         
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur, eros a dapibus ullamcorper, arcu purus accumsan nunc, nec imperdiet leo lacus sit amet urna. Etiam eu ornare tellus. Praesent sed neque dapibus, ultrices risus in, convallis turpis. Curabitur ornare mauris in pulvinar viverra. Suspendisse elementum, massa molestie blandit lobortis, erat lectus dignissim enim, vel consectetur magna odio in lacus. Fusce commodo et ex vel scelerisque.</p>
            <button>{ btnText }</button>
        </div>
            
    </section>
  );
}

export default About;
