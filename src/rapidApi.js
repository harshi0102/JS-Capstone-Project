const cards = document.getElementById('cards');

const getShazamTracks = async () => {
  const url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'd0af0bcdb1msh4547e68b9e65aa2p16dec0jsnbc6afde93c67',
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const songs = result.tracks;

    let htmlToAppend = '';

    songs.forEach((data) => {
      const card = `
                     
              <div
            class="flex flex-col gap-2 p-4 h-full rounded-2xl bg-[#1C1F26] drop-shadow-md border-2 border-[#a8b3cf33;] hover:border-[#a8b3cf50;]"
          >
            <div class="w-full h-[250px] rounded-lg">
            <img class="h-[250px] w-auto mx-auto" src="${
  data.images.coverart
    ? data.images.coverart
    : data.images.background
}" />
            </div>
            <div class="flex flex-col gap-2 justify-between">
              <h2 class="font-semibold capitalize">${
  data.title.length < 30
    ? data.title
    : `${data.title.slice(0, 27)}...`
}</h2>
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
                  class="flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]"
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
  } catch (error) {
    throw new Error(error);
  }
};

getShazamTracks();
