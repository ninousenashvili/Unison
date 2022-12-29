//  slider

const swiper = new Swiper(".swiper", {
  // Optional parameters

  // If we need pagination

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-previous",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

// Appending button in top-block divs. online-shopping button

const block = document.querySelectorAll(".top-block-1");

function addBtn(block) {
  for (let i = 0; i < block.length; i++) {
    let button = document.createElement("button");
    button.innerText = "შეძენა";
    button.classList.add("online-button");
    block[i].append(button);
  }
}
addBtn(block);
