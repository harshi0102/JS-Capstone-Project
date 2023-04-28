const reservationCounter = require('../src/Modules/reservationCounter.js');

describe('reservationCounter', () => {
  it('should return the number of reservations', () => {
    const post = {
      username: 'My Post',
      order: [
        { id: 1, orders: '2020-10-15 - 2020-10-16 || by Michel Owther' },
        { id: 2, orders: '2023-05-02 - 2023-05-04 || by salim' },
        { id: 3, orders: '2023-05-01 - 2023-05-02 || by Jack Mahh' },
      ],
    };
    const result = reservationCounter(post);
    expect(result).toBe(0);
  });

  it('should return 0 when there are no comments', () => {
    const post = {
      title: 'My Post',
      content: 'This is my post',
      reservation: [],
    };
    const result = reservationCounter(post);
    expect(result).toBe(0);
  });

  it('should return 0 when post is undefined', () => {
    const post = undefined;
    const result = reservationCounter(post);
    expect(result).toBe(0);
  });

  it('should return 0 when post.comments is undefined', () => {
    const post = {
      title: 'My Post',
      content: 'This is my post',
      reservation: undefined,
    };
    const result = reservationCounter(post);
    expect(result).toBe(0);
  });
});
