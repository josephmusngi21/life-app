import React, { useState } from "react";

function SideNav() {
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [todayCount, setTodayCount] = useState(0);

  return (
    <div>
      <div className="Menu">
        <div>
          <h1>Menu</h1>
          {/* Option, three bars that will collapse the whole menu to only show the icons*/}
        </div>
        <input type="text" placeholder="Search">
          <img src="" alt="SearchBtn"></img>
        </input>
        {/* Need to make search work where it will go through the todo Lists to find a specific todo */}
      </div>

      <div className="Content">
        <div className="Task">
          <p>Tasks</p>
          <ul className="task-options">
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
                <p className="Text">Calender</p>
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
        </div>

        <div className="Tags">
          {/* This will allow you to press a tag and it will show any note with the following tags, next to the tags you will be able to '+Add Tag's */}
        </div>
      </div>

      <div className="footer">
        <ul>
          <li><img src="" alt="Settings" />Settings</li>
          <li><img src="" alt="Sign Out" />Sign Out</li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
