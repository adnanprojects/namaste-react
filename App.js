import React from "react";
import ReactDOM from 'react-dom/client';

/** Blueprint
 * Header
 *  - logo
 *  - Nav
 * Body
 *  - search
 *  - card container
 *      - cards
 * Footer
 *  - copyright
 *  - links
 *  - address
 */


// Restaurants List
const resList = [
    {
        "info": {
            "id": "608589",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Pandav Nagar",
            "areaName": "Mayur Vihar Phase 1",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4,
            "parentId": "721",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 05:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹189"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-pandav-nagar-mayur-vihar-phase-1-delhi-608589",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "636890",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "1st Phase",
            "areaName": "Mayur Vihar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "61955",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chinese-wok-1st-phase-mayur-vihar-delhi-636890",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "622567",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "qxq42n8xxlydk0o6p0hx",
            "locality": "V3S Mall",
            "areaName": "Laxmi Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
            ],
            "avgRating": 3.5,
            "parentId": "10804",
            "avgRatingString": "3.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 55,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-26 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-v3s-mall-laxmi-nagar-delhi-622567",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "462638",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "2nd Phase",
            "areaName": "Mayur Vihar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "2456",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 02:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-2nd-phase-mayur-vihar-delhi-462638",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "732151",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "7e526a0c0ed3cd56eefac3d318c78977",
            "locality": "Tirlokpuri",
            "areaName": "Mayur Vihar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.0",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-tirlokpuri-mayur-vihar-delhi-732151",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "581572",
            "name": "Wow! Momo",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
            "locality": "Gandhi Nagar",
            "areaName": "Pandav Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "parentId": "1776",
            "avgRatingString": "4.0",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-26 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chinese.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Momos.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Momos.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-gandhi-nagar-pandav-nagar-delhi-581572",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "637739",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "swjgkimjpp1sfs8bazp0",
            "locality": "1St Phase",
            "areaName": "Mayur Vihar Phase 1",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "parentId": "4961",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 06:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-1st-phase-mayur-vihar-phase-1-delhi-637739",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "10710",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "2nd Phase",
            "areaName": "Mayur Vihar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Salads",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "2",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-2nd-phase-mayur-vihar-delhi-10710",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "744442",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
            "locality": "Pandav nagar",
            "areaName": "Mayur Vihar",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.6",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nic-ice-creams-pandav-nagar-mayur-vihar-delhi-744442",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "538610",
            "name": "Ghar ka Khana by EatFit",
            "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
            "locality": "East Vinod nagar",
            "areaName": "Patparganj",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Home Food",
                "North Indian",
                "Healthy Food",
                "Thalis",
                "Desserts",
                "Indian",
                "Punjabi"
            ],
            "avgRating": 4.3,
            "parentId": "422576",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹169"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ghar-ka-khana-by-eatfit-east-vinod-nagar-patparganj-delhi-538610",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "685709",
            "name": "MOJO Pizza - 2X Toppings",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/d90c8be6-d0e9-4930-9057-7fda0485b06c_685709.JPG",
            "locality": "Patparganj",
            "areaName": "Pandav Nagar Main Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "11329",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-35 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-patparganj-pandav-nagar-main-road-delhi-685709",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "831391",
            "name": "Pastas By Pizza Hut",
            "cloudinaryImageId": "80ca62f0de020f8cbe39fd034d3325d5",
            "locality": "Pandav Nagar",
            "areaName": "Mayur Vihar Phase 1",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pastas"
            ],
            "avgRating": 3.1,
            "parentId": "306806",
            "avgRatingString": "3.1",
            "totalRatingsString": "7",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-pandav-nagar-mayur-vihar-phase-1-delhi-831391",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "226273",
            "name": "Nirula's",
            "cloudinaryImageId": "a66fa8f5befa65947d9e20f29a863ce0",
            "locality": "1St Phase",
            "areaName": "Mayur Vihar",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Ice Cream",
                "Pizzas",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "1738",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-26 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nirulas-1st-phase-mayur-vihar-delhi-226273",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "744443",
            "name": "Grameen Kulfi",
            "cloudinaryImageId": "930b886678eb9de74b5a3150bdd0f405",
            "locality": "Pandav nagar",
            "areaName": "Mayur Vihar",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "12175",
            "avgRatingString": "4.4",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/grameen-kulfi-pandav-nagar-mayur-vihar-delhi-744443",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "649005",
            "name": "FNP Cakes By Ferns N Petals",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/17/ab75faf9-46ad-4ab4-bd98-3811aeeac210_649005.jpg",
            "locality": "KHUDI RAM BOSE MARG",
            "areaName": "Mayur Vihar Phase 1",
            "costForTwo": "₹499 for two",
            "cuisines": [
                "Desserts",
                "Bakery",
                "Sweets",
                "Ice Cream",
                "Beverages",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "339638",
            "avgRatingString": "4.2",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-26 21:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/fnp-cakes-by-ferns-n-petals-khudi-ram-bose-marg-mayur-vihar-phase-1-delhi-649005",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "681660",
            "name": "LeanCrust Pizza- ThinCrust Experts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/6e9cae2a-4fd8-4404-ad1b-52fe165689e0_681660.JPG",
            "locality": "Mayur Vihar",
            "areaName": "Phase1",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "11216",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-35 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/leancrust-pizza-thincrust-experts-mayur-vihar-phase1-delhi-681660",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "538609",
            "name": "Great Indian Khichdi by EatFit",
            "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
            "locality": "East Vinod nagar",
            "areaName": "Patparganj",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Indian",
                "Home Food",
                "Healthy Food",
                "Snacks"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "319582",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-east-vinod-nagar-patparganj-delhi-538609",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "690601",
            "name": "Ovenfresh Cakes And Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/14/2d6f67fe-a8f7-48a7-8afb-2371c845632a_690601.jpg",
            "locality": "East Vinod Nagar",
            "areaName": "Mayur Vihar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Ice Cream",
                "Sweets",
                "Juices",
                "Bengali",
                "Pizzas"
            ],
            "avgRating": 4.5,
            "parentId": "1372",
            "avgRatingString": "4.5",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ovenfresh-cakes-and-desserts-east-vinod-nagar-mayur-vihar-delhi-690601",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "650503",
            "name": "NH1 Bowls - Highway To North",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/f59b5c08-1812-4492-80c5-734a02ed7b0e_650503.JPG",
            "locality": "Mayur Vihar",
            "areaName": "Phase1",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Punjabi",
                "Home Food"
            ],
            "avgRating": 4.5,
            "parentId": "22452",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-mayur-vihar-phase1-delhi-650503",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "650502",
            "name": "Mealful Rolls - India's Biggest Rolls",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/f59b5c08-1812-4492-80c5-734a02ed7b0e_650502.JPG",
            "locality": "Pandav Nagar Main Road",
            "areaName": "Mayur Vihar Phase 1",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Fast Food",
                "Snacks",
                "North Indian",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "10390",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-35 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-27 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mealful-rolls-indias-biggest-rolls-pandav-nagar-main-road-mayur-vihar-phase-1-delhi-650502",
            "type": "WEBLINK"
        }
    }
]

// Header
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}


// Body
const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = props.resData.info;
    return (
        <div className="res-card">
            <img className="res-img" alt="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <h4>{avgRating}</h4>
            <p>{deliveryTime} Minutes</p>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map(res => <RestaurantCard resData={res} key={res.info.id} />)}
            </div>
        </div>
    );
}

// Footer
const Footer = () => {
    return (
        <div className="footer">Footer</div>
    );
}

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);