const commentsCounter = require('../src/Modules/commentsCounter.js');

describe('commentsCounter', () => {
  it('should return the number of comments', () => {
    const post = {
      title: 'My Post',
      content: 'This is my post',
      comments: [
        { id: 1, text: 'Great post!' },
        { id: 2, text: 'I enjoyed reading this.' },
        { id: 3, text: 'Thanks for sharing.' },
      ],
    };
    const result = commentsCounter(post);
    expect(result).toBe(3);
  });

  it('should return 0 when there are no comments', () => {
    const post = {
      title: 'My Post',
      content: 'This is my post',
      comments: [],
    };
    const result = commentsCounter(post);
    expect(result).toBe(0);
  });

  it('should return 0 when post is undefined', () => {
    const post = undefined;
    const result = commentsCounter(post);
    expect(result).toBe(0);
  });

  it('should return 0 when post.comments is undefined', () => {
    const post = {
      title: 'My Post',
      content: 'This is my post',
      comments: undefined,
    };
    const result = commentsCounter(post);
    expect(result).toBe(0);
  });
});
