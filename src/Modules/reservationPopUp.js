const getReservation = async (itemId) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/reservations?item_id=${itemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const addReservation = async (itemId, name, dateStart, dateEnd) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: itemId,
      username: name,
      dateStart,
      dateEnd,
    }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

const reservationPopUp = () => {
  const reservBtn = Array.from(document.getElementsByClassName('btn-2'));
  const pop = document.querySelector('.reserv-pop');
  pop.setAttribute('style', 'display: none;');

  const createPopup = async (data) => {
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
    const reservations = await getReservation(data.key);
    commentsTitle.textContent = `Reservations : (${reservations.length === 0 ? '0' : reservations.length})`;

    const commentList = document.createElement('ul');
    commentList.classList.add('comment-list');
    if (reservations.length > 0) {
      reservations.forEach((reservation) => {
        const commentItem = document.createElement('li');
        commentItem.innerHTML = `${reservation.date_start} - ${reservation.date_end} || by <strong> ${reservation.username}</strong>`;
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

    const endInput = document.createElement('input');
    endInput.type = 'date';
    endInput.classList.add('end-Input');
    endInput.placeholder = 'End Date';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerHTML = 'Reserve';

    const form = document.createElement('form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nameInput = event.target.querySelector('.comment-input').value.trim();

      const startDate = event.target.querySelector('.name-input').value.trim();
      const startDateFormat = new Date(startDate);

      const endDate = document.querySelector('.end-Input').value.trim();
      const endDateFormat = new Date(endDate);

      if (startDate) {
        addReservation(data.key, nameInput, startDateFormat, endDateFormat);

        const reservations = await getReservation(data.key);

        const commentItem = document.createElement('li');
        commentItem.innerHTML = `${startDate} - ${endDate} by </strong> ${nameInput} <strong>`;
        commentList.appendChild(commentItem);

        commentsTitle.textContent = `Reservations (${reservations.length === 0 ? '0' : reservations.length})`;

        // nameInput.value = '';
        // startDate.value = '';
        // endDate.value = '';
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