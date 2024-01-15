window.onload = (e) => {
  const root = document.getElementById('root');
  const rootContainer = document.getElementById('root-container');
  const game = document.getElementById('game-canvs');
  const gameStats = document.getElementById('game_stats');


  const openModalGloify = document.querySelector("[data-open-modal-gloify]")
  const closeModalGloify = document.querySelector('[data-close-modal-gloify]')
  const closeOverlayGloify = document.querySelector('[data-close-overlay-gloify]')
  const modalGloify = document.querySelector("[data-modal-gloify]")
  const overlay = document.querySelector("[data-overlay]")
  
  if (openModalGloify) {
    openModalGloify.addEventListener("click", () => {
      modalGloify.classList.add("open")
      overlay.classList.add("open")
    })
  }
  
  if(closeModalGloify) {
    closeModalGloify.addEventListener("click", () => {
      modalGloify.classList.remove("open")
      overlay.classList.remove("open")
    })
  }

  if(closeOverlayGloify) {
    closeOverlayGloify.addEventListener("click", () => {
      modalGloify.classList.remove("open")
      overlay.classList.remove("open")
    })
  }


  const openButton = document.querySelector('[data-open-modal-game]')
  const closeButton = document.querySelector('[data-close-modal-game]')
  const modalGame = document.querySelector('[data-modal-game]')
  const overlayGame = document.querySelector('[data-overlay-game]')
  const closeGameButton = document.getElementById('close-game-button')
  const GameInfoButton = document.getElementById('game-info-button')

  openButton.addEventListener('click', () => {
    modalGame.classList.add('open')
    overlayGame.classList.add('open')
    modalGame.classList.remove('close')
    overlayGame.classList.remove('close')
    rootContainer.style.visibility = 'hidden'
    // init()
  })

  closeButton.addEventListener('click', () => {
    modalGame.classList.add('close')
    overlayGame.classList.add('close')
    modalGame.classList.remove('open')
    overlayGame.classList.remove('open')
    game.style.visibility = 'visible'
    gameStats.style.visibility = 'visible'
  })

  closeGameButton.addEventListener('click', () => {
    rootContainer.style.visibility = 'visible'
    game.style.visibility = 'hidden'
    gameStats.style.visibility = 'hidden'
  })

  GameInfoButton.addEventListener('click', () => {
    modalGame.classList.add('open')
    overlayGame.classList.add('open')
    modalGame.classList.remove('close')
    overlayGame.classList.remove('close')
  })

  // const TYPING_SPEED = 50;
  // let $targetList;

  // const init = () => {
  //   $targetList = document.querySelectorAll('[data-js="typing"]');
  //   setup();
  //   run();
  // }

  // const setup = () => {
  //   for (const $dom of $targetList) {
  //     const textList = $dom.innerText.split('');
  //     let   html     = '';
  //     for (const char of textList) {
  //       html += `<span class="type-text">${char}</span>`;
  //     }
  //     $dom.innerHTML = html;
  //   }
  // }

  // const run = () => {
  //   let delay = 0;
  //   for (let i = 0; i < $targetList.length; i++) {
  //     const $target = $targetList[i];
  //     const $chars  = $target.querySelectorAll('span');

  //     for (let l = 0; l < $chars.length; l++) {
  //       const $char = $chars[l];
  //       const text  = $char.textContent;

  //       delay += TYPING_SPEED;
  //       if (text === ' ') delay += TYPING_SPEED * 2;

  //       const animate = () => {
  //         $char.style.display = 'inline-block';
  //       }

  //       setTimeout(animate,delay);

  //       if ($chars.length - 1 <= l) {
  //         delay += TYPING_SPEED * 4;
  //         setTimeout(() => $target.style.display = 'block',delay);
  //       }
  //     }
  //   }
  // }

}


function handleTabClick(params) {
  const allContent = document.getElementsByClassName('section-container')
  for (let i = 0; i < allContent.length; i++) {
    const element = allContent[i];
    element.classList.remove('section-active')
  }
  const element = document.getElementById(params);

  element.classList.add('section-active')
  console.log(params)
}
