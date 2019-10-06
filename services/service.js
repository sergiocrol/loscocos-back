'use strict';

const url = require('url');
const data = require('../data/rooms.json');
const helpers = require('../helpers/helpers.js');

exports.getRooms = (req, res) => {
  const reqUrl = url.parse(req.url, true);

  // Get the info sent by user in the url query
  const roomArray = JSON.parse(JSON.stringify(data));
  let { adults, children, checkin, checkout, promo_code } = reqUrl.query;
  const people = (adults * 1) + (children * 1);
  const validCode = /THN(0[1-9]|[1-9]\d)$/;

  const applyFilters = (room) => {
    return (room.people >= people && !room.bookings.includes(helpers.formatDate(checkin)) &&
      !room.bookings.includes(helpers.formatDate(checkout))) ? true : false;
  }

  // Filter the JSON data by people, checkin and checkout
  const filteredRooms = roomArray.rooms.filter(room => applyFilters(room));

  // Only if exists the promo_code query and if it's valid, we modify the price of the room with the correct discount
  filteredRooms.forEach(room => {
    room.totalPrice = helpers.numberOfDays(checkin, checkout) * room.price;
    if (promo_code !== undefined && promo_code.match(validCode)) {
      const discount = promo_code.substring(promo_code.length - 2) * 1;
      room.totalPriceDiscount = room.totalPrice - (room.totalPrice * (discount / 100))
    }
  })

  const response = {
    rooms: filteredRooms
  }

  // Return the correct data, or 404 message if there is not any data with those query parameters
  if (filteredRooms.length > 0) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.end(JSON.stringify(response));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.end(JSON.stringify({ message: "No results" }));
  }
}

exports.invalidRequest = function (req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.end(JSON.stringify({ message: "Not Found" }));
};
