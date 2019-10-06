'use strict';

exports.numberOfDays = (checkin, checkout) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const checkIn = this.formatDate(checkin).split('/');
  const checkOut = this.formatDate(checkout).split('/');

  const checkInDate = new Date(checkIn[2], checkIn[1], checkIn[0]);
  const checkOutDate = new Date(checkOut[2], checkOut[1], checkOut[0]);

  const diffDays = Math.round(Math.abs((checkInDate - checkOutDate) / oneDay));
  return diffDays;
}

exports.formatDate = (date) => {
  return date.replace(/^(\d\d)(\d\d)(\d\d\d\d)$/, "$1/$2/$3");
}