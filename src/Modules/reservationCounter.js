const reservationCounter = (post) => {
  if (!post || !post.reserve || post.reserve.length === 0) {
    return 0;
  }
  const reserve = post.order.filter(
    (orders) => orders.text && orders.text.trim() !== '',
  );
  return reserve.length;
};
module.exports = reservationCounter;
