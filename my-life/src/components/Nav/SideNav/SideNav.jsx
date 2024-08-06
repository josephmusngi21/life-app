import React, { useState } from "react";
import Styles from "./SideNav.module.css";

function SideNav() {
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [todayCount, setTodayCount] = useState(0);

  const [search, setSearch] = useState("");

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
          <p>Tasks</p>
          <ul className={Styles.taskOptions}>
            <li>
              <div>
                <img src="" alt="" />
                <p className="Text">Upcoming</p>
              </div>
              <p>{upcomingCount}</p>
            </li>
            <li>
              <div>
                <img src="" alt="" />
                <p className="Text">Today</p>
              </div>
              <p>{todayCount}</p>
            </li>
            <li>
              <div>
                <img src="" alt="" />
                <p className="Text">Calendar</p>
              </div>
            </li>
            <li>
              <div>
                <img src="" alt="" />
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
