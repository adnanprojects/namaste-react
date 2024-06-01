import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla: { deliveryTime }, cloudinaryImageId } = props.resData.info;
    return (
        <div className="res-card">
            <img className="res-img" alt="res-img" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <h4>{avgRating}</h4>
            <p>{deliveryTime} Minutes</p>
        </div>
    );
}

// fixed delivery time bug 
export default RestaurantCard;