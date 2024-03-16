const today = new Date().getDay(); // 오늘 요일 (0: 일요일, 1: 월요일, ...)
const weekdays = [  "월요일",  "화요일",  "수요일",  "목요일",  "금요일",  "토요일",
  "일요일",
];
const day = today === 0 ? "일요일" : weekdays[today - 1]; // 오늘 요일 문자열



// JSON 데이터 불러오기
const url = "./public/crawling/daelim_menu.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const menus = data;

    // 각 식당 메뉴 출력
    const menuCorner1 = document.getElementById("menu-corner1");
    menuCorner1.innerHTML = menus.Corner1[day].join("<br />");

    const menuCorner3 = document.getElementById("menu-corner3");
    menuCorner3.innerHTML = menus.Corner3[day].join("<br />");

    const menuBreakfast = document.getElementById("menu-breakfast");
    menuBreakfast.innerHTML = menus.조식[day].join("<br />");

    const menuCorner6 = document.getElementById("menu-corner6");
    menuCorner6.innerHTML = menus.Corner6[day].join("<br />");

    const menuDaelimcook = document.getElementById("menu-daelimcook");

    if (menus.hasOwnProperty("Daelim Cook")) {
      menuDaelimcook.innerHTML = menus["Daelim Cook"][day].join("<br />");
    } else if (menus.hasOwnProperty("Daelimcook")) {
      menuDaelimcook.innerHTML = menus.Daelimcook[day].join("<br />");
    }

    const menudellibus = document.getElementById("menu-dellibus");

    if (menus.hasOwnProperty("델리버스")) {
      menudellibus.innerHTML = menus["델리버스"][day].join("<br />");
    } else if (menus.hasOwnProperty("dellibus")) {
      menudellibus.innerHTML = menus.dellibus[day].join("<br />");
    }

    const menuplus = document.getElementById("menu-plus");

    if (menus.hasOwnProperty("PLUS+")) {
      menuplus.innerHTML = menus["PLUS+"][day].join("<br />");
    } else if (menus.hasOwnProperty("plus")) {
      menuplus.innerHTML = menus.plus[day].join("<br />");
    }
  });

document.getElementById("today-day").innerHTML = day;

// 특정 시간대 설정
var targetTime = new Date(); // 현재 시간을 가져옵니다.
var currentHour = targetTime.getHours(); // 현재 시간의 시간을 가져옵니다.

// 시간이 9시부터 11시 사이인 경우에만 해당 요소를 보여줍니다.
if (currentHour >= 0 && currentHour <= 11) {
    document.getElementById("breakfast").classList.remove("hidden");
} else {
    document.getElementById("breakfast").classList.add("hidden");
}