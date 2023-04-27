const getComments = async (itemId) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/reservations?item_id=${itemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};


const addComment = async (itemId, name, date_start, date_end) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: itemId,
      username: name,
      date_start: date_start,
      date_end: date_end,
    }),
  });
};

const reservationPopUp = () => {
  const reservBtn = Array.from(document.getElementsByClassName('btn-2'));
  const comments = JSON.parse(localStorage.getItem('comments')) || {};
  const pop = document.querySelector('.reserv-pop');
  pop.setAttribute('style', 'display: none;');

  const createPopup = (data) => {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close-btn', 'text-4xl', 'py-2', 'cursor-pointer', 'text-right');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
      popup.remove();
      pop.setAttribute('style', 'display: none;');
    });

    const popupImgContainer = document.createElement('div');
    popupImgContainer.classList.add('img-container');

    const popupImg = document.createElement('img');
    popupImg.src = data.images?.coverart || data.images?.background;

    const popupTitle = document.createElement('h3');
    popupTitle.classList.add('text-3xl', 'font-bold');
    popupTitle.innerHTML = data.title;

    const commentsTitle = document.createElement('h3');
    const comments = getComments(data.key);
    commentsTitle.textContent = `Reservation (${comments[data.title] ? comments[data.title].length : 0})`;

    const commentList = document.createElement('ul');
    commentList.classList.add('comment-list');
    if (comments[data.title]) {
      comments[data.title].forEach((comment) => {
        const commentItem = document.createElement('li');
        commentItem.innerHTML = `<strong>${comment.comment} : </strong>  ${comment.name}`;
        commentList.appendChild(commentItem);
      });
    } else {
      const noCommentItem = document.createElement('li');
      noCommentItem.innerHTML = 'No reservations yet';
      commentList.appendChild(noCommentItem);
    }

    const formTitle = document.createElement('h3');
    formTitle.innerHTML = 'Add a reservation';

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.classList.add('comment-input');
    commentInput.placeholder = 'Your name';

    const nameInput = document.createElement('input');
    nameInput.type = 'date';
    nameInput.classList.add('name-input');
    nameInput.placeholder = 'Start Date';

    const endInput=document.createElement('input');
    endInput.type='date';
    endInput.classList.add('end-Input');
    endInput.placeholder="End Date";


    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerHTML = 'Reserve';

    const form = document.createElement('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const commentInput = event.target.querySelector('.comment-input');
      const startDate = commentInput.value.trim();
      const nameInput = event.target.querySelector('.name-input');
      const name = nameInput.value.trim();
      const endInput = document.querySelector('.end-Input');
      const endDate = endInput.value.trim();
      console.log('type ---->', typeof(startDate), typeof(name), typeof(endDate))
      if (startDate) {
        addComment(data.key, name, startDate, endDate);
        const comments =  getComments(data.key);

        const commentItem = document.createElement('li');
        commentItem.innerHTML = `<strong>${startDate}:</strong> ${name}`;
        commentList.appendChild(commentItem);

        commentsTitle.textContent = `Reservations (${comments.length})`;
        commentInput.value = '';
        nameInput.value = '';
        endInput.value = '';
      }
    });

    form.appendChild(commentInput);
    form.appendChild(nameInput);
    form.appendChild(endInput);
    form.appendChild(submitBtn);

    const popupHeader = document.createElement('div');
    popupHeader.classList.add('popup-header');
    popupHeader.appendChild(closeBtn);

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupImgContainer.appendChild(popupImg);
    popupContent.appendChild(popupImgContainer);
    popupContent.appendChild(popupTitle);
    popupContent.appendChild(commentsTitle);
    popupContent.appendChild(commentList);
    popupContent.appendChild(formTitle);
    popupContent.appendChild(form);

    popup.appendChild(popupHeader);
    popup.appendChild(popupContent);
    pop.appendChild(popup);
  };

  reservBtn.forEach((reserveBtn) => {
    reserveBtn.addEventListener('click', async () => {
      pop.setAttribute('style', 'display: block;');
      const cardKey = reserveBtn.parentNode.parentNode.parentNode.id;
      const data = JSON.parse(localStorage.getItem('songs')).find((song) => song.key === cardKey);
      createPopup(data);
    });
  });
};

export default reservationPopUp;