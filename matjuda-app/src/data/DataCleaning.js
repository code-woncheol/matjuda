import wholeData from './daelim_menu.json';

// console.log(wholeData['Corner1']);
// console.log(wholeData['Corner3']);
// console.log(wholeData['Corner6']);
// console.log(wholeData['Daelim Cook']);
// console.log(wholeData['PLUS+']);
// console.log(wholeData['델리버스']);
// console.log(wholeData['조식']);

const today = new Date(); //현재 날짜 객체 생성
const dayNum = today.getDay(); // 요일 숫자 추출(0: 일요일, 6:토요일)

const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const todayKor = days[dayNum];
// 코너별 메뉴 저장
const corner1 = wholeData['Corner1'][todayKor];
const corner3 = wholeData['Corner3'][todayKor];
const breakfast = wholeData['조식'][todayKor];
const delliBus = wholeData['델리버스'][todayKor];

export default {
  corner1: corner1, corner3: corner3, breakfast: breakfast, delliBus: delliBus
}