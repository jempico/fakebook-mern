import React, { useState } from "react";
import "./dropdownList.css";
import {BookmarkBorder, NotificationAdd, CancelPresentation} from '@mui/icons-material/';


export default function DropdownList(props){
  return (
    <>
    <div className="arrowUpWrapper">
      <div className="arrowUp"></div>
    </div>
    <div className="dropdownListWrapper">
        <ul className="dropdownList">
          <li className="dropdownListItem">
            <BookmarkBorder className="dropdownListIcon"/>
              <div className="dropdownListDesc">
                  <span className="dropdownListTitle">Save post</span>
                  <span className="dropdownListInfo">It will be added to your saved posts.</span>
              </div>
          </li>
          <li className="dropdownListItem oneLine">
            <NotificationAdd className="dropdownListIcon"/>
            <span className="dropdownListTitle">Activate notifications</span>
          </li>
          <li className="dropdownListItem">
            <CancelPresentation className="dropdownListIcon"/>
              <div className="dropdownListDesc">
                  <span className="dropdownListTitle">Hide post</span>
                  <span className="dropdownListInfo">See less posts like this.</span>
              </div>
          </li>
         

        </ul>
    </div>
    </>
  )
};