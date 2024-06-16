import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState(listOfRestaurant);
    const [searchText, setSearchText] = useState('');

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        const restaurantsList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurantsList);
        setFilteredRestaurantList(restaurantsList);
    }

    // // Post fetch data --> for lazyloading
    // const postData = async (url,) => { }

    if (!onlineStatus) {
        return (
            <h3>
                Looks like you are offline!! Please check your internet connection!
            </h3>
        );
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} onChange={(event) => { setSearchText(event.target.value) }} />
                    <button onClick={
                        () => {
                            const searchedList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurantList(searchedList);
                        }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = filteredRestaurantList.filter(res => res.info.avgRating > 4)
                    setFilteredRestaurantList(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            {!listOfRestaurant.length ? <Shimmer /> : (<div className="res-container">
                {filteredRestaurantList.map(res => <Link key={res.info.id} to={'/restaurants/' + res.info.id}> <RestaurantCard resData={res} /> </Link>)}
            </div>)}
        </div>
    );
}

export default Body;