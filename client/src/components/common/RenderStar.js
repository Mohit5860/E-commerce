import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faStarHalfAlt,
    faStar as faStarEmpty,
  } from "@fortawesome/free-solid-svg-icons";
  
  const RenderStars = ({rating}) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
  
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-gray-500" />
      );
    }
  
    if (halfStar === 1) {
      stars.push(
        <FontAwesomeIcon key="half" icon={faStarHalfAlt} className="text-gray-500" />
      );
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStarEmpty}
          className="text-gray-200"
        />
      );
    }
  
    return stars;
  };

export default RenderStars;