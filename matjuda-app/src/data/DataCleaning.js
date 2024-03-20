import "./daelim_menu.json";

const totalMenu = require("./daelim_menu.json");

//오늘 요일 가지고 오기
const today = new Date().toLocaleDateString("ko-KR", { weekday: "long" });
// console.log(today); // 현재 요일 출력 ("월요일" 예시)

for (const cornerName in totalMenu) {
  if (cornerName === "") {
    continue;
  }

  const cornerMenu = totalMenu[cornerName];
  const menuList = cornerMenu[today];

  console.log(`**${cornerName}**`);
  for (const menu of menuList) {
    console.log(menu);
  }
}
