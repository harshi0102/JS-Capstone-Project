import { addLike, fetchLikes } from './addLike.js';
import { itemsCounter } from './itemCounter.js';

const cards = document.getElementById('cards');

const renderCards = (array) => {
  let htmlToAppend = '';
  array.forEach((data) => {
    const card = `
          <div id="${
  data.key
}" class="flex flex-col gap-2 p-4 h-full rounded-2xl bg-[#1C1F26] drop-shadow-md border-2 border-[#a8b3cf33;] hover:border-[#a8b3cf50;]">
            <div class="w-full h-[250px] rounded-lg">
              <img class="h-[250px] w-auto mx-auto" src="${
  data.images?.coverart || data.images?.background
}" />
            </div>
            <div class="flex flex-col gap-2 justify-between">
              <h2 class="font-semibold capitalize custom-title">${
  data.title.length < 28 ? data.title : `${data.title.substring(0, 25)}...`
}</h2>
              <div class="flex flex-col gap-1 justify-between">
                <div class="flex justify-between p-1 items-center">
                  <img class="h-[20px] color-white" src="./assets/adore.svg" alt="" />
                  <span id="like-${data.key}" class="text-sm">no likes</span>
                </div>
                <button class="btn flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]">
                  <img class="h-[20px] color-white" src="./assets/comment.svg" alt="" />
                  <span class="text-sm">no comment</span>
                </button>
                <button class="btn-2 bg-[#ffffff10] p-1 rounded text-center cursor-pointer hover:bg-[#ffffff20]">
                  order now
                </button>
              </div>
            </div>
          </div>
        `;
    htmlToAppend += card;
  });

  cards.innerHTML = htmlToAppend;

  fetchLikes().then((showLikes) => {
    array.forEach((data) => {
      const likeNbr = document.getElementById(`like-${data.key}`);

      const item = showLikes.find((item) => item.item_id === data.key);
      likeNbr.innerHTML = item ? `${item.likes} likes` : 'No like yet';
    });
  });

  array.forEach((data) => {
    const { key } = data;
    const likeNbr = document.getElementById(`like-${key}`);
    const likeBtn = likeNbr.parentElement.querySelector('img');

    likeBtn.addEventListener('click', () => {
      addLike(key, likeNbr);
      likeBtn.setAttribute('src', './assets/adoreRed.svg');
    });
  });
  itemsCounter()
};

export default renderCards;