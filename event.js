const mainEventsWrapper = document.querySelector(".main-events-wrapper");
const firstNext = document.querySelector(".first-next");
const secondNext = document.querySelector(".second-next");
const thirdNext = document.querySelector(".third-next");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");
alert("Welcome to the website Luffy!");
const mainEvent = [
  {
    eventName: "BOOGIE FRIDAY",
    eventDate: "13-DECEMBER-2024",
    eventVenue: "VICK'S Cafe",
    eventMC: ["BLUE CHEESE"],
    featuring: ["NAIJA BANKS", "ABUTI MPHOZA", "IZE", "BLAQSOUL", "MR MDLULI", "NTANGA", "KANYE WEST"],
    eventPic: "vicks thirteenth.jpg"
  },
  {
    eventName: "BACARDI SUNDAY",
    eventDate: "15-DECEMBER-2024",
    eventVenue: "VICK'S Cafe",
    eventMC: ["BLUE CHEESE"],
    featuring: ["NAIJA BANKS", "ABUTI MPHOZA", "IZE", "BLAQSOUL", "MR MDLULI", "SBU NDENGESE", "DJ COOPER", "MA K", "IKE", "MAJOZI", "FUNKIEY", "KANYE WEST"],
    eventPic: "vicks fifteenth.jpg"
  },
  {
    eventName: "BOOGIE FRIDAY",
    eventDate: "20-DECEMBER-2024",
    eventVenue: "VICK'S Cafe",
    eventMC: ["BLUE CHEESE"],
    featuring: ["NAIJA BANKS", "ABUTI MPHOZA", "IZE", "BLAQSOUL", "MR MDLULI", "NTANGA"],
    eventPic: "vicks twentieth.jpg"
  },
  {
    eventName: "EXCLUSIVE SATURDAY",
    eventDate: "21-DECEMBER-2024",
    eventVenue: "VICK'S Cafe",
    eventMC: ["BLUE CHEESE"],
    featuring: ["NAIJA BANKS", "ABUTI MPHOZA", "IZE", "BLAQSOUL", "MR MDLULI", "NTANGA", "TEMPTY T", "MARIO DEEP SA", "MFANA STRAATA", "DJ JERRY SA", "TEE NGWANA MAN"],
    eventPic: "vick twenty first.jpg"
  },
  {
    eventName: "BACARDI SUNDAY",
    eventDate: "22-DECEMBER-2024",
    eventVenue: "VICK'S Cafe",
    eventMC: [""],
    featuring: ["NAIJA BANKS", "ABUTI MPHOZA", "IZE", "BLAQSOUL", "MR MDLULI", "NTANGA", "SBU NDENGESE", "DJ COOPER", "MA K", "IKE", "MAJOZI", "FUNKIEY", "KANYE WEST"],
    eventPic: "vicks twenty second.jpg"
  },
  {
    eventName: "THE LAST BOOGIE FRIDAY",
    eventDate: "27-DECEMBER-2024",
    eventVenue: "VICK'S Cafe",
    eventMC: ["BLUE CHEESE", "ANNABELL"],
    featuring: ["NAIJA BANKS", "ABUTI MPHOZA", "IZE", "BLAQSOUL", "MR MDLULI", "NTANGA", "DJ SOUL D", "SLAY QUEEN", "VEGAH DA DJ AND SKHOMZA", "TEE NGWANA MANI", "TEMPTY T", "THEE REAL VETJA"],
    eventPic: "vicks twenty seventh.jpg"
  },
  {
    eventName: "BACARDI SUNDAY",
    eventDate: "29-DECEMBER-2024",
    eventVenue: "VICK'S Cafe",
    eventMC: ["BLUE CHEESE"],
    featuring: ["NAIJA BANKS", "ABUTI MPHOZA", "IZE", "BLAQSOUL", "MR MDLULI", "NTANGA", "DJ COOPER", "SBU NDENGESE", "DJ IKE", "MA K", "FUNKIEY", "MAJOZI"],
    eventPic: "vicks twenty ninth.jpg"
  },
  {
    eventName: "LAST SUNDAY",
    eventDate: "31-DECEMBER-2024",
    eventVenue: "VICK'S Cafe",
    eventMC: ["BLUE CHEESE"],
    featuring: ["NAIJA BANKS", "ABUTI MPHOZA", "IZE", "BLAQSOUL", "MR MDLULI", "NTANGA", "KERMIT DON KALE", "PIANO MAMBAS", "SAKHO", "KATLEGO MESSO", "SLIMKAY AND LAFORTEE", "STUMZA 313", "DJ ESCAPE", "MOTSO DA DJ", "EMKAY AND KAY D", "CRYSTAL"],
    eventPic: "vicks thirty first.jpg"
  },
  {
    eventName: "BOOGIE FRIDAY",
    eventDate: "13-DECEMBER-2024",
    eventVenue: "VICK'S Cafe",
    eventMC: ["BLUE CHEESE"],
    featuring: ["NAIJA BANKS", "ABUTI MPHOZA", "IZE", "BLAQSOUL", "MR MDLULI", "NTANGA"],
    eventPic: "vicks thirteenth.jpg"
  }
];

let theMC = "";
for(let l = 0; l < mainEvent[0].eventMC.length; l++) {
  theMC += mainEvent[0].eventMC[l];
}

let theFeature = "";
let theFeature1 = "";
let theFeature2 = "";
let theFeature3 = "";
let theFeature4 = "";
let theFeature5 = "";
let theFeature6 = "";
let theFeature7 = "";
let theFeature8 = "";

  for(let m = 0; m < mainEvent[0].featuring.length; m++) {
    theFeature += ` ${mainEvent[0].featuring[m]} | `;
  }
  for(let m = 0; m < mainEvent[1].featuring.length; m++) {
    theFeature1 += ` ${mainEvent[1].featuring[m]} | `;
  }
  for(let m = 0; m < mainEvent[2].featuring.length; m++) {
    theFeature2 += ` ${mainEvent[2].featuring[m]} | `;
  }
  for(let m = 0; m < mainEvent[3].featuring.length; m++) {
    theFeature3 += ` ${mainEvent[3].featuring[m]} | `;
  }
  for(let m = 0; m < mainEvent[4].featuring.length; m++) {
    theFeature4 += ` ${mainEvent[4].featuring[m]} | `;
  }
  for(let m = 0; m < mainEvent[5].featuring.length; m++) {
    theFeature5 += ` ${mainEvent[5].featuring[m]} | `;
  }
  for(let m = 0; m < mainEvent[6].featuring.length; m++) {
    theFeature6 += ` ${mainEvent[6].featuring[m]} | `;
  }
  for(let m = 0; m < mainEvent[7].featuring.length; m++) {
    theFeature7 += ` ${mainEvent[7].featuring[m]} | `;
  }
  for(let m = 0; m < mainEvent[8].featuring.length; m++) {
    theFeature8 += ` ${mainEvent[8].featuring[m]} | `;
  }

  let thyMC = "",
      thyMC1 = "",
      thyMC2 = "",
      thyMC3 = "",
      thyMC4 = "",
      thyMC5 = "",
      thyMC6 = "",
      thyMC7 = "",
      thyMC8 = "";

  for(let p = 0; p < mainEvent[0].eventMC.length; p++) {
    thyMC += ` | ${mainEvent[0].eventMC[p]} | `;
  }
  for(let p = 0; p < mainEvent[1].eventMC.length; p++) {
    thyMC1 += ` | ${mainEvent[1].eventMC[p]} | `;
  }
  for(let p = 0; p < mainEvent[2].eventMC.length; p++) {
    thyMC2 += ` | ${mainEvent[2].eventMC[p]} | `;
  }
  for(let p = 0; p < mainEvent[3].eventMC.length; p++) {
    thyMC3 += ` | ${mainEvent[3].eventMC[p]} | `;
  }
  for(let p = 0; p < mainEvent[4].eventMC.length; p++) {
    thyMC4 += ` | ${mainEvent[4].eventMC[p]} | `;
  }
  for(let p = 0; p < mainEvent[5].eventMC.length; p++) {
    thyMC5 += ` | ${mainEvent[5].eventMC[p]} | `;
  }
  for(let p = 0; p < mainEvent[6].eventMC.length; p++) {
    thyMC6 += ` | ${mainEvent[6].eventMC[p]} | `;
  }
  for(let p = 0; p < mainEvent[7].eventMC.length; p++) {
    thyMC7 += ` | ${mainEvent[7].eventMC[p]} | `;
  }
  for(let p = 0; p < mainEvent[8].eventMC.length; p++) {
    thyMC8 += ` | ${mainEvent[8].eventMC[p]} | `;
  }

  for(let i = 0; i < 3; i++) {
    if(i === 0) {
      mainEventsWrapper.innerHTML += `
                              <div class="event-wrapped">
                                <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                <p class="event-name">${mainEvent[i].eventName}</p>
                                <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                <p class="event-mc">MC: ${thyMC}</p>
                                <p class="event-feature">LineUp: ${theFeature} </p>
                              </div>`;
    } else if(i === 1) {
      mainEventsWrapper.innerHTML += `
                              <div class="event-wrapped">
                                <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                <p class="event-name">${mainEvent[i].eventName}</p>
                                <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                <p class="event-mc">MC: ${thyMC1}</p>
                                <p class="event-feature">LineUp: ${theFeature1} </p>
                              </div>`;
    } else if(i === 2) {
      mainEventsWrapper.innerHTML += `
                              <div class="event-wrapped">
                                <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                <p class="event-name">${mainEvent[i].eventName}</p>
                                <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                <p class="event-mc">MC: ${thyMC2}</p>
                                <p class="event-feature">LineUp: ${theFeature2} </p>
                              </div>`;
};
};

  firstNext.addEventListener("click", () => {
    mainEventsWrapper.innerHTML = "";
    for(let i = 0; i < 3; i++) {
      if(i === 0) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC}</p>
                                  <p class="event-feature">LineUp: ${theFeature} </p>
                                </div>`;
      } else if(i === 1) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC1}</p>
                                  <p class="event-feature">LineUp: ${theFeature1} </p>
                                </div>`;
      } else if(i === 2) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC2}</p>
                                  <p class="event-feature">LineUp: ${theFeature2} </p>
                                </div>`;
  };
};
  });


  secondNext.addEventListener("click", () => {
    mainEventsWrapper.innerHTML = "";
    for(let i = 3; i < 6; i++) {
      if(i === 3) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC3}</p>
                                  <p class="event-feature">LineUp: ${theFeature3} </p>
                                </div>`;
      } else if(i === 4) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC4}</p>
                                  <p class="event-feature">LineUp: ${theFeature4} </p>
                                </div>`;
      } else if(i === 5) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC5}</p>
                                  <p class="event-feature">LineUp: ${theFeature5} </p>
                                </div>`;
      };
    };
  });

  thirdNext.addEventListener("click", () => {
    mainEventsWrapper.innerHTML = "";
    for(let i = 6; i < 9; i++) {
      if(i === 6) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC6}</p>
                                  <p class="event-feature">LineUp: ${theFeature6} </p>
                                </div>`;
      } else if(i === 7) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC7}</p>
                                  <p class="event-feature">LineUp: ${theFeature7} </p>
                                </div>`;
      } else if(i === 8) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC8}</p>
                                  <p class="event-feature">LineUp: ${theFeature8} </p>
                                </div>`;
      };
    };
  });
console.log(mainEvent.length);
searchBtn.addEventListener("click", () => {
  mainEventsWrapper.innerHTML = "";
    if(theFeature.includes(searchInput.value)) {
      mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[0].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[0].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[0].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[0].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC}</p>
                                  <p class="event-feature">LineUp: ${theFeature} </p>
                                </div>`;
    };
    if(theFeature1.includes(searchInput.value)) {
      mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[1].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[1].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[1].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[1].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC1}</p>
                                  <p class="event-feature">LineUp: ${theFeature1} </p>
                                </div>`;
    };
    if(theFeature2.includes(searchInput.value)) {
      mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[2].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[2].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[2].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[2].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC2}</p>
                                  <p class="event-feature">LineUp: ${theFeature2} </p>
                                </div>`;
    };
    if(theFeature3.includes(searchInput.value)) {
      mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[3].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[3].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[3].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[3].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC3}</p>
                                  <p class="event-feature">LineUp: ${theFeature3} </p>
                                </div>`;
    };
    if(theFeature4.includes(searchInput.value)) {
      mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[4].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[4].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[4].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[4].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC4}</p>
                                  <p class="event-feature">LineUp: ${theFeature4} </p>
                                </div>`;
    };
    if(theFeature5.includes(searchInput.value)) {
      mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[5].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[5].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[5].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[5].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC5}</p>
                                  <p class="event-feature">LineUp: ${theFeature5} </p>
                                </div>`;
    };
    if(theFeature6.includes(searchInput.value)) {
      mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[6].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[6].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[6].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[6].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC6}</p>
                                  <p class="event-feature">LineUp: ${theFeature6} </p>
                                </div>`;
    };
    if(theFeature7.includes(searchInput.value)) {
      mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[7].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[7].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[7].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[7].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC7}</p>
                                  <p class="event-feature">LineUp: ${theFeature7} </p>
                                </div>`;
    };
    if(theFeature8.includes(searchInput.value)) {
      mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[8].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[8].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[8].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[8].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC8}</p>
                                  <p class="event-feature">LineUp: ${theFeature8} </p>
                                </div>`;
  };

  for(let i = 0; i < mainEvent.length; i++) {
    if(mainEvent[i].eventVenue.includes(searchInput.value)) {
      if(i === 0) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC}</p>
                                  <p class="event-feature">LineUp: ${theFeature} </p>
                                </div>`;
      } else if(i === 1) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC1}</p>
                                  <p class="event-feature">LineUp: ${theFeature1} </p>
                                </div>`;
      } else if(i === 2) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC2}</p>
                                  <p class="event-feature">LineUp: ${theFeature2} </p>
                                </div>`;
      } else if(i === 3) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC3}</p>
                                  <p class="event-feature">LineUp: ${theFeature3} </p>
                                </div>`;
      } else if(i === 4) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC4}</p>
                                  <p class="event-feature">LineUp: ${theFeature4} </p>
                                </div>`;
      } else if(i === 5) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC5}</p>
                                  <p class="event-feature">LineUp: ${theFeature5} </p>
                                </div>`;
      } else if(i === 6) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC6}</p>
                                  <p class="event-feature">LineUp: ${theFeature6} </p>
                                </div>`;
      } else if(i === 7) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC7}</p>
                                  <p class="event-feature">LineUp: ${theFeature7} </p>
                                </div>`;
      } else if(i === 8) {
        mainEventsWrapper.innerHTML += `
                                <div class="event-wrapped">
                                  <img src="${mainEvent[i].eventPic}" class="event-image"/>
                                  <p class="event-name">${mainEvent[i].eventName}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventDate}</p>
                                  <p class="event-date">DATE: ${mainEvent[i].eventVenue}</p>
                                  <p class="event-mc">MC: ${thyMC8}</p>
                                  <p class="event-feature">LineUp: ${theFeature8} </p>
                                </div>`;
      };
    };
  };
  
});