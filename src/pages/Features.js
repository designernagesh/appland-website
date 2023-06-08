import FeatureItem from '../components/FeatureItem';
import data from '../data/data';

function Features() {
  return (
    <div id="features">
      <div className="a-container">
        {
            data.map( (item, i) => {
                return (
                    <FeatureItem key={i} item={item} />
                )
            })
        }
      </div>
    </div>
  );
}

export default Features;
