import React from "react";
import './MenuCard.css'
import todayMenu from "../../data/DataCleaning"

export default function MenuCard({image, isSoldOut, menu, recentSoldOut}){
  return (
    <div className="menu_card">
      
      <div className="menu_image_box"><img src={image} alt="" /></div>
      <div className="about_sold_out">
      <p className="is_sold_out hidden">SOLD OUT</p>
      <p className="sold_out_time">금일 12:53 소진 됨</p>
      </div>
      <p className="whole_menu">{menu.map((item, index) => <span key={index}>{item}<br /></span>)}</p>
      <p className="recent_sold_out_time">가장 최근 해당 메뉴 소진 시간 {recentSoldOut}</p>
    
    </div>
  )
}