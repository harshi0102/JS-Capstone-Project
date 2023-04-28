// const reservationCounter = () => {
//     const reservationContainer = document.getElementById('comment-list');
//     const childCount = reservationContainer.childElementCount;
  
//     const charts = document.getElementById('reservation-counter');
//     charts.innerHTML = `Reservations (${childCount})`;
//   };


//   export default reservationCounter;

const reservationCounter = (post) => {
    if (!post || !post.reserve || post.reserve.length === 0) {
      return 0;
    }
    const reserve = post.order.filter((orders) => orders.text && orders.text.trim() !== '');
    return reserve.length;
  };
  module.exports = reservationCounter;
