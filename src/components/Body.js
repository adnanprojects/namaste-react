import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constant";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter" onClick={() => {
                const filteredList = listOfRestaurant.filter(res => res.info.avgRating >= 4)
                setListOfRestaurant(filteredList)
            }} >Top Rated Restaurant</div>
            <div className="res-container">
                {listOfRestaurant.map(res => <RestaurantCard resData={res} key={res.info.id} />)}
            </div>
        </div>
    );
}

export default Body;