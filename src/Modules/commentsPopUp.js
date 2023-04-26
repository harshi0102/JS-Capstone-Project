const commentsPopUp = () => {
  const likeBtns = Array.from(document.getElementsByClassName('btn'));
  const comments = JSON.parse(localStorage.getItem('comments')) || {};
  const pop = document.querySelector('.pop');
  pop.setAttribute('style', 'display: none;');

  const createPopup = (data) => {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => popup.remove());

    const popupImg = document.createElement('img');
    popupImg.src = data.images?.coverart || data.images?.background;

    const popupTitle = document.createElement('h3');
    popupTitle.innerHTML = data.title;

    const commentsTitle = document.createElement('h3');
    commentsTitle.textContent = `Comments (${comments[data.title] ? comments[data.title].length : 0})`;

    const commentList = document.createElement('ul');
    commentList.classList.add('comment-list');
    if (comments[data.title]) {
      comments[data.title].forEach((comment) => {
        const commentItem = document.createElement('li');
        commentItem.innerHTML = `<strong>${comment.name}:</strong> ${comment.comment}`;
        commentList.appendChild(commentItem);
      });
    } else {
      const noCommentItem = document.createElement('li');
      noCommentItem.innerHTML = 'No comments yet';
      commentList.appendChild(noCommentItem);
    }

    const formTitle = document.createElement('h3');
    formTitle.innerHTML = 'Add a comment';

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.classList.add('comment-input');
    commentInput.placeholder = 'Enter your name...';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('name-input');
    nameInput.placeholder = 'Enter a comment...';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerHTML = 'Comment';

    const form = document.createElement('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const commentInput = event.target.querySelector('.comment-input');
      const comment = commentInput.value.trim();
      const nameInput = event.target.querySelector('.name-input');
      const name = nameInput.value.trim();
      if (comment) {
        if (!comments[data.title]) {
          comments[data.title] = [];
        }
        comments[data.title].push({ name, comment });
        localStorage.setItem('comments', JSON.stringify(comments));

        const commentItem = document.createElement('li');
        commentItem.innerHTML = `<strong>${name}:</strong> ${comment}`;
        commentList.appendChild(commentItem);

        commentsTitle.textContent = `Comments (${comments[data.title].length})`;
        commentInput.value = '';
        nameInput.value = '';
      }
    });

    form.appendChild(commentInput);
    form.appendChild(nameInput);
    form.appendChild(submitBtn);

    const popupHeader = document.createElement('div');
    popupHeader.classList.add('popup-header');
    popupHeader.appendChild(closeBtn);

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.appendChild(popupImg);
    popupContent.appendChild(popupTitle);
    popupContent.appendChild(commentsTitle);
    popupContent.appendChild(commentList);
    popupContent.appendChild(formTitle);
    popupContent.appendChild(form);

    popup.appendChild(popupHeader);
    popup.appendChild(popupContent);
    pop.appendChild(popup);
  };

  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', async () => {
      pop.setAttribute('style', 'display: block;');
      const title = likeBtn.parentNode.parentNode.querySelector('h2').textContent;
      const data = JSON.parse(localStorage.getItem('songs')).find((song) => song.title === title);
      createPopup(data);
    });
  });
};

export default commentsPopUp;
