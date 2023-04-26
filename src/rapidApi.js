import commentsPopUp from './Modules/commentsPopUp.js';

const cards = document.getElementById('cards');

const getShazamTracks = async () => {
  const url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '093e23bdf9msh3bfd5f803bf6009p1e4395jsnb2a13a58d78b',
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result && result.tracks) {
      const songs = result.tracks;
      localStorage.setItem('songs', JSON.stringify(songs));
      let htmlToAppend = '';
      songs.forEach((data) => {
        const card = `
          <div
            class="flex flex-col gap-2 p-4 h-full rounded-2xl bg-[#1C1F26] drop-shadow-md border-2 border-[#a8b3cf33;] hover:border-[#a8b3cf50;]"
          >
            <div class="w-full h-[250px] rounded-lg">
              <img class="h-[250px] w-auto mx-auto" src="${data.images?.coverart || data.images?.background}" />
            </div>
            <div class="flex flex-col gap-2 justify-between">
              <h2 class="font-semibold capitalize">${data.title}</h2>
              <div class="flex flex-col gap-1 justify-between">
                <div class="flex justify-between p-1 items-center">
                  <img
                    class="h-[20px] color-white"
                    src="./assets/adore.svg"
                    alt=""
                  />
                  <span class="text-sm">no likes</span>
                </div>
                <button
                  class="btn flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]"
                >
                  <img
                    class="h-[20px] color-white"
                    src="./assets/comment.svg"
                    alt=""
                  />
                  <span class="text-sm">no comment</span>
                </button>
                <button
                  class="bg-[#ffffff10] p-1 rounded text-center cursor-pointer hover:bg-[#ffffff20]"
                >
                  order now
                </button>
              </div>
            </div>
          </div>
        `;
        htmlToAppend += card;
      });
      cards.innerHTML = htmlToAppend;
      commentsPopUp();
    } else {
      throw new Error('Failed to get Shazam tracks');
    }
  } catch (error) {
    throw new Error(error);
  }
};
export default getShazamTracks;
