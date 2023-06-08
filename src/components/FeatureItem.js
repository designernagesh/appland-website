function FeatureItem({ item }) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="s-b-text">
	            <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    );
  }
  
  export default FeatureItem;
  