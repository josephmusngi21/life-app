import React, { useState } from "react";
import Styles from "./SideNav.module.css";
import Item from '../NavAsset/Item/Item';
import { toFormData } from "axios";

function SideNav() {
  const [upcoming, setUpcoming] = useState({});
  const [today, setToday] = useState({});

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState({});
  const [list, setlist] = useState({});

  // setTags(tags[..., newTag]); ? maybe something like this
  // setList(tags[..., newList]); ? maybe something like this

  const handleChange = (e) => {
    e.prevent.default();
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.menu}>
        <div>
          <p>Menu</p>
          {/* Option, three bars that will collapse the whole menu to only show the icons*/}
        </div>
        <div>
          <input type="text" placeholder="Search" onChange={handleChange} />
          <img src="" alt="SearchBtn" />
        </div>
        {/* Need to make search work where it will go through the todo Lists to find a specific todo */}
      </div>

      <div className={Styles.content}>
        <div className={Styles.task}>
          <p className={Styles.smallFont}>Tasks</p>
          <ul className={Styles.taskOptions}>
            <li>
              <div className={Styles.countOption}>
                <div className={Styles.left}>
                  <img src="" alt="Upcoming" />
                  <p className="Text">Upcoming</p>
                </div>
                <p>{upcoming ? 0 : upcoming.length}</p>
                {/* ! need to make it so that it populates upcoming or make 
                it so that upcoming grabs everything thats coming in a week, so might need a week variable to store */}
              </div>
            </li>
            <li>
              <div className={Styles.countOption}>
                <div className={Styles.left}>
                  <img src="" alt="Today" />
                  <p className="Text">Today</p>
                </div>
                <p>{today ? 0 : today.length}</p>
                {/* ! need to make it so that it moves everything that day from the calender to a object to make it easier to grab and count */}
              </div>
            </li>
            <li>
              <div className={Styles.option}>
                <img src="" alt="Calender" />
                <p className="Text">Calender</p>
              </div>
            </li>
            <li>
              <div className={Styles.option}>
                <img src="" alt="StickyWall" />
                <p className="Text">Sticky Wall</p>
              </div>
            </li>
          </ul>
          {/* Need to have upcoming Count and today Count Working*/}
        </div>

        <div className="Lists">
          {/* This will have all your lists, under the display of the lists you have, you will be able to 'Add New List', next to each list it will also have the number of things to do in that list  */}
          <h4>Lists</h4>
        </div>

        <div className="Tags">
          {/* This will allow you to press a tag and it will show any note with the following tags, next to the tags you will be able to '+Add Tag's */}
        </div>
        <h4>Tags</h4>
      </div>

      <div className="footer">
        <ul>
          <li>
            <img src="" alt="Settings" />
            Settings
          </li>
          <li>
            <img src="" alt="Sign Out" />
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
