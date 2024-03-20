import React from "react";
import "./MenuCard.css";
import data from "../../data/DataCleaning";

// 코너 넘버, 이미지, 메뉴 목록, 소진 상태를 props로 받는 컴포넌트
function MenuCard({ cornerNumber, menuImage, menuList, isSoldOut }) {
  return (
    <article id="menu-card">
      {/* 코너 넘버 표시 */}
      <h2>{cornerNumber}코너</h2>

      {/* 메뉴 이미지 표시 */}
      <div className="menu-img-box">
        {/* <img className="menu-img" src={menuImage} alt="메뉴 이미지" /> */}
      </div>

      {/* 메뉴 목록 표시 */}
      <ul className="menu-list"></ul>

      {/* 메뉴 소진 여부 표시 */}
      {<span className="is-sold-out">품절</span>}
    </article>
  );
}

export default MenuCard;
