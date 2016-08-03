'use strict'

let express = require('express');
let router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json({
      "all_purchased_regions": {
      "data": [
        "Ahuara",
        "Ahipara",
        "Ahiti",
        "Balclutha",
        "Balfour",
        "Barrhill"
      ],
        "href": "/widgets/all_purchased_regions",
        "widget_name": "all_purchased_regions"
    },
      "domestic_visitor_demographics": {
      "data": [
        {
          "average_stay": "2 nights",
          "liftstyle": "Leading Lifestyles",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "liftstyle": "Metrotechs",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "liftstyle": "Today's Families",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "liftstyle": "Kiwi Achievers",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "liftstyle": "Getting By",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "liftstyle": "Others",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        }
      ],
        "href": "/widgets/domestic_visitor_demographics",
        "widget_name": "domestic_visitor_demographics"
    },
      "domestic_visitor_demographics_detail": {
      "data": [
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 12m",
          "name": "Leading Lifestyles",
          "percentage_change": "+5%",
          "return_visitors": "4%",
          "total": "1,345"
        },
        {
          "avg_stay_in_region": "1 nights",
          "dwell_time": "56m",
          "name": "Metrotechs",
          "percentage_change": "-4%",
          "return_visitors": "7%",
          "total": "1,211"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 02m",
          "name": "Today's Families",
          "percentage_change": "-1%",
          "return_visitors": "3%",
          "total": "865"
        },
        {
          "avg_stay_in_region": "1 nights",
          "dwell_time": "49m",
          "name": "Kiwi Achiever's",
          "percentage_change": "+7%",
          "return_visitors": "1%",
          "total": "456"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 14m",
          "name": "Getting By",
          "percentage_change": "-4%",
          "return_visitors": "0%",
          "total": "212"
        },
        {
          "avg_stay_in_region": "1 nights",
          "dwell_time": "1h 05m",
          "name": "Golden Years",
          "percentage_change": "+6%",
          "return_visitors": "2%",
          "total": "98"
        }
      ],
        "href": "/widgets/domestic_visitor_demographics_detail",
        "widget_name": "domestic_visitor_demographics_detail"
    },
      "domestic_visitor_origin": {
      "data": [
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 12m",
          "name": "Auckland",
          "percentage_change": "+5%",
          "return_visitors": "4%",
          "total": "876"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 34m",
          "name": "Christchurch",
          "percentage_change": "-4%",
          "return_visitors": "7%",
          "total": "674"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 02m",
          "name": "Tauranga",
          "percentage_change": "-1%",
          "return_visitors": "3%",
          "total": "598"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 06m",
          "name": "Wellington",
          "percentage_change": "+7%",
          "return_visitors": "1%",
          "total": "512"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 42m",
          "name": "Rotorua",
          "percentage_change": "-4%",
          "return_visitors": "0%",
          "total": "432"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "32m",
          "name": "Other",
          "percentage_change": "+6%",
          "return_visitors": "2%",
          "total": "323"
        }
      ],
        "href": "/widgets/domestic_visitor_origin",
        "widget_name": "domestic_visitor_origin"
    },
      "international_visitor_origin": {
      "data": [
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 12m",
          "name": "United States",
          "percentage_change": "+5%",
          "total": "876"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 34m",
          "name": "China",
          "percentage_change": "-4%",
          "total": "674"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 02m",
          "name": "United Kingdom",
          "percentage_change": "-1%",
          "total": "598"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 06m",
          "name": "Japan",
          "percentage_change": "+7%",
          "total": "512"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "1h 42m",
          "name": "Australia",
          "percentage_change": "-4%",
          "total": "432"
        },
        {
          "avg_stay_in_region": "2 nights",
          "dwell_time": "32m",
          "name": "Other",
          "percentage_change": "+6%",
          "total": "323"
        }
      ],
        "href": "/widgets/international_visitor_origin",
        "widget_name": "international_visitor_origin"
    },
      "location_visited_before_and_after": {
      "data": {
        "after": [
          {
            "count": 7623,
            "name": "Auckland"
          },
          {
            "count": 7623,
            "name": "Christchurch"
          },
          {
            "count": 7623,
            "name": "Wellington"
          },
          {
            "count": 7623,
            "name": "Napier"
          },
          {
            "count": 7623,
            "name": "Others"
          }
        ],
          "before": [
          {
            "count": 7623,
            "name": "Auckland"
          },
          {
            "count": 7623,
            "name": "Christchurch"
          },
          {
            "count": 7623,
            "name": "Wellington"
          },
          {
            "count": 7623,
            "name": "Napier"
          },
          {
            "count": 7623,
            "name": "Others"
          }
        ],
          "month": "June",
          "region_name": "Rotorua",
          "visitor_count": "9,345"
      },
      "href": "/widgets/location_visited_before_and_after",
        "widget_name": "location_visited_before_and_after"
    },
      "market_share": {
      "data": [
        {
          "all_visitor_to_rotorua": "9,122",
          "all_visitor_to_rotorua_percentage": "6.5%",
          "domestic_visitors": "5,473",
          "domestic_visitors_percentage": "3.9%",
          "international_visitors": "3,738",
          "international_visitors_percentage": "2.6%",
          "name": "Location 1"
        },
        {
          "all_visitor_to_rotorua": "14,034",
          "all_visitor_to_rotorua_percentage": "10%",
          "domestic_visitors": "6,487",
          "domestic_visitors_percentage": "5.2%",
          "international_visitors": "5,607",
          "international_visitors_percentage": "3.8%",
          "name": "Location 2"
        },
        {
          "all": 33767,
          "domestic": 16208,
          "international": 17558,
          "months": "June"
        },
        {
          "all": 18832,
          "domestic": 9039,
          "international": 9792,
          "months": "July"
        },
        {
          "all": 40142,
          "domestic": 19268,
          "international": 20873,
          "months": "August"
        },
        {
          "all": 16365,
          "domestic": 7855,
          "international": 8509,
          "months": "September"
        },
        {
          "all": 3730,
          "domestic": 1790,
          "international": 1939,
          "months": "October"
        },
        {
          "all": 35767,
          "domestic": 17168,
          "international": 18598,
          "months": "November"
        },
        {
          "all": 37482,
          "domestic": 17991,
          "international": 19490,
          "months": "December"
        },
        {
          "all": 20495,
          "domestic": 9837,
          "international": 10657,
          "months": "January"
        },
        {
          "all": 9705,
          "domestic": 4658,
          "international": 5046,
          "months": "February"
        },
        {
          "all": 24195,
          "domestic": 11613,
          "international": 12581,
          "months": "March"
        },
        {
          "all": 19173,
          "domestic": 9203,
          "international": 9969,
          "months": "April"
        },
        {
          "all": 27230,
          "domestic": 13070,
          "international": 14159,
          "months": "May"
        },
        {
          "all": 48398,
          "domestic": 23231,
          "international": 25166,
          "months": "June"
        }
      ],
        "href": "/widgets/market_share",
        "widget_name": "market_share"
    },
      "media_usage_by_demographic": {
      "data": [],
        "href": "/widgets/media_usage_by_demographic",
        "widget_name": "media_usage_by_demographic"
    },
      "recently_viewed_regions": {
      "data": [
        "Rotorua",
        "Auckland",
        "Wellington"
      ],
        "href": "/widgets/recently_viewed_regions",
        "widget_name": "recently_viewed_regions"
    },
      "region_lat_long": {
      "data": [
        {
          "average_dwell_time": "2 days",
          "latitude": -36.8485,
          "longitude": 174.7633,
          "name": "Auckland",
          "percentage_return_visitors": "7%",
          "total_vistors": "160,234"
        },
        {
          "average_dwell_time": "2 days",
          "latitude": -41.2865,
          "longitude": 174.7762,
          "name": "Wellington",
          "percentage_return_visitors": "7%",
          "total_vistors": "160,234"
        }
      ],
        "href": "/widgets/region_lat_long",
        "widget_name": "region_lat_long"
    },
      "visitor_arrival_times": {
      "data": [
        {
          "midweek": 50,
          "time": "10am",
          "weekend": 80
        },
        {
          "midweek": 50,
          "time": "11am",
          "weekend": 120
        },
        {
          "midweek": 70,
          "time": "12pm",
          "weekend": 180
        },
        {
          "midweek": 60,
          "time": "1pm",
          "weekend": 170
        },
        {
          "midweek": 85,
          "time": "2pm",
          "weekend": 165
        },
        {
          "midweek": 70,
          "time": "3pm",
          "weekend": 80
        },
        {
          "midweek": 130,
          "time": "4pm",
          "weekend": 40
        },
        {
          "midweek": 10,
          "time": "5pm",
          "weekend": 10
        }
      ],
        "href": "/widgets/visitor_arrival_times",
        "widget_name": "visitor_arrival_times"
    },
      "visitor_dwell_time": {
      "data": [
        {
          "time": 2600,
          "window": "<1h"
        },
        {
          "time": 1200,
          "window": "1h"
        },
        {
          "time": 400,
          "window": "2h"
        },
        {
          "time": 200,
          "window": "3h"
        },
        {
          "time": 30,
          "window": ">4h"
        }
      ],
        "href": "/widgets/visitor_dwell_time",
        "widget_name": "visitor_dwell_time"
    },
      "visitor_numbers": {
      "data": {
        "all_visitors": "160,234",
          "domestic_visitors": "96,478",
          "domestic_visitors_percentage": "48%",
          "international_visitors": "63,756",
          "international_visitors_percentage": "52%",
          "percentage_change": "-2.5%",
          "returning_visitors": "7,534",
          "returning_visitors_percentage": "9%"
      },
      "href": "/widgets/visitor_numbers",
        "widget_name": "visitor_numbers"
    },
      "visitor_origin": {
      "data": [
        {
          "average_stay": "2 nights",
          "regions": "Auckland",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "regions": "Christchurch",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "regions": "Tauranga",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "regions": "Wellington",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "regions": "Napier",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        },
        {
          "average_stay": "2 nights",
          "regions": "Others",
          "return_visitors": "7%",
          "total": 7623,
          "transport_mode": "car"
        }
      ],
        "href": "/widgets/visitor_origin",
        "widget_name": "visitor_origin"
    },
      "visitors_over_time": {
        "data": [
          {
            "all": 33767,
            "domestic": 16208,
            "international": 17558,
            "months": "June"
          },
          {
            "all": 18832,
            "domestic": 9039,
            "international": 9792,
            "months": "July"
          },
          {
            "all": 40142,
            "domestic": 19268,
            "international": 20873,
            "months": "August"
          },
          {
            "all": 16365,
            "domestic": 7855,
            "international": 8509,
            "months": "September"
          },
          {
            "all": 3730,
            "domestic": 1790,
            "international": 1939,
            "months": "October"
          },
          {
            "all": 35767,
            "domestic": 17168,
            "international": 18598,
            "months": "November"
          },
          {
            "all": 37482,
            "domestic": 17991,
            "international": 19490,
            "months": "December"
          },
          {
            "all": 20495,
            "domestic": 9837,
            "international": 10657,
            "months": "January"
          },
          {
            "all": 9705,
            "domestic": 4658,
            "international": 5046,
            "months": "February"
          },
          {
            "all": 24195,
            "domestic": 11613,
            "international": 12581,
            "months": "March"
          },
          {
            "all": 19173,
            "domestic": 9203,
            "international": 9969,
            "months": "April"
          },
          {
            "all": 27230,
            "domestic": 13070,
            "international": 14159,
            "months": "May"
          },
          {
            "all": 48398,
            "domestic": 23231,
            "international": 25166,
            "months": "June"
          }
        ],
        "href": "/widgets/visitors_over_time",
        "widget_name": "visitors_over_time"
      },
      "visitors_over_time_compare": {
        "data": [
          {
            "all": 32767,
            "domestic": 16308,
            "international": 17158,
            "months": "June"
          },
          {
            "all": 19832,
            "domestic": 9639,
            "international": 9192,
            "months": "July"
          },
          {
            "all": 50142,
            "domestic": 11268,
            "international": 28873,
            "months": "August"
          },
          {
            "all": 26365,
            "domestic": 17855,
            "international": 2509,
            "months": "September"
          },
          {
            "all": 3330,
            "domestic": 1590,
            "international": 1139,
            "months": "October"
          },
          {
            "all": 35767,
            "domestic": 17168,
            "international": 18598,
            "months": "November"
          },
          {
            "all": 32482,
            "domestic": 11991,
            "international": 12490,
            "months": "December"
          },
          {
            "all": 20295,
            "domestic": 9237,
            "international": 11657,
            "months": "January"
          },
          {
            "all": 9205,
            "domestic": 4158,
            "international": 5346,
            "months": "February"
          },
          {
            "all": 21195,
            "domestic": 12613,
            "international": 13581,
            "months": "March"
          },
          {
            "all": 19273,
            "domestic": 9203,
            "international": 9169,
            "months": "April"
          },
          {
            "all": 21230,
            "domestic": 12070,
            "international": 17159,
            "months": "May"
          },
          {
            "all": 41398,
            "domestic": 29231,
            "international": 21166,
            "months": "June"
          }
        ],
        "href": "/widgets/visitors_over_time",
        "widget_name": "visitors_over_time"
      }
    });
  });

module.exports = router;
