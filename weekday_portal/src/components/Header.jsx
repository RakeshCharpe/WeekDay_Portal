import * as React from 'react';
import SearchBar from "./SearchBar";

const Header = () => {
   
  const array = [5, 6, 7, 4];
  const searchData = [{
    id: 1,
    experience: 2,
    role:"frontend"
  },
    {
    id: 2,
    experience: 5,
    role:"backend"
    },
    {
    id: 3,
    experience: 3,
    role:"FullStack"
    },
    {
    id: 4,
    experience: 1,
    role:"ios"
    }
  ]

  return (
    <div className="header-container">
      <div className="title">
        <h3>Search Jobs</h3>
      </div>
      <div className="filter-container">
        {/* {array.map((e) => (<SearchBar res={searchData} />))} */}
      </div>
    </div>
  );
};

export default Header;
