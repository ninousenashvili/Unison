// // online shop
// let topBlock = document.querySelector(".top-block-1");
// let topButton = document.createElement("button");
// topButton.innerText = "შეძენა";
// topButton.classList.add("topbottom");
// topBlock.appendChild(topButton);

// topBlock.addEventListener("mouseenter", function () {
//   topBlock.style.background = "green";
//   topBlock.classList.add("active-btn");
//   topBlock.appendChild(topButton);
// });

// topBlock.addEventListener("mouseout", function () {
//   topBlock.classList.remove("active-btn");
// // });

// let title = document.querySelector(".top-title");
// let div = document.createElement("div");
// let ulLIst = document.createElement("ul");
// let liList = document.createElement("li");
// liList.appendChild(title);
// ulLIst.appendChild(liList);

// let bottom = document.querySelector(".botttom-header");
// bottom.appendChild(ulLIst);

// let div = document.querySelectorAll(".top-block-1");
// div.addEventListener("mouseenter", function () {
//   let icon = document.querySelectorAll(".fa-sharp");
//   icon.style.color = "white";
// });
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

// აქ ვცდი შევქმნა მასივი და სლაიდერის ფოტოებს ჩავამატო
// let data = [
//   {
//     mainTitle: "ქონების დაზღვევა",
//     title: "ყველაზე ხელსაყრელი პირობებით",
//   },
//   {
//     mainTitle: "ავტო დაზღვევა",
//     title: "ყველაზე ხელსაყრელი პირობებით",
//   },
//   {
//     mainTitle: "ჯანმრთელობის დაზღვევა",
//     title: "ყველაზე ხელსაყრელი პირობებით",
//   },
// ];

// const slides = document.querySelector(".swiper-slide");
// function add(data) {
//   for (i = 0; i < slides.length; i++) {
//     // initially set the display to
//     // none for every image.
//     let tagtitle = document.createElement("h2");
//     tagtitle.classList.add("slider-main-title");
//     tagtitle.append(data[i].mainTitle);

//     //   sliderContent.append(tagtitle);
//     slides[i].append(tagtitle);
//   }
// }
// add(data);

// increase by 1, Global variable
// slideIndex++;
// const sliderContent = document.querySelectorAll(".swiper-slide");
// data.forEach((a) => {
//   let tagtitle = document.createElement("h2");
//   tagtitle.classList.add("slider-main-title");
//   tagtitle.append(data.mainTitle);
//   // let h2tag = createh2tag(data[sliderindex]);
//   sliderContent.append(tagtitle);
// });

// function createh2tag(data) {
//   let tagtitle = document.createElement("h2");
//   tagtitle.classList.add("slider-main-title");
//   tagtitle.append(data.mainTitle);
//   let h2tag = createh2tag(data[sliderindex]);
//   sliderContent.appendChild(h2tag);
// }
// createh2tag();

// function insertSliderTitle(data) {
//   const myswiper = document.querySelector(".swiper-wrapper");
//   data.forEach((a) => {
//     let dataDiv = document.querySelectorAll(".swiper-slide");
//     let newdata = document.createElement("h2");
//     newdata.classList.add("slider-main-title");
//     let newtitle = document.createElement("h3");
//     newtitle.classList.add("slider-second-title");

//     object.values(a).forEach((value) => {
//       dataDiv.appendChild(newdata);
//       dataDiv.appendChild(newtitle);
//       myswiper.appendChild(dataDiv);
//     });
//   });
// }

// insertSliderTitle(data);

// აქ ვცდილობ ავაწყო ჩამოსასშლელი ნავიგაციის
